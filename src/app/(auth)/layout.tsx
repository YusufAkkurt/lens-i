import { validateRequest } from '@/auth';
import { redirect } from 'next/navigation';
import React from 'react';

type Props = {
	children: React.ReactNode;
};

export default async function Layout({ children }: Props) {
	const { user } = await validateRequest();

	if (!!user) redirect('/');

	return children;
}
