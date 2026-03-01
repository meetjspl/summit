import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import card1 from '@/assets/cards/card1.jpg';
import card2 from '@/assets/cards/card2.jpg';
import card3 from '@/assets/cards/card3.jpg';

const images = [card1, card2, card3];

export const TypescriptBoostCards = () => {
	const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

	useEffect(() => {
		if (lightboxIndex !== null) {
			document.body.classList.add('lightbox-open');
		} else {
			document.body.classList.remove('lightbox-open');
		}
		return () => document.body.classList.remove('lightbox-open');
	}, [lightboxIndex]);

	const prev = useCallback(
		() =>
			setLightboxIndex(i =>
				i === null ? null : (i - 1 + images.length) % images.length,
			),
		[],
	);
	const next = useCallback(
		() => setLightboxIndex(i => (i === null ? null : (i + 1) % images.length)),
		[],
	);

	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setLightboxIndex(null);
			if (e.key === 'ArrowLeft') prev();
			if (e.key === 'ArrowRight') next();
		};
		if (lightboxIndex !== null) window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	}, [lightboxIndex, prev, next]);

	return (
		<span className="block">
			<a
				href="https://hub.instytutfullstack.pl/"
				className="text-meetjs-green underline"
				target="_blank"
				rel="noopener noreferrer"
			>
				TypeScript Boost Cards from Instytut Fullstack
			</a>
			<span className="mt-2 flex gap-1.5">
				{images.map((src, i) => (
					<button
						key={i}
						type="button"
						onClick={() => setLightboxIndex(i)}
						className="h-16 w-24 shrink-0 overflow-hidden rounded border border-white/20 transition-[transform,border-color] hover:scale-105 hover:border-meetjs-green focus-visible:ring-2 focus-visible:ring-meetjs-green focus-visible:outline-none"
						aria-label={`View photo ${i + 1}`}
					>
						<img
							src={src}
							alt={`TypeScript Boost Cards photo ${i + 1}`}
							className="h-full w-full object-cover"
						/>
					</button>
				))}
			</span>

			{lightboxIndex !== null &&
				createPortal(
					<div
						className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
						onClick={() => setLightboxIndex(null)}
						role="dialog"
						aria-modal="true"
						aria-label="TypeScript Boost Cards photo viewer"
					>
						<div
							className="relative max-h-[90vh] w-full max-w-3xl"
							onClick={e => e.stopPropagation()}
						>
							<img
								src={images[lightboxIndex]}
								alt={`TypeScript Boost Cards photo ${lightboxIndex + 1}`}
								className="mx-auto max-h-[80vh] rounded-lg object-contain shadow-2xl"
							/>
							<div className="mt-3 flex items-center justify-center gap-4">
								<button
									type="button"
									onClick={prev}
									aria-label="Previous photo"
									className="rounded-full bg-white/10 px-4 py-2 text-white transition-colors hover:bg-white/25"
								>
									←
								</button>
								<span className="text-sm text-white/60">
									{lightboxIndex + 1} / {images.length}
								</span>
								<button
									type="button"
									onClick={next}
									aria-label="Next photo"
									className="rounded-full bg-white/10 px-4 py-2 text-white transition-colors hover:bg-white/25"
								>
									→
								</button>
							</div>
							<button
								type="button"
								onClick={() => setLightboxIndex(null)}
								className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25"
								aria-label="Close photo viewer"
							>
								✕
							</button>
						</div>
					</div>,
					document.body,
				)}
		</span>
	);
};
