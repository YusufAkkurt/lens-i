import { kyInstance } from '@/lib/ky';
import { FolloweInfo } from '@/lib/types';
import { useQuery } from '@tanstack/react-query';

export const useFollowerInfo = (userId: string, initialState: FolloweInfo) => {
	const query = useQuery({
		queryKey: ['follower-info', userId],
		queryFn: () => kyInstance.get(`/api/users/${userId}/followers`).json<FolloweInfo>(),
		initialData: initialState,
		staleTime: Infinity
	});

	return query;
};
