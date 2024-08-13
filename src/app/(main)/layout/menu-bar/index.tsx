import { Button } from '@/components/ui/button';
import { BellIcon, BookmarkIcon, HomeIcon, MailIcon } from 'lucide-react';
import Link from 'next/link';
import React, { FC } from 'react';

type Props = Partial<{
	className: string;
}>;

export const MenuBar: FC<Props> = ({ className }) => {
	return (
		<aside className={className}>
			<Button variant="ghost" className="flex items-center justify-start gap-3" title="Home" asChild>
				<Link href="/">
					<HomeIcon />
					<span className="hidden lg:inline">Home</span>
				</Link>
			</Button>

			<Button variant="ghost" className="flex items-center justify-start gap-3" title="Notifications" asChild>
				<Link href="/notifications">
					<BellIcon />
					<span className="hidden lg:inline">Notifications</span>
				</Link>
			</Button>

			<Button variant="ghost" className="flex items-center justify-start gap-3" title="Messages" asChild>
				<Link href="/messages">
					<MailIcon />
					<span className="hidden lg:inline">Messages</span>
				</Link>
			</Button>

			<Button variant="ghost" className="flex items-center justify-start gap-3" title="Bookmarks" asChild>
				<Link href="/bookmarks">
					<BookmarkIcon />
					<span className="hidden lg:inline">Bookmarks</span>
				</Link>
			</Button>
		</aside>
	);
};
