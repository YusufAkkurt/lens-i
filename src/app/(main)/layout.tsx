import { validateRequest } from '@/auth';
import { redirect } from 'next/navigation';
import React from 'react';
import { SessionProvider } from './session-provider';

type Props = {
	children: React.ReactNode;
};

export default async function Layout({ children }: Props) {
	const session = await validateRequest();

	if (!session.user) redirect('/login');

	return <SessionProvider value={session}>{children}</SessionProvider>;
}
