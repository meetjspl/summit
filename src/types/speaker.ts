export interface Speaker {
	name: string;
	role: string;
	company: string | { name: string; url: string };
	talkTitle: string;
	talkDescription?: string;
	bio: string;
	imageUrl?: string;
	social?: {
		twitter?: string;
		linkedin?: string;
		github?: string;
		instagram?: string;
		youtube?: string;
	};
}
