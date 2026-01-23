import { Epg, Layout, useEpg } from '@nessprim/planby-pro';
import { STAGES_CONF } from './helpers/data/stages';
import { AGENDA_CONF } from './helpers/data/agenda';
import { Program } from './program-item/program-item';
import { Stage } from './channel-item';
import { theme } from './helpers/theme';
import { useViewport } from './use-viewport';

const SCHEDULE_CONTENT_SIZE = 1600

export function Schedule() {
  const { isMobile,itemHeight,agendaSize, containerRef } = useViewport();
  const confStartDate = "2026-01-20T10:00:00";
  const confEndDate= "2026-01-20T16:00:00"

    const { getEpgProps, getLayoutProps } = useEpg({
        isVerticalMode: true,
        isBaseTimeFormat: false,
        isCurrentTime: false,
        isLine:false,
        startDate: confStartDate,
        endDate: confEndDate,
        channels: STAGES_CONF,
        epg: AGENDA_CONF,
        dayWidth:SCHEDULE_CONTENT_SIZE + agendaSize,
        sidebarWidth: 100,
        itemHeight,
        theme
      });

  return (
    <div ref={containerRef} style={{ height: "100%", width: "100%",  }}>
        <Epg  {...getEpgProps()}>
          <Layout
            {...getLayoutProps()}
            renderChannel={({ channel, ...rest }) => (
                <Stage key={channel.uuid} channel={channel} {...rest} />
              )}
            renderProgram={({ program, ...rest }) => (
              <Program
              isMobile={isMobile}
                key={program.data.id}
                program={program}
                {...rest}
              />
            )}
          />
        </Epg>
      </div>
  )
}
