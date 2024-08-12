'use client';

import { useSession } from '@/app/(main)/session-provider';
import React, { FC } from 'react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger
} from '../ui/dropdown-menu';
import { UserAvatar } from '../user-avatar';
import Link from 'next/link';
import { CheckIcon, LogOutIcon, MonitorIcon, MoonIcon, SunIcon, UserIcon } from 'lucide-react';
import { logout } from '@/app/(auth)/actions';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

type Props = Partial<{
	className: string;
}>;

export const UserButton: FC<Props> = ({ className }) => {
	const { user } = useSession();

	const { theme, setTheme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<button className={cn('flex-none rounded-full', className)}>
					<UserAvatar avatarUrl={user.avatarUrl} size={40} />
				</button>
			</DropdownMenuTrigger>

			<DropdownMenuContent>
				<DropdownMenuLabel>Logged in as @{user.username}</DropdownMenuLabel>

				<DropdownMenuSeparator />

				<Link href={`/users/${user.username}`}>
					<DropdownMenuItem className="cursor-pointer">
						<UserIcon className="mr-2 size-4" />
						Profile
					</DropdownMenuItem>
				</Link>

				<DropdownMenuSub>
					<DropdownMenuSubTrigger className="cursor-pointer">
						<MonitorIcon className="size-4 mr-2" />
						Theme
					</DropdownMenuSubTrigger>

					<DropdownMenuPortal>
						<DropdownMenuSubContent>
							<DropdownMenuItem className="cursor-pointer" onClick={() => setTheme('system')}>
								<MonitorIcon className="size-4 mr-2" />
								System default
								{theme === 'system' ? <CheckIcon className="ml-2 size-4" /> : null}
							</DropdownMenuItem>

							<DropdownMenuItem className="cursor-pointer" onClick={() => setTheme('light')}>
								<SunIcon className="size-4 mr-2" />
								Light theme
								{theme === 'light' ? <CheckIcon className="ml-2 size-4" /> : null}
							</DropdownMenuItem>

							<DropdownMenuItem className="cursor-pointer" onClick={() => setTheme('dark')}>
								<MoonIcon className="size-4 mr-2" />
								Dark Theme
								{theme === 'dark' ? <CheckIcon className="ml-2 size-4" /> : null}
							</DropdownMenuItem>
						</DropdownMenuSubContent>
					</DropdownMenuPortal>
				</DropdownMenuSub>

				<DropdownMenuSeparator />

				<DropdownMenuItem onClick={() => logout()} className="cursor-pointer">
					<LogOutIcon className="mr-2 size-4" />
					Logout
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
