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
		<section className="py-12" id="avatar">
			<Wrapper>
				<h1 className="text-center text-4xl font-semibold text-white">
					Generate your avatar and share on social media
				</h1>
				<div className="mx-auto flex w-full flex-col gap-4 md:w-1/3">
					<div className="relative" ref={ref}>
						<DndImage />
						<img
							src={Frame}
							className="pointer-events-none absolute top-0 left-0 h-full w-full"
							alt=""
						/>
					</div>
					<button
						onClick={exportPng}
						className="mx-auto inline-block w-fit rounded-lg bg-meetjs-green px-8 py-4 text-base font-bold text-black transition-all hover:bg-meetjs-green/90 hover:shadow-lg hover:shadow-meetjs-green/20"
					>
						Download graphic
					</button>
				</div>
			</Wrapper>
		</section>
	);
};
