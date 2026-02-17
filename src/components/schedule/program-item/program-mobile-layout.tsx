import { ProgramMetadata } from './program-metadata';

import type { ProgramLayoutCommonProps } from './types';

export const ProgramMobileLayout = ({
	showDescription = false,
	title,
	description,
	sinceTime,
	tillTime,
	showLiveBadge,
	isMinWidth,
	isMobile,
	isSmallSlot,
	showDescriptionSlot,
	linkedinUrl,
	githubUrl,
	slotHeight,
}: ProgramLayoutCommonProps) => {
	// Determine truncation based on slot height
	const isLargeSlot = slotHeight !== null && slotHeight > 300;
	const isMediumSlot =
		slotHeight !== null && slotHeight > 240 && slotHeight <= 300;

	return (
		<div className="flex h-full w-full min-w-0 flex-col gap-2.5">
			<ProgramMetadata
				sinceTime={sinceTime}
				tillTime={tillTime}
				showLiveBadge={showLiveBadge}
				isMobile={isMobile}
				isSmallSlot={isSmallSlot}
				showDescriptionSlot={showDescriptionSlot}
				linkedinUrl={linkedinUrl}
				githubUrl={githubUrl}
			/>

			<h3
				className={`mb-0 leading-[1.15] font-extrabold tracking-[-0.01em] wrap-break-word whitespace-normal text-white/96 ${isMinWidth ? 'text-xl' : 'text-lg'}`}
			>
				{title}
			</h3>

		<div className="relative w-full flex-1 overflow-hidden">
			{!showDescription && description && (
				<>
					<p
						className={`m-0 overflow-y-auto pr-1.5 leading-[1.45] wrap-break-word whitespace-normal text-white/72 ${isMinWidth ? 'text-[15px]' : 'text-sm'}`}
						style={
							isLargeSlot
								? {
										// Large slots: show full description
									}
								: isMediumSlot
									? {
											// Medium slots: show 5 lines
											maxHeight: '7.25em',
											lineHeight: '1.45',
											display: '-webkit-box',
											WebkitLineClamp: 3,
											WebkitBoxOrient: 'vertical',
											overflow: 'hidden',
										}
									: {
											// Small slots: show 3 lines
											maxHeight: '4.5em',
											lineHeight: '1.45',
											display: '-webkit-box',
											WebkitLineClamp: 2,
											WebkitBoxOrient: 'vertical',
											overflow: 'hidden',
										}
						}
					>
						{description}
					</p>
				</>
			)}
			<div className="pointer-events-none absolute right-0 bottom-0 text-[13px] font-bold text-meetjs-green/95">
				See more
			</div>
		</div>
		</div>
	);
};
