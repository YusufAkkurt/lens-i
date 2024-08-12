import { SearchField } from '@/components/searh-field';
import { UserButton } from '@/components/user-button';
import Link from 'next/link';
import React from 'react';

export const Header = () => {
	return (
		<header className="sticky bg-card shadow top-0 z-10">
			<div className="container flex items-center justify-center md:justify-between gap-5 py-3 flex-wrap">
				<Link href="/" className="text-2xl font-bold">
					lens<span className="text-primary">-i</span>
				</Link>
				<SearchField />
				<UserButton />
			</div>
		</header>
	);
};
