import { Metadata } from 'next';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LoginForm } from './login-form';

export const metadata: Metadata = {
	title: 'Login'
};

export default function Page() {
	return (
		<main className="h-lvh grid place-items-center p-5">
			<section className="grid md:grid-cols-2 h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
				<div className="p-10 w-full h-full overflow-y-auto">
					<h1 className="text-3xl font-bold text-center">
						Login to lens<span className="text-primary">-i</span>
					</h1>

					<div className="mt-7">
						<LoginForm />

						<Link href="/signup" className="hover:underline block text-center">
							Don't have an account? Sign up
						</Link>
					</div>
				</div>

				<Image
					src="https://cdn.pixabay.com/photo/2021/08/22/08/15/network-6564511_1280.jpg"
					width="1080"
					height="720"
					alt="lens-i Login Page"
					className="hidden md:block object-cover w-full h-full"
				/>
			</section>
		</main>
	);
}
