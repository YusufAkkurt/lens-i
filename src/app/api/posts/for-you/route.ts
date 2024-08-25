import { validateRequest } from '@/auth';
import prisma from '@/lib/prisma';
import { getPostDataInclude, PostPage } from '@/lib/types';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
	try {
		const { user } = await validateRequest();

		if (!user) return Response.json({ error: 'Unauthorized' }, { status: 401 });

		const cursor = request.nextUrl.searchParams.get('cursor');

		const pageSize = 10;

		const posts = await prisma.post.findMany({
			include: getPostDataInclude(user.id),
			orderBy: { createdAt: 'desc' },
			take: pageSize + 1,
			cursor: cursor ? { id: cursor } : undefined
		});

		const nextCursor = posts.length > pageSize ? posts[pageSize].id : null;

		const data: PostPage = {
			posts: posts.slice(0, pageSize),
			nextCursor
		};

		return Response.json(data);
	} catch (error) {
		console.log(error);
		return Response.json({ error: 'Internal server error' }, { status: 500 });
	}
}
