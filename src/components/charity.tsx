import { Wrapper } from '@/components/wrapper.tsx';


export const Charity = () => {
	return (
		<section
			className="relative bg-[#0F0F11] py-12"
			style={{
				background:
					'radial-gradient(54.76% 158.62% at 26.49% 55.75%, rgba(44, 44, 44, 0.9) 0%, rgba(15, 15, 17, 0) 100%), #0F0F11',
			}}
		>
			<Wrapper>
				<div className="flex flex-col items-center gap-8 text-white md:flex-row md:items-center md:justify-between">
					<div className="flex flex-col items-center gap-6 md:flex-row md:items-center">
						<div className="shrink-0">
							<img
								src="/charity-badge-3d.png"
								alt="Charity event badge"
								className="h-34.75 w-34.75"
								style={{ transform: 'scaleX(-1)' }}
							/>
						</div>

						<div className="flex flex-col gap-3 text-center md:text-left">
							<h2
								className="text-[32px] leading-9.75 font-bold tracking-tight text-aidevs-white"
								style={{ letterSpacing: '-0.01em' }}
							>
								Charity Event
							</h2>
							<p
								className="text-base leading-5 font-medium tracking-tight text-aidevs-white"
								style={{ letterSpacing: '-0.01em' }}
							>
								All profit from ticket sales goes to chosen charity
							</p>
						</div>
					</div>

					<div className="shrink-0">
						<div
							className="flex h-34 w-56.75 items-center justify-center rounded bg-aidevs-white text-center text-base leading-5 font-medium tracking-tight"
							style={{
								color: '#363636',
								letterSpacing: '-0.01em',
							}}
						>
							CHARITY LOGO
						</div>
					</div>
				</div>
			</Wrapper>
		</section>
	);
};
