import React, { useState } from 'react';
import { Input, InputProps } from '../ui/input';
import { cn } from '@/lib/utils';
import { EyeIcon, EyeOffIcon } from 'lucide-react';

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className="relative">
			<Input type={showPassword ? 'text' : 'password'} className={cn('pe-10', className)} ref={ref} {...props} />
			<button
				type="button"
				onClick={() => setShowPassword((_state) => !_state)}
				title={showPassword ? 'Hide Password' : 'Show Password'}
				className="absolute end-3 top-1/2 -translate-y-1/2 transform text-muted-foreground">
				{showPassword ? <EyeOffIcon className="size-5" /> : <EyeIcon className="size-5" />}
			</button>
		</div>
	);
});

PasswordInput.displayName = 'PasswordInput';

export { PasswordInput };
