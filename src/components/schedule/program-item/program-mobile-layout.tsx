import { ProgramImage } from '@/components/schedule/program-item/program-image';

import { ProgramMetadata } from './program-metadata';

import type { ProgramLayoutCommonProps } from './types';

export const ProgramMobileLayout = ({
	isVertical,
	showDescription = false,
	image,
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
	const isLargeSlot = slotHeight !== null && slotHeight > 300;
	const isMediumSlot =
		slotHeight !== null && slotHeight > 240 && slotHeight <= 300;

	if (isSmallSlot) {
		return (
			<div className="flex h-full w-full min-w-0 flex-col justify-center gap-2">
				<h3 className="mb-0 text-sm leading-[1.15] font-extrabold tracking-[-0.01em] wrap-break-word whitespace-normal text-white/96">
					{title}
				</h3>
				<div className="mt-auto flex w-full items-center justify-between gap-4">
					<p className="m-0 shrink-0 font-mono text-[13px] font-bold tracking-[0.02em] text-meetjs-green/95">
						{sinceTime} - {tillTime}
						{showLiveBadge && (
							<span className="ml-5 inline-flex shrink-0 items-center justify-center rounded-full border border-black/12 bg-meetjs-green/95 px-2.5 py-[0.3] text-xs font-extrabold tracking-[0.08em] text-[rgba(19,20,24,0.98)]">
								LIVE
							</span>
						)}
					</p>
					<p className="m-0 shrink-0 text-right text-[13px] font-bold text-meetjs-green/95 opacity-70">
						See More
					</p>
				</div>
			</div>
		);
	}

	return (
		<div className="flex h-full w-full min-w-0 flex-col gap-2.5">
			<div className="flex items-start gap-2.5">
				<ProgramImage image={image} title={title} isVertical={isVertical} />
				<div className="mt-1">
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
				</div>
			</div>

			<h3
				className={`mb-0 leading-[1.15] font-extrabold tracking-[-0.01em] wrap-break-word whitespace-normal text-white/96 ${isMinWidth ? 'text-xl' : 'text-lg'}`}
			>
				{title}
			</h3>

			<div className="flex w-full flex-1 min-h-0 flex-col gap-1 overflow-hidden">
				{!showDescription && description && (
					<p
						className={`m-0 min-h-0 flex-1 leading-[1.45] text-white/72 ${isMinWidth ? 'text-[15px]' : 'text-sm'}`}
						style={
							isLargeSlot
								? {
										display: '-webkit-box',
										WebkitLineClamp: 8,
										WebkitBoxOrient: 'vertical' as const,
										overflow: 'hidden',
										textOverflow: 'ellipsis',
										lineHeight: '1.45',
									}
								: isMediumSlot
									? {
											display: '-webkit-box',
											WebkitLineClamp: 2,
											WebkitBoxOrient: 'vertical' as const,
											overflow: 'hidden',
											textOverflow: 'ellipsis',
											lineHeight: '1.45',
										}
									: {
											display: '-webkit-box',
											WebkitLineClamp: 1,
											WebkitBoxOrient: 'vertical' as const,
											overflow: 'hidden',
											textOverflow: 'ellipsis',
											lineHeight: '1.45',
										}
						}
					>
						{description}
					</p>
				)}
				<div className="shrink-0 text-right text-[13px] font-bold text-meetjs-green/95 opacity-70">
					See more
				</div>
			</div>
		</div>
	);
};
