export interface ProgramLayoutCommonProps {
	showDescription?: boolean;
	image?: string;
	title: string;
	speaker?: string;
	description?: string;
	sinceTime: string;
	tillTime: string;
	showLiveBadge: boolean;
	isVertical: boolean;
	isMinWidth: boolean;
	isMobile: boolean;
	isSmallSlot: boolean;
	showDescriptionSlot: boolean;
	linkedinUrl?: string;
	githubUrl?: string;
}

export interface ProgramDesktopLayoutProps extends ProgramLayoutCommonProps {
	showDescription?: boolean;
	stackPadding: string;
}

export interface ProgramCompactLayoutProps {
	showDescription?: boolean;
	title: string;
	description?: string;
	sinceTime: string;
	tillTime: string;
	isMinWidth: boolean;
}
