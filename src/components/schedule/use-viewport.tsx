import { useEffect, useRef, useState } from 'react';

const TIMELINE_WIDTH = 70;
const AGENDA_WIDTH = 600;

const getViewportWidth = () =>
	window.visualViewport?.width ?? window.innerWidth ?? 0;

const initialState = () => {
	const w = getViewportWidth();
	const baseWidth = 780;
	if (w >= baseWidth) return AGENDA_WIDTH;
	return w - TIMELINE_WIDTH;
};

export function useViewport() {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const [itemHeight, setItemHeight] = useState(initialState);
	const [isMobile, setIsMobile] = useState(() => getViewportWidth() < 780);

	useEffect(() => {
		const update = () => {
			const w = getViewportWidth();
			const baseWidth = 620;

			setIsMobile(w < baseWidth);
			if (w >= baseWidth) {
				setItemHeight(AGENDA_WIDTH);
				return;
			}
			setItemHeight(w - TIMELINE_WIDTH - 50);
		};

		update();
		const ro =
			typeof ResizeObserver !== 'undefined'
				? new ResizeObserver(() => update())
				: null;
		if (ro && containerRef.current) ro.observe(containerRef.current);

		window.addEventListener('resize', update);
		return () => {
			window.removeEventListener('resize', update);
			ro?.disconnect();
		};
	}, []);

	const agendaSize = isMobile ? itemHeight * 3 : 0;

	return { isMobile, itemHeight, agendaSize, containerRef };
}
