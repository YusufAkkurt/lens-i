import avatarPlaceholder from '@/assets/avatar-placeholder.svg';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { FC } from 'react';

type Props = Partial<{
	avatarUrl: string | null;
	size: number;
	className: string;
}>;

export const UserAvatar: FC<Props> = ({ avatarUrl, size, className }) => {
	return (
		<Image
			priority
			src={avatarUrl || avatarPlaceholder}
			width={size || 48}
			height={size || 48}
			alt="User avatar"
			className={cn('aspect-square h-fit flex-none rounded-full bg-secondary object-cover', className)}
		/>
	);
};
