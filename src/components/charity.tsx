import charitySymbol from '@/assets/charity_symbol.png';
import { Wrapper } from '@/components/wrapper.tsx';
import hakersiLogo from '@/assets/hakersi-logo.png';
import kopdLogo from '@/assets/kopd-logo.svg';

export const Charity = () => {
	return (
		<section
			className="relative bg-[#0F0F11] py-16"
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
								src={charitySymbol}
								alt="Charity event badge"
								className="h-34.75 w-34.75"
								style={{ transform: 'scaleX(-1)' }}
							/>
						</div>

						<div className="flex flex-col gap-3 text-center md:text-left">
							<h2 className="text-[32px] leading-9.75 font-bold text-aidevs-white">
								Charity Event
							</h2>
							<p className="leading-5 font-medium text-aidevs-white">
								All profit from ticket sales goes to chosen charity
							</p>
						</div>
					</div>

					<div className="flex shrink-0 flex-col items-center gap-4 sm:flex-row">
						<a
							href="https://kopd.pl"
							target="_blank"
							rel="noopener noreferrer"
							className="flex h-24 w-48 items-center justify-center rounded bg-gray-100 p-2"
						>
							<img
								src={kopdLogo}
								alt="KOPD Logo"
								className="h-full w-full object-contain"
							/>
						</a>
						<a
							href="https://hakersi.pl"
							target="_blank"
							rel="noopener noreferrer"
							className="flex h-24 w-48 items-center justify-center rounded bg-gray-100 p-2"
						>
							<img
								src={hakersiLogo}
								alt="Hakersi Logo"
								className="h-full w-full object-contain"
							/>
						</a>
					</div>
				</div>
			</Wrapper>
		</section>
	);
};
