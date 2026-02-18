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
			className="fixed inset-0 z-9999 flex items-start justify-center overflow-y-auto bg-black/80 p-2 pt-8 backdrop-blur-sm md:p-4 md:pt-16"
			onClick={onClose}
		>
			<div
				className="relative my-auto w-full max-w-4xl rounded-2xl shadow-2xl"
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
					className="absolute top-4 right-4 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-white transition-all hover:bg-white/20"
					style={{
						background: 'rgba(0, 0, 0, 0.4)',
						border: '1px solid rgba(255, 255, 255, 0.2)',
						backdropFilter: 'blur(10px)',
						WebkitBackdropFilter: 'blur(10px)',
					}}
					aria-label="Close modal"
				>
					<FaTimes className="h-5 w-5" />
				</button>

				{/* Content with Image and Text Side by Side */}
				<div className="flex flex-col gap-4 p-4 md:flex-row md:gap-6 md:p-8">
					{/* Image on Left */}
					{program.image && (
						<div className="flex w-full shrink-0 justify-center md:block md:w-auto">
							<img
								src={program.image}
								alt={program.title}
								className="h-32 w-32 rounded-2xl object-cover md:h-48 md:w-48"
								style={{
									border: '1px solid rgba(255, 255, 255, 0.12)',
									boxShadow: '0 10px 24px rgba(0, 0, 0, 0.35)',
								}}
							/>
						</div>
					)}

					{/* Content on Right */}
					<div className="flex min-w-0 flex-1 flex-col gap-3 md:gap-4">
						{/* Time Badge */}
						<div
							className="inline-flex items-center gap-2 self-start rounded-full px-3 py-1.5 font-mono text-xs font-bold text-meetjs-green md:px-4 md:py-2 md:text-sm"
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
						<h2 className="text-xl leading-tight font-extrabold tracking-tight text-white md:text-3xl">
							{program.title}
						</h2>

						{/* Speaker */}
						{program.speaker && (
							<div className="flex items-center gap-3">
								<div className="h-1 w-1 rounded-full bg-meetjs-green" />
								<p className="text-base font-semibold text-white/90 md:text-lg">
									{program.speaker}
								</p>
							</div>
						)}

						{/* Description */}
						{program.description && (
							<div>
								<p className="text-sm leading-relaxed whitespace-pre-wrap text-white/75 md:text-base">
									{program.description}
								</p>
							</div>
						)}

						{/* Social Links */}
						{(program.linkedinUrl || program.githubUrl) && (
							<div
								className="flex flex-col gap-2 border-t pt-3 sm:flex-row md:gap-3 md:pt-4"
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
