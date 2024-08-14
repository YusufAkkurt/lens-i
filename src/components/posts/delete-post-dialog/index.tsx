import { PostData } from '@/lib/types';
import React, { FC } from 'react';
import { useDeletePostMutation } from './mutations';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { LoadingButton } from '@/components/loading-button';
import { Button } from '@/components/ui/button';

type Props = {
	post: PostData;
	open: boolean;
	onClose: () => void;
};

export const DeletePostDialog: FC<Props> = ({ onClose, post, open }) => {
	const mutation = useDeletePostMutation();

	return (
		<Dialog open={open} onOpenChange={(op) => (!op || !mutation.isPending ? onClose() : undefined)}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Delete post?</DialogTitle>
					<DialogDescription>Are you sure you want to delete this post? This action can not be undone.</DialogDescription>
				</DialogHeader>

				<DialogFooter>
					<LoadingButton
						variant="destructive"
						loading={mutation.isPending}
						onClick={async () => await mutation.mutateAsync(post.id, { onSuccess: onClose })}>
						Delete
					</LoadingButton>

					<Button variant="outline" disabled={mutation.isPending} onClick={onClose}>
						Cancel
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
