import { PostEditor } from '@/components/posts/editor/post-editor';
import { ForYouFeed } from './for-you-feed';
import { TrendsSidebar } from './layout/trends-sidebar';

export default async function Home() {
	return (
		<section className="flex gap-5 py-5 w-full">
			<div className="w-full">
				<PostEditor />

				<section className="grid gap-y-5 pt-5 w-full">
					<ForYouFeed />
				</section>
			</div>

			<TrendsSidebar />
		</section>
	);
}
