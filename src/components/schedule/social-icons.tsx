interface SocialIconsProps {
  isMobile?: boolean;
  isHidden?: boolean;
  linkedinUrl?: string;
  githubUrl?: string;
}

export const SocialIcons = ({ 
  isMobile, 
  isHidden,
  linkedinUrl,
  githubUrl,
}: SocialIconsProps) => {
  if (isHidden) return null;

  const wrapClasses = isMobile
    ? "inline-flex items-center gap-2 basis-full justify-start mt-1.5"
    : "inline-flex items-center gap-2 ml-auto justify-start";

  const linkClasses = isMobile
    ? "w-[30px] h-[30px] rounded-full inline-flex items-center justify-center border border-white/[0.14] bg-white/[0.06] text-white/[0.88] cursor-pointer p-0 hover:bg-meetjs-green transition-colors"
    : "w-[34px] h-[34px] rounded-full inline-flex items-center justify-center border border-white/[0.14] bg-white/[0.06] text-white/[0.88] cursor-pointer p-0 hover:bg-meetjs-green transition-colors";

  return (
    <span className={wrapClasses} aria-label="social links">

      {/* LinkedIn */}
      {linkedinUrl ? (
        <a 
          href={linkedinUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="LinkedIn" 
          className={linkClasses}
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current block" aria-hidden="true">
            <path d="M20.45 20.45H17V14.9c0-1.32-.02-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.92v5.65H9.6V9h3.3v1.56h.05c.46-.86 1.58-1.76 3.25-1.76 3.47 0 4.11 2.29 4.11 5.27v6.38ZM5.34 7.43a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM7.06 20.45H3.62V9h3.44v11.45ZM22 2H2C.9 2 0 2.9 0 4v16c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Z" />
          </svg>
        </a>
      ):null}

      {/* GitHub */}
      {githubUrl ? (
        <a 
          href={githubUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="GitHub" 
          className={linkClasses}
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current block" aria-hidden="true">
            <path d="M12 1.7A10.3 10.3 0 0 0 1.7 12c0 4.56 2.96 8.42 7.06 9.78.52.1.71-.22.71-.5v-1.77c-2.87.62-3.47-1.22-3.47-1.22-.47-1.18-1.15-1.5-1.15-1.5-.94-.64.07-.63.07-.63 1.04.07 1.59 1.07 1.59 1.07.92 1.58 2.41 1.12 3 .85.09-.67.36-1.12.65-1.38-2.29-.26-4.7-1.15-4.7-5.12 0-1.13.4-2.05 1.07-2.77-.11-.26-.46-1.3.1-2.7 0 0 .87-.28 2.85 1.06.83-.23 1.71-.35 2.59-.35.88 0 1.76.12 2.59.35 1.98-1.34 2.85-1.06 2.85-1.06.56 1.4.21 2.44.1 2.7.67.72 1.07 1.64 1.07 2.77 0 3.98-2.41 4.86-4.71 5.12.37.32.7.95.7 1.92v2.84c0 .28.19.6.72.5A10.3 10.3 0 0 0 22.3 12 10.3 10.3 0 0 0 12 1.7Z" />
          </svg>
        </a>
      ) : null}
    </span>
  );
};
