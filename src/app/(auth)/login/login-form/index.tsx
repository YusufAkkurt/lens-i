'use client';

import { LoadingButton } from '@/components/loading-button';
import { PasswordInput } from '@/components/password-input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { loginSchema, LoginValues } from '@/lib/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { login } from '../action';
import { Input } from '@/components/ui/input';

export const LoginForm = () => {
	const [error, setError] = useState<string>();

	const [isPending, startTransition] = useTransition();

	const form = useForm<LoginValues>({ resolver: zodResolver(loginSchema), defaultValues: { username: '', password: '' } });

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit((values) => {
					try {
						setError(undefined);

						startTransition(async () => {
							const { error } = await login(values);
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
					Log in
				</LoadingButton>
			</form>
		</Form>
	);
};
