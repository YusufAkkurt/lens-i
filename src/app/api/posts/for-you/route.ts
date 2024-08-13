import { getPosts } from '@/app/(main)/actions';
import { validateRequest } from '@/auth';

export async function GET() {
	try {
		const { user } = await validateRequest();
		if (!user) return Response.json({ error: 'Unauthorized' }, { status: 500 });

		const posts = await getPosts();

		return Response.json(posts);
	} catch (error) {
		console.log(error);
		return Response.json({ error: 'Internal server error' }, { status: 500 });
	}
}
