'use client';

import { useFollowerInfo } from '@/hooks/use-follower-info';
import { kyInstance } from '@/lib/ky';
import { FolloweInfo } from '@/lib/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FC } from 'react';
import { LoadingButton } from '../loading-button';
import { useToast } from '../ui/use-toast';

type Props = {
	userId: string;
	initialState: FolloweInfo;
};

export const FollowButton: FC<Props> = ({ userId, initialState }) => {
	const { toast } = useToast();

	const queryClient = useQueryClient();

	const { data } = useFollowerInfo(userId, initialState);

	const { mutateAsync, isPending } = useMutation({
		mutationFn: () =>
			data.isFollowedByUser ? kyInstance.delete(`/api/users/${userId}/followers`) : kyInstance.post(`/api/users/${userId}/followers`)
	});

	return (
		<LoadingButton loading={isPending} variant={data.isFollowedByUser ? 'secondary' : 'default'} onClick={async () => await mutateAsync()}>
			{data.isFollowedByUser ? 'Unfollow' : 'Follow'}
		</LoadingButton>
	);
};
