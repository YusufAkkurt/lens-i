'use client';

import { InfiniteScrollContainer } from '@/components/infinite-scroll-container';
import { PostCard } from '@/components/posts/post-card';
import { PostsLoadingSkeleton } from '@/components/posts/posts-loading-skeleton';
import { kyInstance } from '@/lib/ky';
import { PostPage } from '@/lib/types';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Loader2Icon } from 'lucide-react';

export const ForYouFeed = () => {
	const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = useInfiniteQuery({
		queryKey: ['post-feed', 'for-you'],
		queryFn: ({ pageParam }) => kyInstance.get('/api/posts/for-you', pageParam ? { searchParams: { cursor: pageParam } } : {}).json<PostPage>(),
		initialPageParam: null as string | null,
		getNextPageParam: (lastPage) => lastPage.nextCursor
	});

	const posts = data?.pages.flatMap((_page) => _page.posts) || [];

	if (status === 'pending') return <PostsLoadingSkeleton />;

	if (status === 'error') return <p className="text-center text-destructive">An error ocurred while loading posts.</p>;

	if (posts.length < 1 && !hasNextPage) return <p className="text-center text-muted-foreground">No one has posted anything yet.</p>;

	return (
		<InfiniteScrollContainer onBottomReached={() => (hasNextPage && !isFetching ? fetchNextPage() : {})} className="space-y-5">
			{posts.map((_post) => (
				<PostCard key={_post.id} post={_post} />
			))}

			{isFetchingNextPage ? <Loader2Icon className="mx-auto my-3 animate-spin" /> : null}
		</InfiniteScrollContainer>
	);
};
