'use client';

import { type ReactNode, useEffect, useRef, useState } from 'react';

import { cn } from '@/utils/cn';

interface PopoverProps {
	trigger: ReactNode;
	content: ReactNode;
	className?: string;
	contentClassName?: string;
	position?: 'top' | 'bottom' | 'left' | 'right';
}

export const Popover = ({
	trigger,
	content,
	className,
	contentClassName,
	position = 'top',
}: PopoverProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [coords, setCoords] = useState({ top: 0, left: 0 });
	const triggerRef = useRef<HTMLSpanElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (isOpen && triggerRef.current && contentRef.current) {
			const triggerRect = triggerRef.current.getBoundingClientRect();
			const contentRect = contentRef.current.getBoundingClientRect();
			const gap = 8;

			let top = 0;
			let left = 0;

			switch (position) {
				case 'top':
					top = -contentRect.height - gap;
					left = (triggerRect.width - contentRect.width) / 2;
					break;
				case 'bottom':
					top = triggerRect.height + gap;
					left = (triggerRect.width - contentRect.width) / 2;
					break;
				case 'left':
					top = (triggerRect.height - contentRect.height) / 2;
					left = -contentRect.width - gap;
					break;
				case 'right':
					top = (triggerRect.height - contentRect.height) / 2;
					left = triggerRect.width + gap;
					break;
			}

			setCoords({ top, left });
		}
	}, [isOpen, position]);

	const positionClasses = {
		top: 'bottom-full mb-2',
		bottom: 'top-full mt-2',
		left: 'right-full mr-2',
		right: 'left-full ml-2',
	};

	const arrowClasses = {
		top: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-full border-t-black border-x-transparent border-b-transparent',
		bottom:
			'top-0 left-1/2 -translate-x-1/2 -translate-y-full border-b-black border-x-transparent border-t-transparent',
		left: 'right-0 top-1/2 -translate-y-1/2 translate-x-full border-l-black border-y-transparent border-r-transparent',
		right:
			'left-0 top-1/2 -translate-y-1/2 -translate-x-full border-r-black border-y-transparent border-l-transparent',
	};

	return (
		<span
			ref={triggerRef}
			className={cn('relative inline-block cursor-pointer', className)}
			onMouseEnter={() => setIsOpen(true)}
			onMouseLeave={() => setIsOpen(false)}
		>
			<span className="border-foreground/50 border-b border-dashed">
				{trigger}
			</span>

			<div
				ref={contentRef}
				className={cn(
					'text-background absolute z-50 w-max max-w-xs rounded-md bg-black px-3 py-2 text-sm shadow-lg',
					'transition-all duration-200',
					isOpen
						? 'visible scale-100 opacity-100'
						: 'invisible scale-95 opacity-0',
					position === 'top' && 'bottom-full left-1/2 mb-2 -translate-x-1/2',
					position === 'bottom' && 'top-full left-1/2 mt-2 -translate-x-1/2',
					position === 'left' && 'top-1/2 right-full mr-2 -translate-y-1/2',
					position === 'right' && 'top-1/2 left-full ml-2 -translate-y-1/2',
					contentClassName,
				)}
			>
				{content}
				{/* Arrow */}
				<span
					className={cn(
						'absolute h-0 w-0 border-[6px]',
						arrowClasses[position],
					)}
				/>
			</div>
		</span>
	);
};
