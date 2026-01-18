import IconAiDevs from '@/assets/icon-aidevs.svg?react';
import IconCommunity from '@/assets/icon-community.svg?react';
import IconEcosystem from '@/assets/icon-ecosystem.svg?react';
import { Wrapper } from '@/components/wrapper.tsx';

export const InfoCards = () => {
	return (
		<section className="relative bg-black py-16">
			<Wrapper>
				<div className="items-[normal] flex flex-col justify-center gap-6 md:flex-row">
					<div className="flex w-full flex-col gap-3 rounded-[10px] border border-gray bg-black p-6 md:w-76.75">
						<div className="flex items-center gap-2">
							<IconCommunity className="h-6.5 w-6.5" />
							<h3 className="leading-[140%] font-bold text-aidevs-white">
								dev_community
							</h3>
						</div>
						<p className="leading-[140%] text-aidevs-white">
							meet.js is{' '}
							<span className="text-meetjs-blue">
								Poland's largest and longest-running JavaScript community
							</span>
							, bringing together developers, enthusiasts, and industry experts
							since 2011.
						</p>
					</div>

					<div className="flex w-full flex-col gap-3 rounded-[10px] border border-gray bg-black p-6 md:w-76.75">
						<div className="flex items-center gap-2">
							<IconEcosystem className="h-6.5 w-6.5" />
							<h3 className="leading-[140%] font-bold text-aidevs-white">
								js.ecosystem
							</h3>
						</div>
						<p className="leading-[140%] text-aidevs-white">
							It all began on a Valentine's Day eve in 2011, when a group of
							JavaScript enthusiasts gathered in a Poznań pub. What started as a{' '}
							<span className="text-meetjs-green">
								casual meetup has evolved into a nationwide movement
							</span>{' '}
							that has shaped Poland's JavaScript ecosystem.
						</p>
					</div>

					<div className="flex w-full flex-col gap-3 rounded-[10px] border border-gray bg-black p-6 md:w-76.75">
						<div className="flex items-center gap-2">
							<IconAiDevs className="h-6.5 w-6.5" />
							<h3 className="leading-[140%] font-bold text-aidevs-white">
								AI_devs 4 Edition
							</h3>
						</div>
						<p className="leading-[140%] text-aidevs-white">
							This years edition is much different! Not only it's the{' '}
							<span className="text-aidevs-green">
								15th Anniversary of meet.js community
							</span>{' '}
							in Poland it is also a co-hosted event with BRAVE Education -
							authors of AI_devs 4 Builders Edition program that{' '}
							<span className="text-aidevs-green">
								unlocks the full potential of all developers
							</span>
							.
						</p>
					</div>
				</div>
			</Wrapper>
		</section>
	);
};
