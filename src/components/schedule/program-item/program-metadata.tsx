import { SocialIcons } from '../social-icons';

interface ProgramMetadataProps {
	sinceTime: string;
	tillTime: string;
	showLiveBadge: boolean;
	isMobile: boolean;
	isSmallSlot: boolean;
	showDescriptionSlot: boolean;
	linkedinUrl?: string;
	githubUrl?: string;
}

export const ProgramMetadata = ({
	sinceTime,
	tillTime,
	showLiveBadge,
	isMobile,
	isSmallSlot,
	showDescriptionSlot,
	linkedinUrl,
	githubUrl,
}: ProgramMetadataProps) => {
	return (
		<div className="flex min-w-0 flex-wrap items-center justify-start gap-2.5">
			<span className="inline-flex shrink-0 items-center rounded-full border border-meetjs-green bg-meetjs-green/[0.14] px-2.5 py-1.5 font-mono text-xs font-extrabold tracking-[0.06em] text-white/92">
				{sinceTime} - {tillTime}
			</span>
			{showLiveBadge && (
				<span className="inline-flex shrink-0 items-center justify-center rounded-full border border-black/12 bg-meetjs-green/95 px-2.5 py-1.5 text-xs font-extrabold tracking-[0.08em] text-[rgba(19,20,24,0.98)]">
					LIVE
				</span>
			)}
			<SocialIcons
				isMobile={isMobile}
				isHidden={isSmallSlot || showDescriptionSlot}
				linkedinUrl={linkedinUrl}
				githubUrl={githubUrl}
			/>
		</div>
	);
};
