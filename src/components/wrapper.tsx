import type {ReactNode} from 'react';

interface WrapperProps {
	children: ReactNode;
	className?: string;
}

export const Wrapper = ({ children, className = '' }: WrapperProps) => {
	return (
		<div className={`mx-auto w-full max-w-6xl px-4 ${className}`}>
			{children}
		</div>
	);
};
