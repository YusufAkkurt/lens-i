import { Prisma } from '@prisma/client';

export const getUserDataSelect = (loggedInUserId: string) =>
	({
		id: true,
		username: true,
		displayName: true,
		avatarUrl: true,
		followers: { where: { followerId: loggedInUserId }, select: { followerId: true } },
		_count: { select: { followers: true } }
	} satisfies Prisma.UserSelect);

export const getPostDataInclude = (loggedInUserId: string) => ({ user: { select: getUserDataSelect(loggedInUserId) } } satisfies Prisma.PostInclude);

export type PostData = Prisma.PostGetPayload<{
	include: ReturnType<typeof getPostDataInclude>;
}>;

export type PostPage = {
	posts: PostData[];
	nextCursor: string | null;
};

export type FolloweInfo = {
	followers: number;
	isFollowedByUser: boolean;
};
