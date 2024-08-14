import { PostPage } from '@/lib/types';
import { InfiniteData, QueryFilters, useMutation, useQueryClient } from '@tanstack/react-query';
import { usePathname, useRouter } from 'next/navigation';
import { deletePost } from './actions';
import { useToast } from '@/components/ui/use-toast';

export const useDeletePostMutation = () => {
	const { toast } = useToast();

	const router = useRouter();
	const pathname = usePathname();

	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: deletePost,
		onSuccess: async (deletedPost) => {
			const queryFilter: QueryFilters = { queryKey: ['post-feed'] };

			await queryClient.cancelQueries(queryFilter);

			queryClient.setQueriesData<InfiniteData<PostPage, string | null>>(queryFilter, (oldData) => {
				if (!oldData) return;

				return {
					pageParams: oldData.pageParams,
					pages: oldData.pages.map((_page) => ({
						nextCursor: _page.nextCursor,
						posts: _page.posts.filter((_post) => _post.id !== deletedPost.id)
					}))
				};
			});

			toast({ description: 'Post deleted' });

			if (pathname === `/posts/${deletedPost.id}`) router.push(`/users/${deletedPost.user.username}`);
		},
		onError: (error) => {
			console.log(error);
			toast({ variant: 'destructive', description: 'Failed to delete post. Please try again.' });
		}
	});

	return mutation;
};
