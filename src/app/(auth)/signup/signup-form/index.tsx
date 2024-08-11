'use client';

import { LoadingButton } from '@/components/loading-button';
import { PasswordInput } from '@/components/password-input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { signUpSchema, SignUpValues } from '@/lib/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { signUp } from '../actions';

export const SignUpForm = () => {
	const [error, setError] = useState<string>();

	const [isPending, startTransition] = useTransition();

	const form = useForm<SignUpValues>({ resolver: zodResolver(signUpSchema), defaultValues: { email: '', username: '', password: '' } });

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit((values) => {
					try {
						setError(undefined);

						startTransition(async () => {
							const { error } = await signUp(values);
							if (!!error) setError(error);
						});
					} catch (error) {}
				})}
				className="my-4 grid gap-y-3">
				{error ? <p className="text-center text-destructive">{error}</p> : null}

				<FormField
					control={form.control}
					name="username"
					render={(render) => (
						<FormItem>
							<FormLabel>Username</FormLabel>
							<FormControl>
								<Input placeholder="Enter username" type="text" {...render.field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="email"
					render={(render) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input placeholder="Enter email" type="email" {...render.field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="password"
					render={(render) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<PasswordInput placeholder="Enter password" {...render.field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<LoadingButton loading={isPending} type="submit" className="w-full mt-3">
					Create account
				</LoadingButton>
			</form>
		</Form>
	);
};
