import { Popover } from '@/components/popover.tsx';

import type { Speaker } from '@/types/speaker.ts';

export const SpeakerCard = ({
	name,
	company,
	social,
	bio,
	role,
	talkTitle,
	talkDescription,
	imageUrl,
}: Speaker) => {
	return (
		<div className="group flex flex-col overflow-hidden rounded-2xl bg-gray/20 transition-all hover:bg-gray/30 hover:shadow-xl">
			<div className="aspect-square overflow-hidden bg-gray">
				<img
					src={imageUrl || '/speaker-placeholder.png'}
					alt={name}
					className="h-full w-full object-cover transition-transform group-hover:scale-105"
				/>
			</div>

			<div className="flex flex-col gap-2 p-6">
				<h3 className="text-xl font-semibold">{name}</h3>
				<p className="text-sm text-meetjs-green">
					{role}{' '}
					{typeof company === 'string' ? (
						company !== '' ? (
							`@ ${company}`
						) : (
							''
						)
					) : (
						<>
							<span>@</span>{' '}
							<a href={company.url} className="underline underline-offset-3">
								{company.name}
							</a>
						</>
					)}
				</p>
				{talkDescription && (
					<Popover trigger={talkTitle} content={talkDescription} />
				)}
				{!talkDescription && (
					<p className="mt-2 text-sm font-medium text-white-2">{talkTitle}</p>
				)}
				<p className="mt-2 text-sm text-white-2/80">{bio}</p>

				{social && (
					<div className="mt-4 flex gap-4">
						{social.twitter && (
							<a
								href={social.twitter}
								className="text-white-2 transition-colors hover:text-meetjs-blue"
								aria-label={`${name}'s Twitter`}
							>
								<svg
									className="h-5 w-5"
									viewBox="0 0 1200 1227"
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
								</svg>
							</a>
						)}
						{social.linkedin && (
							<a
								href={social.linkedin}
								className="text-white-2 transition-colors hover:text-meetjs-blue"
								aria-label={`${name}'s LinkedIn`}
							>
								<svg
									className="h-5 w-5"
									viewBox="0 0 76.624 65.326"
									fill="currentColor"
								>
									<path
										d="M958.98,112.559h-9.6V97.525c0-3.585-.064-8.2-4.993-8.2-5,0-5.765,3.906-5.765,7.939v15.294h-9.6V81.642h9.216v4.225h.129a10.1,10.1,0,0,1,9.093-4.994c9.73,0,11.524,6.4,11.524,14.726ZM918.19,77.416a5.571,5.571,0,1,1,5.57-5.572,5.571,5.571,0,0,1-5.57,5.572m4.8,35.143h-9.61V81.642h9.61Zm40.776-55.2h-55.21a4.728,4.728,0,0,0-4.781,4.67v55.439a4.731,4.731,0,0,0,4.781,4.675h55.21a4.741,4.741,0,0,0,4.8-4.675V62.025a4.738,4.738,0,0,0-4.8-4.67"
										transform="translate(-903.776 -57.355)"
									/>
								</svg>
							</a>
						)}
						{social.github && (
							<a
								href={social.github}
								className="text-white-2 transition-colors hover:text-meetjs-blue"
								aria-label={`${name}'s GitHub`}
							>
								<svg
									className="h-5 w-5"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
								</svg>
							</a>
						)}
						{social.instagram && (
							<a
								href={social.instagram}
								className="text-white-2 transition-colors hover:text-meetjs-blue"
								aria-label={`${name}'s GitHub`}
							>
								<svg
									viewBox="0 0 1000 1000"
									className="h-6 w-6"
									fill="currentColor"
								>
									<defs></defs>
									<path
										className="cls-1"
										d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34"
										transform="translate(-2.5 -2.5)"
									/>
								</svg>
							</a>
						)}
					</div>
				)}
			</div>
		</div>
	);
};
