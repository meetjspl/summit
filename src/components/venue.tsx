import { Wrapper } from '@/components/wrapper.tsx';

export const Venue = () => {
	return (
		<section id="venue" className="relative bg-black py-16">
			<Wrapper>
				<div className="flex flex-col items-start gap-12 text-white md:flex-row md:items-center">
					{/* Left Side - Text Content */}
					<div className="flex w-full flex-col gap-6 md:w-1/2">
						<h2 className="text-4xl font-semibold leading-[140%] tracking-tight text-aidevs-white md:text-[40px]">
							Venue
						</h2>
						
						<div className="space-y-4 text-sm leading-[140%] tracking-tight text-aidevs-white md:text-base">
							<p>
								<span className="font-semibold">
									The Warsaw School of Economics
								</span>{' '}
								is an innovative economic university that develops intellectual
								creativity and educates leaders in response to future challenges.
							</p>
							
							<p>
								It is a significant{' '}
								<span className="font-semibold">global center</span> for
								scientific research, new ideas and initiatives created by the
								academic community, alumni, as well as representatives from
								business, social organizations, and public administration.
							</p>
						</div>
					</div>
					
					{/* Right Side - Image and Location */}
					<div className="w-full space-y-4 md:w-1/2">
						{/* Image with SGH Badge */}
						<div className="relative overflow-hidden rounded-2xl">
							<img
								src="/src/assets/SGH.jpg"
								alt="Warsaw School of Economics aerial view"
								className="w-full object-cover"
							/>
							{/* SGH Logo Badge */}
							<div className="absolute bottom-4 right-4 rounded-lg bg-white p-4 shadow-xl">
								<img
									src="/src/assets/SGH-logo.jpg"
									alt="SGH Logo"
									className="h-16 w-auto"
								/>
							</div>
						</div>
						
						{/* Location Info */}
						<div className="flex items-start gap-3 text-sm text-aidevs-white">
							<svg 
								className="mt-1 h-6 w-6 flex-shrink-0 text-meetjs-blue" 
								fill="none" 
								stroke="currentColor" 
								viewBox="0 0 24 24"
							>
								<path 
									strokeLinecap="round" 
									strokeLinejoin="round" 
									strokeWidth={2} 
									d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
								/>
								<path 
									strokeLinecap="round" 
									strokeLinejoin="round" 
									strokeWidth={2} 
									d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
								/>
							</svg>
							<div>
								<p className="font-semibold">The Warsaw School of Economics</p>
								<p className="text-white/70">al. Niepodległości 162, 02-554 Warsaw</p>
							</div>
						</div>
					</div>
				</div>
			</Wrapper>
		</section>
	);
};
