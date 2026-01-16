import { Wrapper } from '@/components/wrapper.tsx';

export const Charity = () => {
	return (
		<section className="relative bg-[#0F0F11] py-12" style={{
			background: 'radial-gradient(54.76% 158.62% at 26.49% 55.75%, rgba(44, 44, 44, 0.9) 0%, rgba(15, 15, 17, 0) 100%), #0F0F11'
		}}>
			<Wrapper>
				<div className="flex flex-col items-center gap-8 text-white md:flex-row md:items-center md:justify-between">
					{/* Left Side - Badge and Text */}
					<div className="flex flex-col items-center gap-6 md:flex-row md:items-center">
						{/* 3D Charity Badge - 139x139px */}
						<div className="flex-shrink-0">
							<img
								src="/charity-badge-3d.png"
								alt="Charity event badge"
								className="h-[139px] w-[139px]"
								style={{ transform: 'scaleX(-1)' }}
							/>
						</div>

						{/* Text Content */}
						<div className="flex flex-col gap-3 text-center md:text-left">
							<h2 
								className="text-[32px] font-bold leading-[39px] tracking-tight text-aidevs-white"
								style={{ letterSpacing: '-0.01em' }}
							>
								Charity Event
							</h2>
							<p 
								className="text-base font-medium leading-5 tracking-tight text-aidevs-white"
								style={{ letterSpacing: '-0.01em' }}
							>
								All profit from ticket sales goes to chosen charity
							</p>
						</div>
					</div>

					{/* Right Side - Charity Logo Placeholder - 227x136px */}
					<div className="flex-shrink-0">
						<div 
							className="flex h-[136px] w-[227px] items-center justify-center rounded bg-aidevs-white text-center text-base font-medium leading-5 tracking-tight"
							style={{ 
								color: '#363636',
								letterSpacing: '-0.01em'
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
