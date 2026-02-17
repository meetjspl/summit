import type { ProgramCompactLayoutProps } from './types';

export const ProgramCompactLayout = ({
	showDescription = false,
	title,
	description,
	sinceTime,
	tillTime,
	isMinWidth,
}: ProgramCompactLayoutProps) => {
	return (
		<div className="flex h-full min-w-0 flex-col justify-center gap-2">
			<h3 className="mb-0 text-base leading-[1.15] font-extrabold tracking-[-0.01em] wrap-break-word whitespace-normal text-white/96">
				{title}
			</h3>
			{!showDescription && description && (
				<p
					className={`m-0 flex-1 overflow-y-auto pr-1.5 leading-[1.45] wrap-break-word whitespace-normal text-white/72 ${isMinWidth ? 'text-[15px]' : 'text-sm'}`}
				>
					{description}
				</p>
			)}
			<p className="mt-auto font-mono text-[13px] font-bold tracking-[0.02em] text-meetjs-green/95">
				{sinceTime} - {tillTime}
			</p>
		</div>
	);
};
