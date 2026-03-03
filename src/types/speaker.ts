export interface Speaker {
	name: string;
	role: string;
	company: string | { name: string; url: string }[];
	talkTitle: string;
	talkDescription?: string;
	bio: string;
	imageUrl?: string;
	teaserUrl?: string;
	youtubeShort?: string;
	social?: {
		x?: string;
		linkedin?: string;
		github?: string;
		instagram?: string;
		youtube?: string;
		bluesky?: string;
	};
}
