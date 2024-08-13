import React, { FC, PropsWithChildren } from 'react';
import { useInView } from 'react-intersection-observer';

type Props = PropsWithChildren & {
	onBottomReached: () => void;
	className?: string;
};

export const InfiniteScrollContainer: FC<Props> = ({ children, onBottomReached, className }) => {
	const { ref } = useInView({
		rootMargin: '200px',
		onChange(inView) {
			if (!!inView) onBottomReached();
		}
	});

	return (
		<div className={className}>
			{children}
			<div ref={ref} />
		</div>
	);
};
