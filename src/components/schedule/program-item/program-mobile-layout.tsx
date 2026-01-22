import { ProgramImage } from "./program-image";
import { ProgramMetadata } from "./program-metadata";
import type { ProgramLayoutCommonProps } from "./types";

export const ProgramMobileLayout = ({
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
  isCompactSlot,
  linkedinUrl,
  githubUrl,
}: ProgramLayoutCommonProps) => {
  return (
    <div className="flex flex-col gap-3 h-full min-w-0">
      <div className="flex gap-3.5 items-start min-w-0">
        <ProgramImage image={image} title={title} isVertical={isVertical} />
        <div className="min-w-0 flex flex-col gap-2.5 flex-1">
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
        </div>
      </div>

      <h3 className={`mb-0 text-white/96 font-extrabold tracking-[-0.01em] leading-[1.15] whitespace-normal wrap-break-word ${isMinWidth ? "text-xl" : "text-lg"}`}>
        {title}
      </h3>

      {description && (
        <p className={`m-0 text-white/72 leading-[1.45] whitespace-normal wrap-break-word flex-1 overflow-y-auto pr-1.5 ${isMinWidth ? "text-[15px]" : "text-sm"}`}>
          {description}
        </p>
      )}
    </div>
  );
};
