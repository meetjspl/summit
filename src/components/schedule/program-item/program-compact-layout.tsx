import type { ProgramCompactLayoutProps } from './types';

export const ProgramCompactLayout = ({
	showDescription = true,
	title,
	description,
	sinceTime,
	tillTime,
	isMinWidth,
}: ProgramCompactLayoutProps) => {
	return (
		<div className="flex h-full w-full min-w-0 flex-col justify-center gap-2">
			<h3 className="mb-0 text-base leading-[1.15] font-extrabold tracking-[-0.01em] wrap-break-word whitespace-normal text-white/96">
				{title}
			</h3>
			{showDescription && description && (
				<p
					className={`m-0 pr-1.5 text-white/72 ${isMinWidth ? 'text-[15px]' : 'text-sm'}`}
					style={{
						display: '-webkit-box',
						WebkitLineClamp: 5,
						WebkitBoxOrient: 'vertical' as const,
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						lineHeight: '1.45',
					}}
				>
					{description}
				</p>
			)}
			<div className="mt-auto flex w-full items-center justify-between gap-4">
				<p className="m-0 shrink-0 font-mono text-[13px] font-bold tracking-[0.02em] text-meetjs-green/95">
					{sinceTime} - {tillTime}
				</p>
				<p className="m-0 shrink-0 text-right text-[13px] font-bold text-meetjs-green/95 opacity-70">
					See More
				</p>
			</div>
		</div>
	);
};
