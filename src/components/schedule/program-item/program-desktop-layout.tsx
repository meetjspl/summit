import { ProgramImage } from './program-image';
import { ProgramMetadata } from './program-metadata';

import type { ProgramDesktopLayoutProps } from './types';

export const ProgramDesktopLayout = (props: ProgramDesktopLayoutProps) => {
	const {
		showDescription = true,
		isVertical,
		isMinWidth,
		isMobile,
		isSmallSlot,
		showDescriptionSlot,
		...programProps
	} = props;
	const {
		image,
		title,
		speaker,
		description,
		sinceTime,
		tillTime,
		showLiveBadge,
		stackPadding,
		linkedinUrl,
		githubUrl,
	} = programProps;

	const shouldHideImage = !showDescription && isSmallSlot;

	if (shouldHideImage) {
		return (
			<div className="flex h-full w-full min-w-0 flex-col justify-center gap-2">
				<div className="flex items-center gap-3">
					<span className="inline-flex shrink-0 items-center rounded-full border border-meetjs-green bg-meetjs-green/[0.14] px-2.5 py-1.5 font-mono text-xs font-extrabold tracking-[0.06em] text-white/92">
						{sinceTime} - {tillTime}
					</span>
					{showLiveBadge && (
						<span className="inline-flex shrink-0 items-center justify-center rounded-full border border-black/12 bg-meetjs-green/95 px-2.5 py-[0.3] text-xs font-extrabold tracking-[0.08em] text-[rgba(19,20,24,0.98)]">
							LIVE
						</span>
					)}
					<h3 className="mb-0 text-sm leading-[1.15] font-extrabold tracking-[-0.01em] text-white/96">
						{title}
					</h3>
				</div>
			</div>
		);
	}

	return (
		<div
			className={`flex h-full flex-row gap-3.5 ${isVertical ? 'items-stretch' : 'items-center'}`}
		>
			<ProgramImage image={image} title={title} isVertical={isVertical} />

			<div className={`flex h-full min-w-0 flex-col gap-2.5 ${stackPadding}`}>
				<ProgramMetadata
					speaker={speaker}
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

				{showDescription && description && (
					<>
						<p
							className={`m-0 pr-1.5 text-white/72 ${isMinWidth ? 'text-[15px]' : 'text-sm'}`}
							style={{
								display: '-webkit-box',
								WebkitLineClamp: 2,
								WebkitBoxOrient: 'vertical' as const,
								overflow: 'hidden',
								textOverflow: 'ellipsis',
								lineHeight: '1.45',
							}}
						>
							{description}
						</p>
						<div className="mt-auto flex w-full items-center justify-between gap-4">
							<div />
							<p className="m-0 shrink-0 text-right text-[13px] font-bold text-meetjs-green/95 opacity-70">
								See More
							</p>
						</div>
					</>
				)}
			</div>
		</div>
	);
};
