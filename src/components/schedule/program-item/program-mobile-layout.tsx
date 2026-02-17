import { ProgramImage } from './program-image';
import { ProgramMetadata } from './program-metadata';

import type { ProgramLayoutCommonProps } from './types';

export const ProgramMobileLayout = ({
	showDescription = false,
	image,
	title,
	description,
	sinceTime,
	tillTime,
	showLiveBadge,
	isVertical,
	isMinWidth,
	isMobile,
	isSmallSlot,
	showDescriptionSlot,
	linkedinUrl,
	githubUrl,
}: ProgramLayoutCommonProps) => {
	return (
		<div className="flex h-full min-w-0 flex-col gap-3">
			<div className="flex min-w-0 items-start gap-3.5">
				<ProgramImage image={image} title={title} isVertical={isVertical} />
				<div className="flex min-w-0 flex-1 flex-col gap-2.5">
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

			{!showDescription && description && (
				<p
					className={`m-0 flex-1 overflow-y-auto pr-1.5 leading-[1.45] wrap-break-word whitespace-normal text-white/72 ${isMinWidth ? 'text-[15px]' : 'text-sm'}`}
				>
					{description}
				</p>
			)}
		</div>
	);
};
