import { validateRequest } from '@/auth';
import { redirect } from 'next/navigation';
import React from 'react';
import { Header } from './layout/header';
import { MenuBar } from './layout/menu-bar';
import { SessionProvider } from './session-provider';

type Props = {
	children: React.ReactNode;
};

export default async function Layout({ children }: Props) {
	const session = await validateRequest();

	if (!session.user) redirect('/login');

	return (
		<SessionProvider value={session}>
			<Header />

			<main className="container flex gap-5 grow">
				<MenuBar className="sticky top-[5.2rem] h-fit hidden sm:block flex-none my-3 rounded-xl bg-card px-3 py-5 lg:px-5 shadow-sm xl:w-80" />
				{children}
			</main>

			<MenuBar className="sticky bottom-0 flex w-full justify-center gap-5 border-t bg-card p-3 sm:hidden" />
		</SessionProvider>
	);
}
