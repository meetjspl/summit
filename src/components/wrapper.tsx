import type {ReactNode} from 'react';

interface WrapperProps {
	children: ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
	return <div className="mx-auto w-full max-w-7xl px-4">{children}</div>;
};
