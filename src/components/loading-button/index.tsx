import React, { FC } from 'react';
import { Button, ButtonProps } from '../ui/button';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

type LoadingButtonProps = ButtonProps & { loading: boolean };

export const LoadingButton: FC<LoadingButtonProps> = ({ loading, disabled, className, children, ...props }) => {
	return (
		<Button disabled={loading || disabled} className={cn('flex items-center gap-2', className)} {...props}>
			{loading ? <Loader2 className="size-5 animate-spin" /> : null}
			{children}
		</Button>
	);
};
