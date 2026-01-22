import { SocialIcons } from "../social-icons";

interface ProgramMetadataProps {
  sinceTime: string;
  tillTime: string;
  showLiveBadge: boolean;
  isMobile: boolean;
  isSmallSlot: boolean;
  isCompactSlot: boolean;
  linkedinUrl?: string;
  githubUrl?: string;
}

export const ProgramMetadata = ({
  sinceTime,
  tillTime,
  showLiveBadge,
  isMobile,
  isSmallSlot,
  isCompactSlot,
  linkedinUrl,
  githubUrl,
}: ProgramMetadataProps) => {
  return (
    <div className="flex items-center justify-start flex-wrap gap-2.5 min-w-0">
      <span className="inline-flex items-center px-2.5 py-1.5 rounded-full bg-meetjs-green/[0.14] border border-meetjs-green text-white/92 font-extrabold text-xs tracking-[0.06em] font-mono shrink-0">
        {sinceTime} - {tillTime}
      </span>
      {showLiveBadge && (
        <span className="inline-flex items-center justify-center px-2.5 py-1.5 rounded-full text-xs font-extrabold tracking-[0.08em] text-[rgba(19,20,24,0.98)] bg-meetjs-green/95 border border-black/12 shrink-0">
          LIVE
        </span>
      )}
      <SocialIcons
        isMobile={isMobile}
        isHidden={isSmallSlot || isCompactSlot}
        linkedinUrl={linkedinUrl}
        githubUrl={githubUrl}
      />
    </div>
  );
};
