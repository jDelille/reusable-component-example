import { clsx, type ClassValue } from 'clsx';
import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

// Utility function: merge tailwind classes
function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// We want interface to include every html element button has by default.
interface NewDocButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	// Define all custom properties we want in the button here
	disabled?: boolean;
}

const NewDocButton: FC<NewDocButtonProps> = ({
	className,
	disabled,
	...props
}) => {
	const isLoading = false;
	return (
		<button
			className={cn('bg-red-500', { 'cursor-not-allowed': isLoading }, className)}
			{...props}
			disabled>
			Button
		</button>
	);
};

export default NewDocButton;
