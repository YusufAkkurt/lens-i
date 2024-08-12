import { Metadata } from 'next';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SignUpForm } from './signup-form';

export const metadata: Metadata = {
	title: 'Sign Up'
};

export default function Page() {
	return (
		<main className="h-lvh grid place-items-center p-5">
			<section className="grid md:grid-cols-2 h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-xl bg-card shadow-2xl">
				<div className="p-10 w-full h-full overflow-y-auto">
					<h1 className="text-3xl font-bold text-center">
						Sign up to lens<span className="text-primary">-i</span>
					</h1>

					<p className="text-muted-foreground mt-1 text-center">
						A place where even <span className="italic">you</span> can find a friend
					</p>

					<div className="mt-6">
						<SignUpForm />

						<Link href="/login" className="hover:underline block text-center">
							Already have an account? Log in
						</Link>
					</div>
				</div>

				<Image
					src="https://cdn.pixabay.com/photo/2022/03/25/02/29/male-7090164_1280.jpg"
					width="1080"
					height="720"
					alt="lens-i Sign Up Page"
					className="hidden md:block object-cover w-full h-full"
				/>
			</section>
		</main>
	);
}
