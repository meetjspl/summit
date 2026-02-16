import {toPng} from 'html-to-image';
import {useRef} from 'react';

import Frame from '@/assets/frame.png';
import {DndImage} from '@/components/dnd-image.tsx';
import {Wrapper} from '@/components/wrapper.tsx';

export const Avatar = () => {
	const ref = useRef<HTMLDivElement>(null);

	const exportPng = async () => {
		if (!ref.current) return;
		const dataUrl = await toPng(ref.current, {
			pixelRatio: 2,
			backgroundColor: 'transparent',
			skipFonts: true,
		});
		const a = document.createElement('a');
		a.href = dataUrl;
		a.download = 'frame.png';
		a.click();
	};

	return (
		<section>
			<Wrapper>
				<h1>Avatar Component</h1>
				<div className="h-30" />
				<div className="mx-auto w-full md:w-1/3">
					<div className="relative" ref={ref}>
						<DndImage />
						<img
							src={Frame}
							className="pointer-events-none absolute top-0 left-0 h-full w-full"
						/>
						{/*<Frame className="pointer-events-none absolute top-0 left-0 h-full w-full" />*/}
					</div>
					<button className="bg-white" onClick={exportPng}>
						Pobierz grafikę
					</button>
				</div>
			</Wrapper>
		</section>
	);
};
