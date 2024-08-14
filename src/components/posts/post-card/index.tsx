import { useSession } from '@/app/(main)/session-provider';
import { UserAvatar } from '@/components/user-avatar';
import { PostData } from '@/lib/types';
import { formatRelativeDate } from '@/lib/utils';
import Link from 'next/link';
import { FC } from 'react';
import { PostMoreButton } from './post-more-button';

type Props = {
	post: PostData;
};

export const PostCard: FC<Props> = ({ post }) => {
	const { user } = useSession();

	return (
		<article className="group/post rounded-xl bg-card shadow-sm p-5">
			<div className="flex justify-between items-start">
				<div className="flex flex-wrap gap-3">
					<Link href={`/users/${post.user.username}`}>
						<UserAvatar avatarUrl={post.user.avatarUrl} />
					</Link>

					<div>
						<Link href={`/users/${post.user.username}`} className="block font-semibold hover:underline">
							{post.user.username}
						</Link>

						<Link href={`/posts/${post.id}`} className="block text-sm text-muted-foreground hover:underline">
							{formatRelativeDate(post.createdAt)}
						</Link>
					</div>
				</div>

				{user.id === post.userId ? (
					<PostMoreButton post={post} className="opacity-0 transition-opacity group-hover/post:opacity-100" />
				) : null}
			</div>

			<div className="whitespace-pre-line break-words mt-3">{post.content}</div>
		</article>
	);
};
