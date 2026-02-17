import { ProgramImage } from './program-image';
import { ProgramMetadata } from './program-metadata';

import type { ProgramDesktopLayoutProps } from './types';

export const ProgramDesktopLayout = (props: ProgramDesktopLayoutProps) => {
	const {
		isVertical,
		isMinWidth,
		isMobile,
		isSmallSlot,
		isCompactSlot,
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
	return (
		<div
			className={`flex h-full flex-row gap-3.5 ${isVertical ? 'items-stretch' : 'items-center'}`}
		>
			<ProgramImage image={image} title={title} isVertical={isVertical} />

			<div className={`flex h-full min-w-0 flex-col gap-2.5 ${stackPadding}`}>
				<ProgramMetadata
					sinceTime={sinceTime}
					tillTime={tillTime}
					showLiveBadge={showLiveBadge}
					isMobile={isMobile}
					isSmallSlot={isSmallSlot}
					isCompactSlot={isCompactSlot}
					linkedinUrl={linkedinUrl}
					githubUrl={githubUrl}
				/>

				<h3
					className={`mb-0 leading-[1.15] font-extrabold tracking-[-0.01em] wrap-break-word whitespace-normal text-white/96 ${isMinWidth ? 'text-xl' : 'text-lg'}`}
				>
					{title}
				</h3>
				<h4>{speaker}</h4>

				{description && (
					<p
						className={`m-0 flex-1 overflow-y-auto pr-1.5 leading-[1.45] wrap-break-word whitespace-normal text-white/72 ${isMinWidth ? 'text-[15px]' : 'text-sm'}`}
					>
						{description}
					</p>
				)}
			</div>
		</div>
	);
};
