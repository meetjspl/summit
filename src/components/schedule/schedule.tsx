import {Epg, Layout, useEpg} from '@nessprim/planby-pro';
import {useState} from 'react';

import {Stage} from './channel-item';
import {AGENDA_CONF} from './helpers/data/agenda';
import {STAGES_CONF} from './helpers/data/stages';
import {theme} from './helpers/theme';
import {Program} from './program-item/program-item';
import {ProgramModal} from './program-modal';
import {useViewport} from './use-viewport';

import type {ProgramData, ProgramProps} from './helpers/types';

const SCHEDULE_CONTENT_SIZE = 4000;

export function Schedule() {
	const { isMobile, itemHeight, agendaSize, containerRef } = useViewport();
	const confStartDate = '2026-03-04T08:00:00';
	const confEndDate = '2026-03-04T18:00:00';
	const [selectedProgram, setSelectedProgram] = useState<ProgramData | null>(
		null,
	);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleProgramClick = (programData: ProgramData) => {
		setSelectedProgram(programData);
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setTimeout(() => setSelectedProgram(null), 300); // Delay clearing data for smooth animation
	};

	const { getEpgProps, getLayoutProps } = useEpg({
		isVerticalMode: true,
		isBaseTimeFormat: false,
		isCurrentTime: false,
		isLine: false,
		startDate: confStartDate,
		endDate: confEndDate,
		channels: STAGES_CONF,
		epg: AGENDA_CONF,
		dayWidth: SCHEDULE_CONTENT_SIZE + agendaSize,
		sidebarWidth: 100,
		itemHeight,
		theme,
	});

	return (
		<>
			<div ref={containerRef} style={{ height: '100%', width: '100%' }}>
				<Epg {...getEpgProps()}>
					<Layout
						{...getLayoutProps()}
						renderChannel={({ channel, ...rest }) => (
							<Stage key={channel.uuid} channel={channel} {...rest} />
						)}
						renderProgram={({ program, ...rest }) => {
							const programProps = {
								...rest,
								program,
								isMobile,
								onProgramClick: handleProgramClick,
							} as ProgramProps;
							return <Program key={program.data.id} {...programProps} />;
						}}
					/>
				</Epg>
			</div>

			<ProgramModal
				isOpen={isModalOpen}
				onClose={handleCloseModal}
				program={selectedProgram}
			/>
		</>
	);
}
