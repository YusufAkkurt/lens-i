import { validateRequest } from '@/auth';
import prisma from '@/lib/prisma';
import { userDataSelect } from '@/lib/types';
import { unstable_cache } from 'next/cache';

export async function getUsersToFollow(count: number) {
	const { user } = await validateRequest();

	if (!user) return [];

	const users = await prisma.user.findMany({ where: { NOT: { id: user.id } }, select: userDataSelect, take: count });

	return users;
}

export const getTrendingTopics = unstable_cache(
	async () => {
		const result = await prisma.$queryRaw<{ hashtag: string; count: bigint }[]>`
		select lower(unnest(regexp_matches(content, '#[[:alnum:]_]+', 'g'))) as hashtag, count(*) as count 
		from posts group by (hashtag) order by count desc, hashtag asc limit 5
	`;

		return result.map((_row) => ({ hashtag: _row.hashtag, count: Number(_row.count) }));
	},
	['trending_topics'],
	{ revalidate: 3 * 60 * 60 }
);
