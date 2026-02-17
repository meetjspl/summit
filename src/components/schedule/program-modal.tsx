import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FaGithub, FaLinkedin, FaTimes } from 'react-icons/fa';

import type { ProgramData } from './helpers/types';

interface ProgramModalProps {
	isOpen: boolean;
	onClose: () => void;
	program: ProgramData | null;
}

export function ProgramModal({ isOpen, onClose, program }: ProgramModalProps) {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}

		return () => {
			document.body.style.overflow = '';
		};
	}, [isOpen]);

	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				onClose();
			}
		};

		if (isOpen) {
			window.addEventListener('keydown', handleEscape);
		}

		return () => {
			window.removeEventListener('keydown', handleEscape);
		};
	}, [isOpen, onClose]);

	if (!isOpen || !program) return null;

	const formatTime = (time: string | number | Date) => {
		const date = new Date(time);
		return date.toLocaleTimeString('en-US', {
			hour: '2-digit',
			minute: '2-digit',
			hour12: true,
		});
	};

	const sinceTime = formatTime(program.since);
	const tillTime = formatTime(program.till);

	return createPortal(
		<div
			className="fixed inset-0 z-9999 flex items-start justify-center bg-black/80 p-2 pt-8 md:p-4 md:pt-16 backdrop-blur-sm overflow-y-auto"
			onClick={onClose}
		>
			<div
				className="relative w-full max-w-4xl rounded-2xl shadow-2xl my-auto"
				style={{
					background: 'rgba(255, 255, 255, 0.08)',
					border: '1px solid rgba(255, 255, 255, 0.16)',
					backdropFilter: 'blur(20px)',
					WebkitBackdropFilter: 'blur(20px)',
				}}
				onClick={e => e.stopPropagation()}
			>
				{/* Close Button */}
				<button
					onClick={onClose}
					className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full text-white/80 transition-all hover:text-white"
					style={{
						background: 'rgba(255, 255, 255, 0.06)',
						border: '1px solid rgba(255, 255, 255, 0.12)',
						backdropFilter: 'blur(10px)',
						WebkitBackdropFilter: 'blur(10px)',
					}}
					aria-label="Close modal"
				>
					<FaTimes className="h-5 w-5" />
				</button>

				{/* Content with Image and Text Side by Side */}
				<div className="flex flex-col md:flex-row gap-4 md:gap-6 p-4 md:p-8">
					{/* Image on Left */}
					{program.image && (
						<div className="shrink-0 w-full md:w-auto flex justify-center md:block">
							<img
								src={program.image}
								alt={program.title}
								className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-2xl"
								style={{
									border: '1px solid rgba(255, 255, 255, 0.12)',
									boxShadow: '0 10px 24px rgba(0, 0, 0, 0.35)',
								}}
							/>
						</div>
					)}

					{/* Content on Right */}
					<div className="flex-1 min-w-0 flex flex-col gap-3 md:gap-4">
						{/* Time Badge */}
						<div
							className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 md:px-4 md:py-2 font-mono text-xs md:text-sm font-bold text-meetjs-green self-start"
							style={{
								background: 'rgba(188, 211, 93, 0.1)',
								border: '1px solid rgba(188, 211, 93, 0.2)',
							}}
						>
							<span>{sinceTime}</span>
							<span className="text-meetjs-green/50">→</span>
							<span>{tillTime}</span>
						</div>

						{/* Title */}
						<h2 className="text-xl md:text-3xl leading-tight font-extrabold tracking-tight text-white">
							{program.title}
						</h2>

						{/* Speaker */}
						{program.speaker && (
							<div className="flex items-center gap-3">
								<div className="h-1 w-1 rounded-full bg-meetjs-green" />
								<p className="text-base md:text-lg font-semibold text-white/90">
									{program.speaker}
								</p>
							</div>
						)}

						{/* Description */}
						{program.description && (
							<div>
								<p className="text-sm md:text-base leading-relaxed whitespace-pre-wrap text-white/75">
									{program.description}
								</p>
							</div>
						)}

						{/* Social Links */}
						{(program.linkedinUrl || program.githubUrl) && (
							<div
								className="flex flex-col sm:flex-row gap-2 md:gap-3 border-t pt-3 md:pt-4"
								style={{ borderColor: 'rgba(255, 255, 255, 0.12)' }}
							>
								{program.linkedinUrl && (
									<a
										href={program.linkedinUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-white/90 transition-all hover:text-white"
										style={{
											background: 'rgba(255, 255, 255, 0.06)',
											border: '1px solid rgba(255, 255, 255, 0.12)',
										}}
										onMouseEnter={e => {
											e.currentTarget.style.background =
												'rgba(255, 255, 255, 0.1)';
											e.currentTarget.style.borderColor =
												'rgba(255, 255, 255, 0.24)';
										}}
										onMouseLeave={e => {
											e.currentTarget.style.background =
												'rgba(255, 255, 255, 0.06)';
											e.currentTarget.style.borderColor =
												'rgba(255, 255, 255, 0.12)';
										}}
									>
										<FaLinkedin className="h-5 w-5" />
										<span>LinkedIn</span>
									</a>
								)}
								{program.githubUrl && (
									<a
										href={program.githubUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-white/90 transition-all hover:text-white"
										style={{
											background: 'rgba(255, 255, 255, 0.06)',
											border: '1px solid rgba(255, 255, 255, 0.12)',
										}}
										onMouseEnter={e => {
											e.currentTarget.style.background =
												'rgba(255, 255, 255, 0.1)';
											e.currentTarget.style.borderColor =
												'rgba(255, 255, 255, 0.24)';
										}}
										onMouseLeave={e => {
											e.currentTarget.style.background =
												'rgba(255, 255, 255, 0.06)';
											e.currentTarget.style.borderColor =
												'rgba(255, 255, 255, 0.12)';
										}}
									>
										<FaGithub className="h-5 w-5" />
										<span>GitHub</span>
									</a>
								)}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>,
		document.body,
	);
}
