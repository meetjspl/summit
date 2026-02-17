import { ProgramBox, ProgramContent, useProgram } from '@nessprim/planby-pro';
import { useState } from 'react';

import { ProgramCompactLayout } from './program-compact-layout';
import { ProgramDesktopLayout } from './program-desktop-layout';
import { ProgramMobileLayout } from './program-mobile-layout';

import type {
	ProgramData,
	ProgramProps,
	UseProgramInput,
} from '@/components/schedule/helpers/types';

export const Program = (props: ProgramProps) => {
	const { isMobile: isMobileProp, onProgramClick, ...planbyProps } = props;
	const { isVerticalMode, program } = planbyProps as UseProgramInput;
	const { styles, formatTime, set12HoursTimeFormat, isLive, isMinWidth } =
		useProgram(planbyProps as UseProgramInput);

	const isVertical = Boolean(isVerticalMode);
	const isMobile = Boolean(isMobileProp);
	const { data } = program as unknown as { data: ProgramData };

	const {
		showDescription,
		image,
		title,
		speaker,
		since,
		till,
		description,
		linkedinUrl,
		githubUrl,
	} = data;

	const [isHovered, setIsHovered] = useState(false);

	const handleClick = () => {
		if (onProgramClick) {
			onProgramClick(data);
		}
	};

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
	const showDescriptionSlot = slotHeight !== null && slotHeight <= 240;
	const showLiveBadge = isLive && !isSmallSlot;

	const cardPadding = isSmallSlot || showDescriptionSlot ? 12 : 16;
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
		showDescriptionSlot,
		linkedinUrl,
		githubUrl,
	};

	const renderLayout = () => {
		if (isSmallSlot || showDescriptionSlot) {
			return (
				<ProgramCompactLayout
					showDescription={showDescription}
					title={title}
					description={description}
					sinceTime={sinceTime}
					tillTime={tillTime}
					isMinWidth={isMinWidth}
				/>
			);
		}

		if (isMobile) {
			return (
				<ProgramMobileLayout
					{...commonProps}
					showDescription={showDescription}
				/>
			);
		}

		return (
			<ProgramDesktopLayout
				{...commonProps}
				stackPadding={stackPadding}
				showDescription={showDescription}
			/>
		);
	};

	const cardStyle = {
		height: '100%',
		padding: cardPadding,
		borderRadius: 16,
		background: isHovered
			? 'rgba(255, 255, 255, 0.1)'
			: 'rgba(255, 255, 255, 0.06)',
		border: isLive
			? '1px solid rgba(188, 211, 93, 0.95)'
			: isHovered
				? '1px solid rgba(255, 255, 255, 0.24)'
				: '1px solid rgba(255, 255, 255, 0.12)',
		backdropFilter: 'blur(10px)',
		WebkitBackdropFilter: 'blur(10px)',
		overflow: 'hidden',
		cursor: 'pointer',
		transition: 'all 0.2s ease',
		transform: isHovered ? 'scale(1.005)' : 'scale(1)',
	};

	return (
		<ProgramBox width={styles.width} style={styles.position}>
			<ProgramContent
				isVerticalMode={isVertical}
				isLive={isLive}
				width={styles.width}
				style={cardStyle}
				onClick={handleClick}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				{renderLayout()}
			</ProgramContent>
		</ProgramBox>
	);
};
