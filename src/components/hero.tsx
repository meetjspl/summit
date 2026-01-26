import heroBg from '@/assets/SGH_ASCI.png';
import { AIDevs } from '@/components/ai-devs.tsx';
import { Anniversary } from '@/components/anniversary.tsx';
import { HeroBottomSection } from '@/components/hero-bottom-section.tsx';
import { MeetjsSummit } from '@/components/meetjs-summit.tsx';
import { Monitor } from '@/components/monitor.tsx';
import { Organizers } from '@/components/organizers.tsx';
import { Wrapper } from '@/components/wrapper.tsx';

export const Hero = () => {
	return (
		<header
			className="hero relative flex min-h-svh flex-col overflow-x-hidden bg-cover bg-center md:overflow-hidden md:bg-contain"
			style={{ backgroundImage: `url(${heroBg})` }}
		>
			<div className="absolute top-0 left-0 h-full w-full bg-black opacity-25" />
			<Wrapper>
				<Organizers />
				<MeetjsSummit />
			</Wrapper>
			<Anniversary />
			<Wrapper>
				<div className="relative">
					<Monitor />
					<AIDevs />
				</div>
			</Wrapper>
			<Wrapper className="mt-8 md:mt-24">
				<HeroBottomSection />
			</Wrapper>
		</header>
	);
};
