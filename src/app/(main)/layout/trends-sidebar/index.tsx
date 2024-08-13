import { Button } from '@/components/ui/button';
import { UserAvatar } from '@/components/user-avatar';
import { Loader2Icon } from 'lucide-react';
import Link from 'next/link';
import { Suspense } from 'react';
import { getTrendingTopics, getUsersToFollow } from './actions';
import { formatCount } from '@/lib/utils';

export const TrendsSidebar = () => {
	return (
		<aside className="sticky top-[5.2rem] hidden md:block w-72 lg:w-80 h-fit flex-none">
			<Suspense fallback={<Loader2Icon className="m-auto animate-spin" />}>
				<WhoToFollow />

				<TrendingTopics />
			</Suspense>
		</aside>
	);
};

async function WhoToFollow() {
	const usersToFollow = await getUsersToFollow(5);

	return (
		<div className="grid gap-y-5 rounded-xl bg-card p-5 shadow-sm">
			<h3 className="block text-lg font-bold">Who to follow</h3>

			{usersToFollow.map((_user) => (
				<div key={_user.id} className="flex items-center justify-between gap-3">
					<Link href={`/users/${_user.username}`} className="flex items-center gap-3">
						<UserAvatar avatarUrl={_user.avatarUrl} className="flex-none" />

						<div>
							<p className="line-clamp-1 break-all font-semibold hover:underline">{_user.displayName}</p>
							<p className="line-clamp-1 break-all text-muted-foreground text-sm">@{_user.username}</p>
						</div>
					</Link>

					<Button>Follow</Button>
				</div>
			))}
		</div>
	);
}

async function TrendingTopics() {
	const trendingTopics = await getTrendingTopics();

	return (
		<div className="grid gap-y-5 rounded-xl bg-card p-5 shadow-sm mt-5">
			<h3 className="block text-lg font-bold">Trending Topics</h3>

			{trendingTopics.map(({ hashtag, count }) => (
				<Link key={hashtag} href={`/hashtag/${hashtag.split('#')[1]}`} className="block">
					<p className="line-clamp-1 break-all font-semibold hover:underline" title={hashtag}>
						{hashtag}
					</p>

					<small className="block text-muted-foreground">
						{formatCount(count)} {count === 1 ? 'post' : 'posts'}
					</small>
				</Link>
			))}
		</div>
	);
}
