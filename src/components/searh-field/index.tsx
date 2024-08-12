'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { Input } from '../ui/input';
import { SearchIcon } from 'lucide-react';

export const SearchField = () => {
	const router = useRouter();

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
			}}
			className="max-w-[30rem] w-full">
			<div className="relative">
				<Input name="q" placeholder="Search" className="ps-10 bg-primary-foreground" />
				<SearchIcon className="size-5 absolute start-3 top-1/2 -translate-y-1/2 transform text-muted-foreground" />
			</div>
		</form>
	);
};
