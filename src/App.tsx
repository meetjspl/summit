import { BecomeASponsor } from '@/components/become-a-sponsor.tsx';
import { Charity } from '@/components/charity.tsx';
import { Debate } from '@/components/debate.tsx';
import { LoveLetter } from '@/components/love-letter.tsx';
import { OrganizersSection } from '@/components/organizers-section.tsx';
import { Partners } from '@/components/partners.tsx';
import { PhotosSlider } from '@/components/photos-slider.tsx';
import { Speakers } from '@/components/speakers.tsx';
import { Venue } from '@/components/venue.tsx';
import { VideoPlaylists } from '@/components/video-playlists.tsx';
import { useErrorTracking } from '@/hooks/useErrorTracking';
import { useScrollDepthTracking } from '@/hooks/useScrollDepthTracking';
import { useTimeOnPageTracking } from '@/hooks/useTimeOnPageTracking';

import { Hero } from './components/hero.tsx';
import { Tickets } from './components/tickets.tsx';

export const App = () => {
	useScrollDepthTracking();
	useTimeOnPageTracking();
	useErrorTracking();

	return (
		<>
			<Hero />
			<LoveLetter />
			<Tickets />
			<Partners />
			<Speakers />
			<Debate />
			<Venue />
			<PhotosSlider />
			<VideoPlaylists />
			<Charity />
			{/*<CFP />*/}
			<OrganizersSection />
			<BecomeASponsor />
		</>
	);
};
