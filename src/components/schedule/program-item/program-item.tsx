import { ProgramBox, ProgramContent, useProgram } from '@nessprim/planby-pro';

import { ProgramCompactLayout } from './program-compact-layout';
import { ProgramDesktopLayout } from './program-desktop-layout';
import { ProgramMobileLayout } from './program-mobile-layout';

import type {
	ProgramData,
	ProgramProps,
	UseProgramInput,
} from '@/components/schedule/helpers/types';

export const Program = (props: ProgramProps) => {
	const { isMobile: isMobileProp, ...planbyProps } = props;
	const { isVerticalMode, program } = planbyProps as UseProgramInput;
	const { styles, formatTime, set12HoursTimeFormat, isLive, isMinWidth } =
		useProgram(planbyProps as UseProgramInput);

	const isVertical = Boolean(isVerticalMode);
	const isMobile = Boolean(isMobileProp);
	const { data } = program as unknown as { data: ProgramData };
	const {
		image,
		title,
		speaker,
		since,
		till,
		description,
		linkedinUrl,
		githubUrl,
	} = data;

	const sinceTime = formatTime(since, set12HoursTimeFormat()).toLowerCase();
	const tillTime = formatTime(till, set12HoursTimeFormat()).toLowerCase();

	const slotHeight = (() => {
		const h = styles.position?.height;
		if (typeof h === 'number') return h;
		if (typeof h === 'string') {
			const n = Number.parseFloat(h);
			return Number.isFinite(n) ? n : null;
		}
		return null;
	})();

	const isSmallSlot = slotHeight !== null && slotHeight <= 150;
	const isCompactSlot = slotHeight !== null && slotHeight <= 240;
	const showLiveBadge = isLive && !isSmallSlot;

	const cardPadding = isSmallSlot || isCompactSlot ? 12 : 16;
	const stackPadding = isVertical
		? 'py-0.5 px-0.5 pb-1.5'
		: 'py-1.5 px-1.5 pl-0.5';

	const commonProps = {
		image,
		title,
		description,
		speaker,
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
	};

	const renderLayout = () => {
		if (isSmallSlot || isCompactSlot) {
			return (
				<ProgramCompactLayout
					title={title}
					description={description}
					sinceTime={sinceTime}
					tillTime={tillTime}
					isMinWidth={isMinWidth}
				/>
			);
		}

		if (isMobile) {
			return <ProgramMobileLayout {...commonProps} />;
		}

		return (
			<ProgramDesktopLayout {...commonProps} stackPadding={stackPadding} />
		);
	};

	const cardStyle = {
		height: '100%',
		padding: cardPadding,
		borderRadius: 16,
		background: 'rgba(255, 255, 255, 0.06)',
		border: isLive
			? '1px solid rgba(188, 211, 93, 0.95)'
			: '1px solid rgba(255, 255, 255, 0.12)',
		backdropFilter: 'blur(10px)',
		WebkitBackdropFilter: 'blur(10px)',
		overflow: 'hidden',
		cursor: 'auto',
	};

	return (
		<ProgramBox width={styles.width} style={styles.position}>
			<ProgramContent
				isVerticalMode={isVertical}
				isLive={isLive}
				width={styles.width}
				style={cardStyle}
			>
				{renderLayout()}
			</ProgramContent>
		</ProgramBox>
	);
};
