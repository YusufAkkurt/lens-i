import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { formatDate, formatDistanceToNowStrict } from 'date-fns';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatRelativeDate(from: Date) {
	const currentDate = new Date();

	if (currentDate.getTime() - from.getTime() < 24 * 60 * 60 * 1000) return formatDistanceToNowStrict(from, { addSuffix: true });

	if (currentDate.getFullYear() === from.getFullYear()) return formatDate(from, 'MMM d');

	return formatDate(from, 'MMM d, yyyy');
}

export function formatCount(count: number) {
	return Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 1 }).format(count);
}
