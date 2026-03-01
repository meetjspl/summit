import {
	FaBluesky,
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaXTwitter,
	FaYoutube,
} from 'react-icons/fa6';

import SpeakerPlaceholder from '@/assets/speakers/speaker-placeholder.png';
import { Popover } from '@/components/popover.tsx';

import type { Speaker } from '@/types/speaker.ts';

type SpeakerCardProps = Speaker & {
	variant?: 'speaker' | 'debate';
};

export const SpeakerCard = ({
	name,
	company,
	social,
	bio,
	role,
	talkTitle,
	talkDescription,
	imageUrl,
	youtubeShort,
	variant = 'speaker',
}: SpeakerCardProps) => {
	const isDebate = variant === 'debate';

	return (
		<div className="group flex flex-col overflow-hidden rounded-2xl bg-gray/20 transition-all hover:bg-gray/30 hover:shadow-xl">
			<div className="relative aspect-square overflow-hidden bg-gray">
				<img
					src={imageUrl || SpeakerPlaceholder}
					alt={name}
					className="h-full w-full object-cover transition-transform group-hover:scale-105"
				/>
				{youtubeShort && (
					<a
						href={youtubeShort}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`Watch ${name}'s YouTube Short`}
						className="absolute right-3 bottom-3 flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm transition-colors hover:bg-red-600"
					>
						<FaYoutube className="h-4 w-4" />
						<span>Short 🇵🇱</span>
					</a>
				)}
			</div>

			<div className={`flex flex-col ${isDebate ? 'gap-1 p-3' : 'gap-2 p-6'}`}>
				<h3 className={`font-semibold ${isDebate ? 'text-base' : 'text-xl'}`}>
					{name}
				</h3>
				<p className={`text-meetjs-green ${isDebate ? 'text-xs' : 'text-sm'}`}>
					{role}{' '}
					{typeof company === 'string'
						? company !== '' && `@ ${company}`
						: company.length > 0 && (
								<>
									<span>@</span>{' '}
									{company.map((comp, index) => (
										<span key={index}>
											{comp.url ? (
												<a
													href={comp.url}
													className="underline underline-offset-3"
												>
													{comp.name}
												</a>
											) : (
												comp.name
											)}
											{index < company.length - 1 && ', '}
										</span>
									))}
								</>
							)}
				</p>
				{talkDescription && (
					<Popover trigger={talkTitle} content={talkDescription} />
				)}
				{!talkDescription && (
					<p
						className={`${isDebate ? 'mt-1 text-xs' : 'mt-2 text-sm'} font-medium text-white-2`}
					>
						{talkTitle}
					</p>
				)}
				<p
					className={`${isDebate ? 'mt-1 text-xs' : 'mt-2 text-sm'} text-white-2/80`}
				>
					{bio}
				</p>

				{social && (
					<div className={`flex ${isDebate ? 'mt-2 gap-2' : 'mt-4 gap-4'}`}>
						{social.bluesky && (
							<a
								href={social.bluesky}
								target="_blank"
								rel="noopener noreferrer"
								className="text-white-2 transition-colors hover:text-meetjs-blue"
								aria-label={`${name}'s Bluesky`}
							>
								<FaBluesky className="h-5 w-5" />
							</a>
						)}
						{social.x && (
							<a
								href={social.x}
								target="_blank"
								rel="noopener noreferrer"
								className="text-white-2 transition-colors hover:text-meetjs-blue"
								aria-label={`${name}'s X`}
							>
								<FaXTwitter className="h-5 w-5" />
							</a>
						)}
						{social.linkedin && (
							<a
								href={social.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								className="text-white-2 transition-colors hover:text-meetjs-blue"
								aria-label={`${name}'s LinkedIn`}
							>
								<FaLinkedin className="h-5 w-5" />
							</a>
						)}
						{social.github && (
							<a
								href={social.github}
								target="_blank"
								rel="noopener noreferrer"
								className="text-white-2 transition-colors hover:text-meetjs-blue"
								aria-label={`${name}'s GitHub`}
							>
								<FaGithub className="h-5 w-5" />
							</a>
						)}
						{social.instagram && (
							<a
								href={social.instagram}
								target="_blank"
								rel="noopener noreferrer"
								className="text-white-2 transition-colors hover:text-meetjs-blue"
								aria-label={`${name}'s Instagram`}
							>
								<FaInstagram className="h-5 w-5" />
							</a>
						)}
						{social.youtube && (
							<a
								href={social.youtube}
								target="_blank"
								rel="noopener noreferrer"
								className="text-white-2 transition-colors hover:text-meetjs-blue"
								aria-label={`${name}'s YouTube`}
							>
								<FaYoutube className="h-5 w-5" />
							</a>
						)}
					</div>
				)}
			</div>
		</div>
	);
};
