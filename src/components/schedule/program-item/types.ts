export interface ProgramLayoutCommonProps {
  image?: string;
  title: string;
  description?: string;
  sinceTime: string;
  tillTime: string;
  showLiveBadge: boolean;
  isVertical: boolean;
  isMinWidth: boolean;
  isMobile: boolean;
  isSmallSlot: boolean;
  isCompactSlot: boolean;
  linkedinUrl?: string;
  githubUrl?: string;
}

export interface ProgramDesktopLayoutProps extends ProgramLayoutCommonProps {
  stackPadding: string;
}

export interface ProgramCompactLayoutProps {
  title: string;
  description?: string;
  sinceTime: string;
  tillTime: string;
  isMinWidth: boolean;
}
