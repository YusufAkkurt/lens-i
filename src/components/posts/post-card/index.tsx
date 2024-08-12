import { UserAvatar } from '@/components/user-avatar';
import { PostData } from '@/lib/types';
import { formatRelativeDate } from '@/lib/utils';
import Link from 'next/link';
import { FC } from 'react';

type Props = {
	post: PostData;
};

export const PostCard: FC<Props> = ({ post }) => {
	return (
		<article className="rounded-xl bg-card shadow-sm p-5">
			<div className="flex flex-wrap gap-3">
				<Link href={`/users/${post.user.username}`}>
					<UserAvatar avatarUrl={post.user.avatarUrl} />
				</Link>

				<div>
					<Link href={`/users/${post.user.username}`} className="block font-medium hover:underline">
						{post.user.username}
					</Link>

					<Link href={`/posts/${post.id}`} className="block text-sm text-muted-foreground hover:underline">
						{formatRelativeDate(post.createdAt)}
					</Link>
				</div>
			</div>

			<div className="whitespace-pre-line break-words mt-3">{post.content}</div>
		</article>
	);
};
