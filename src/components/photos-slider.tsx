import {useEffect, useState} from 'react';

import Conference1Alt from '@/assets/previous-events/conference1.6427bba2aafbd5c49482.jpg';
import Conference2Alt from '@/assets/previous-events/conference2 (1).jpg';
import Conference2 from '@/assets/previous-events/conference2.jpg';
import Conference3 from '@/assets/previous-events/conference3.jpg';
import C17_1 from '@/assets/previous-events/conference17_1.jpg';
import C17_2 from '@/assets/previous-events/conference17_2.jpg';
import ConferenceWebp from '@/assets/previous-events/conference (1).webp';
import C2019 from '@/assets/previous-events/conference-2019.jpg';
import MeetjsNetworking from '@/assets/previous-events/meetjs-networking.webp';
import MeetjsOrganizers from '@/assets/previous-events/meetjs-organizers.webp';
import MeetjsSummit from '@/assets/previous-events/meetjs-summit.webp';
import S2019 from '@/assets/previous-events/speaker-2019.jpg';

const PREVIOUS_EVENT_PHOTOS = [
	{
		id: 1,
		url: Conference1Alt,
		alt: 'meet.js Summit - Conference Hall',
		span: 'col-span-1 row-span-1',
	},
	{
		id: 2,
		url: C17_1,
		alt: 'meet.js Summit - Attendees',
		span: 'col-span-2 row-span-1',
	},

	{
		id: 3,
		url: Conference3,
		alt: 'meet.js Summit - Event Moments',
		span: 'col-span-1 row-span-1',
	},
	{
		id: 4,
		url: ConferenceWebp,
		alt: 'meet.js Summit - Conference Session',
		span: 'col-span-1 row-span-2',
	},
	{
		id: 5,
		url: MeetjsNetworking,
		alt: 'meet.js Summit - Networking',
		span: 'col-span-1 row-span-1',
	},
	{
		id: 6,
		url: MeetjsOrganizers,
		alt: 'meet.js Summit - Organizers',
		span: 'col-span-2 row-span-1',
	},
	{
		id: 7,
		url: MeetjsSummit,
		alt: 'meet.js Summit - Event Overview',
		span: 'col-span-1 row-span-1',
	},
	{
		id: 8,
		url: Conference1Alt,
		alt: 'meet.js Summit - Conference Hall',
		span: 'col-span-1 row-span-1',
	},
	{
		id: 9,
		url: S2019,
		alt: 'meet.js Summit - Attendees',
		span: 'col-span-1 row-span-2',
	},
	{
		id: 10,
		url: Conference2Alt,
		alt: 'meet.js Summit - Attendees',
		span: 'col-span-2 row-span-1',
	},

	{
		id: 11,
		url: Conference2,
		alt: 'meet.js Summit - Attendees',
		span: 'col-span-1 row-span-1',
	},
	{
		id: 12,
		url: C17_2,
		alt: 'meet.js Summit 2017 - Attendees',
		span: 'col-span-2 row-span-1',
	},
	{
		id: 13,
		url: C2019,
		alt: 'meet.js Summit 2019 - Attendees',
		span: 'col-span-2 row-span-1',
	},
];

export const PhotosSlider = () => {
	const [selectedImage, setSelectedImage] = useState<number | null>(null);

	const closeLightbox = () => {
		setSelectedImage(null);
	};

	const nextImage = () => {
		console.log(
			'selectedImage',
			selectedImage,
			PREVIOUS_EVENT_PHOTOS.length - 1,
		);
		if (selectedImage === PREVIOUS_EVENT_PHOTOS.length) {
			setSelectedImage(1);
		} else {
			setSelectedImage(prevState => prevState && (prevState += 1));
		}
	};

	const prevImage = () => {
		if (selectedImage === 1) {
			setSelectedImage(PREVIOUS_EVENT_PHOTOS.length);
		} else {
			setSelectedImage(prevState => prevState && (prevState -= 1));
		}
	};

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			switch (e.key) {
				case 'Escape':
					closeLightbox();
					break;
				case 'ArrowLeft':
					prevImage();
					break;
				case 'ArrowRight':
					nextImage();
					break;
			}
		};

		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [selectedImage]);

	if (PREVIOUS_EVENT_PHOTOS.length === 0) {
		return null;
	}

	const openLightbox = (id: number) => {
		setSelectedImage(id);
	};

	const selectedPhoto = PREVIOUS_EVENT_PHOTOS.find(
		photo => photo.id === selectedImage,
	);

	return (
		<section id="photos" className="bg-black py-16 lg:py-24">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="mb-12 text-center">
					<h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
						Previous Events
					</h2>
					<p className="mx-auto max-w-2xl text-lg text-white-2">
						Relive the moments from our past meet.js Summit conferences
					</p>
				</div>

				{/* Masonry Grid */}
				<div className="grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{PREVIOUS_EVENT_PHOTOS.map((photo, index) => (
						<button
							key={photo.id}
							onClick={() => openLightbox(photo.id)}
							className={`group relative overflow-hidden rounded-xl ${photo.span} transform transition-all duration-300 hover:z-10 hover:scale-[1.02] focus:ring-2 focus:ring-meetjs-green focus:ring-offset-2 focus:ring-offset-black focus:outline-none`}
							style={{
								animationDelay: `${index * 100}ms`,
								animation: 'fadeInUp 0.6s ease-out forwards',
								opacity: 0,
							}}
						>
							{/* Image */}
							<img
								src={photo.url}
								alt={photo.alt}
								className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
							/>

							{/* Overlay */}
							<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

							{/* Hover Icon */}
							<div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
								<div className="rounded-full bg-meetjs-green/90 p-4 backdrop-blur-sm">
									<svg
										className="h-6 w-6 text-black"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
										/>
									</svg>
								</div>
							</div>
						</button>
					))}
				</div>
			</div>

			{/* Lightbox Modal */}
			{selectedPhoto && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
					onClick={closeLightbox}
				>
					<button
						onClick={closeLightbox}
						className="absolute top-4 right-4 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 focus:ring-2 focus:ring-meetjs-green focus:outline-none"
						aria-label="Close lightbox"
					>
						<svg
							className="h-6 w-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>

					<div
						className="max-h-[90vh] max-w-5xl"
						onClick={e => e.stopPropagation()}
					>
						<img
							src={selectedPhoto.url}
							alt={selectedPhoto.alt}
							className="h-auto w-full rounded-lg shadow-2xl"
						/>
					</div>
				</div>
			)}

			{/* Keyframe animation */}
			<style>{`
				@keyframes fadeInUp {
					from {
						opacity: 0;
						transform: translateY(30px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
			`}</style>
		</section>
	);
};
