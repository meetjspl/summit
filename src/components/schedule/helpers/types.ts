import { useProgram } from '@nessprim/planby-pro';








export type UseProgramInput = Parameters<typeof useProgram>[0];
export type ProgramData = {
	image?: string;
	title: string;
	speaker?: string;
	since: string | number | Date;
	till: string | number | Date;
	description?: string;
	linkedinUrl?: string;
	githubUrl?: string;
};

export type ProgramProps = UseProgramInput & {
	isMobile?: boolean;
	onProgramClick?: (programData: ProgramData) => void;
};
