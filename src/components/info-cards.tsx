import { Wrapper } from '@/components/wrapper.tsx';
import IconAiDevs from '@/assets/icon-aidevs.svg?react';
import IconCommunity from '@/assets/icon-community.svg?react';
import IconEcosystem from '@/assets/icon-ecosystem.svg?react';

export const InfoCards = () => {
	return (
		<section className="relative bg-black py-16">
			<Wrapper>
				{/* Container: flex-row, centered, gap-24px */}
				<div className="flex flex-col items-center justify-center gap-6 md:flex-row">
					{/* Card 1 - dev_community */}
					<div className="flex w-full flex-col gap-3 rounded-[10px] border border-[#424242] bg-[#131418] p-6 md:h-[192px] md:w-[307px]">
						{/* Icon + Title Row */}
						<div className="flex items-center gap-2">
							<IconCommunity className="h-[26px] w-[26px]" />
							<h3 className="text-base font-bold leading-[140%] tracking-tight text-aidevs-white">
								dev_community
							</h3>
						</div>
						{/* Description */}
						<p className="text-xs leading-[140%] tracking-tight text-aidevs-white">
							meet.js is <span className="text-[#219EAB]">Poland's largest and longest-running JavaScript community</span>, bringing together developers, enthusiasts, and industry experts since 2011.
						</p>
					</div>

					{/* Card 2 - js.ecosystem */}
					<div className="flex w-full flex-col gap-3 rounded-[10px] border border-[#424242] bg-[#131418] p-6 md:h-[192px] md:w-[307px]">
						{/* Icon + Title Row */}
						<div className="flex items-center gap-2">
							<IconEcosystem className="h-[26px] w-[26px]" />
							<h3 className="text-base font-bold leading-[140%] tracking-tight text-aidevs-white">
								js.ecosystem
							</h3>
						</div>
						{/* Description */}
						<p className="text-xs leading-[140%] tracking-tight text-aidevs-white">
							It all began on a Valentine's Day eve in 2011, when a group of JavaScript enthusiasts gathered in a Poznań pub. What started as a <span className="text-[#BCD35D]">casual meetup has evolved into a nationwide movement</span> that has shaped Poland's JavaScript ecosystem.
						</p>
					</div>

					{/* Card 3 - AI_devs 4 Edition */}
					<div className="flex w-full flex-col gap-3 rounded-[10px] border border-[#424242] bg-[#131418] p-6 md:h-[192px] md:w-[307px]">
						{/* Icon + Title Row */}
						<div className="flex items-center gap-2">
							<IconAiDevs className="h-[26px] w-[26px]" />
							<h3 className="text-base font-bold leading-[140%] tracking-tight text-aidevs-white">
								AI_devs 4 Edition
							</h3>
						</div>
						{/* Description */}
						<p className="text-xs leading-[140%] tracking-tight text-aidevs-white">
							This years edition is much different! Not only it's the <span className="text-[#75F66D]">15th Anniversary of meet.js community</span> in Poland it is also a co-hosted event with BRAVE Education - authors of AI_devs 4 Builders Edition program that <span className="text-[#75F66D]">unlocks the full potential of all developers</span>.
						</p>
					</div>
				</div>
			</Wrapper>
		</section>
	);
};
