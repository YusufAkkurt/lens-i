'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { Input } from '../ui/input';
import { SearchIcon } from 'lucide-react';

export const SearchField = () => {
	const router = useRouter();

	return (
		<form
			method="GET"
			action="/search"
			onSubmit={(event) => {
				event.preventDefault();

				const q = (event.currentTarget.q as HTMLInputElement).value.trim();
				if (!q) return;

				router.push(`/search?q=${encodeURIComponent(q)}`);
			}}
			className="max-w-[25rem] w-full">
			<div className="relative">
				<Input name="q" placeholder="Search" className="ps-10 bg-secondary" />
				<SearchIcon className="size-5 absolute start-3 top-1/2 -translate-y-1/2 transform text-muted-foreground" />
			</div>
		</form>
	);
};
