'use client';

import { PostCard } from '@/components/posts/post-card';
import { kyInstance } from '@/lib/ky';
import { PostData } from '@/lib/types';
import { useQuery } from '@tanstack/react-query';
import { Loader2Icon } from 'lucide-react';

export const ForYouFeed = () => {
	const query = useQuery<PostData[]>({
		queryKey: ['post-feed', 'for-you'],
		queryFn: kyInstance.get('/api/posts/for-you').json
	});

	if (query.status === 'pending') return <Loader2Icon className="mx-auto animate-spin" />;

	if (query.status === 'error') return <p className="text-center text-destructive">An error ocurred while loading posts.</p>;

	return query.data.map((_post) => <PostCard key={_post.id} post={_post} />);
};
