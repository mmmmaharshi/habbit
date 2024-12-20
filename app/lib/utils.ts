import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const calculateTargetDays = (startDate: Date, endDate: Date): number => {
	const diffInTime = endDate.getTime() - startDate.getTime();
	return Math.floor(diffInTime / (1000 * 3600 * 24));
};

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
