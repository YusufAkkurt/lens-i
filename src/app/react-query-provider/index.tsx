'use client';

import React, { FC, PropsWithChildren, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export const ReactQueryProvider: FC<PropsWithChildren> = ({ children }) => {
	const [client] = useState(new QueryClient());

	return (
		<QueryClientProvider client={client}>
			{children}
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};
