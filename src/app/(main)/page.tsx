import { PostEditor } from '@/components/posts/editor/post-editor';
import React from 'react';
import { getPosts } from './actions';
import { PostCard } from '@/components/posts/post-card';

export default async function Home() {
	const posts = await getPosts();

	return (
		<>
			<PostEditor />

			<section className="grid gap-y-5 pt-5 w-full">
				{posts.map((_post) => (
					<PostCard key={_post.id} post={_post} />
				))}
			</section>
		</>
	);
}
