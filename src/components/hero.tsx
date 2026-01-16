import { AIDevs } from '@/components/ai-devs.tsx';
import { Anniversary } from '@/components/anniversary.tsx';
import { HeroBottomSection } from '@/components/hero-bottom-section.tsx';
import { MeetjsSummit } from '@/components/meetjs-summit.tsx';
import { Organizers } from '@/components/organizers.tsx';
import { Wrapper } from '@/components/wrapper.tsx';

export const Hero = () => {
	return (
		<header className='hero relative flex h-svh flex-col overflow-x-hidden bg-[url("./src/assets/SGH_ASCI.png")] bg-cover bg-center md:bg-contain'>
			<div className="absolute top-0 left-0 h-full w-full bg-black opacity-25" />
			<Wrapper>
				<Organizers />
				<MeetjsSummit />
			</Wrapper>
			<Anniversary />
			<Wrapper>
				<AIDevs />
				<HeroBottomSection />
			</Wrapper>
		</header>
	);
};
