import CarolaKeskula from '@/assets/speakers/carola-keskula.jpeg';
import DominikaZajac from '@/assets/speakers/dominika-zajac.jpg';
import MateuszChrobok from '@/assets/speakers/mateusz-chrobok.png';
import MichalMichalczuk from '@/assets/speakers/michal-michalczuk.webp';
import MichalGolebiewskiOwczarek from '@/assets/speakers/michał-golebiowski-owczarek.jpeg';
import MichalHadrysiak from '@/assets/speakers/michał-hadrysiak.jpg';
import PiotrKacala from '@/assets/speakers/piotr-kacala.png';
import SzymonChmal from '@/assets/speakers/szymon-chmal.png';
import TomaszGil from '@/assets/speakers/tomasz-gil.jpeg';
import {SpeakerCard} from '@/components/speaker-card.tsx';
import {Wrapper} from '@/components/wrapper.tsx';

import type {Speaker} from '@/types/speaker.ts';

const speakers: Speaker[] = [
	// {
	// 	name: 'Jakub Mrugalski',
	// 	role: 'Trainer',
	// 	company: { name: 'AI_devs', url: 'https://www.aidevs.pl/' },
	// 	talkTitle: 'Talk title to be announced',
	// 	bio:
	// 		'Jakub “Unknow” Mrugalski is a tech entrepreneur and AI (LLM) integration trainer, focused on building practical, real-world applications of artificial intelligence. He is the creator of projects such as AI_Devs, where he teaches developers how to effectively use AI in software products, and the weekly #unknowNews newsletter, followed by a growing community of tech professionals.\n' +
	// 		'He actively shares knowledge about automation, cybersecurity, experimental business models, and modern web tools.',
	// 	imageUrl: JakubMrugalski,
	// 	social: {
	// 		x: 'https://x.com/uwteam',
	// 		linkedin: 'https://www.linkedin.com/in/unknow/',
	// 		github: 'https://github.com/unkn0w',
	// 		instagram: 'https://www.instagram.com/uwteam_org/',
	// 		youtube: 'https://www.youtube.com/@uwteamorg',
	// 	},
	// },
	{
		name: 'Mateusz Chrobok',
		role: 'Trainer / Co-Founder',
		company: [{ name: 'AI_devs', url: 'https://www.aidevs.pl/' }],
		talkTitle: 'When AI does whatever it wants. AI alignment.',
		bio: 'Mateusz Chrobok is a cybersecurity expert, startup consultant, and tech educator with deep experience in digital security, innovation, and AI. He’s co-founded multiple startups and helps organisations navigate the evolving landscape of online threats and secure digital transformation. As a creator and communicator, Mateusz builds communities around technology through his popular YouTube channel and educational platform, where he explains complex cybersecurity and tech topics in a clear and engaging way.',
		imageUrl: MateuszChrobok,
		social: {
			x: 'https://x.com/MateuszChrobok',
			linkedin: 'https://www.linkedin.com/in/mateuszchrobok/',
			instagram: 'https://www.instagram.com/mateuszemsi/',
			youtube: 'https://www.youtube.com/@MateuszChrobok',
		},
	},
	{
		name: 'Carola Kesküla',
		role: 'Senior Front-end Developer & Capability Lead',
		company: '',
		talkTitle: 'Don’t Rush It, Refactor It: Building Better Front-Ends with AI',
		talkDescription:
			'If you’ve ever juggled multiple front-end projects while still deeply caring about clean styles, accessible UIs and fast load times… hi, you’re in good company!\n' +
			'Quality is a non-negotiable. Deadlines are often tight. I’ll be sharing how AI has supported my workflow. Not by letting it do all the work, but by accelerating and verifying parts that can get squeezed under pressure. From tidying up CSS to spotting accessibility issues and optimising performance, we’ll explore how to move fast without cutting corners.\n' +
			'Whether you’re working on smaller features or scaling big systems, you’ll leave with ideas to adapt to your own pace and context. Also... hopefully with a little inspiration to keep pushing for quality, even when everything’s moving fast.',
		bio: 'Front-end engineer building scalable and accessible experiences. Grounded in full-stack fundamentals and obsessed with real-world impact. At Nortal, has taken the lead on front-end efforts across a wide range of domains: from government systems around the globe to some of the major players in the US tech scene. Currently focused on building interfaces for AI-driven solutions and helping fellow developers level up. Built her first website at 11 and what it was about remains a conversation starter.',
		imageUrl: CarolaKeskula,
		social: {
			linkedin: 'https://www.linkedin.com/in/carolakeskyla/',
		},
	},
	{
		name: 'Tomasz Gil',
		role: 'Senior Software Engineer',
		company: 'OpenSpace',
		talkTitle: 'Shipping Offline Support on the Web',
		talkDescription:
			'Offline support is often seen as a hard boundary between web and native. If users need to work without a reliable network, many teams assume a native mobile app is the only serious option.\n' +
			'\n' +
			'In this talk, I’ll challenge this statement with a real-world case study from a production web application, where we delivered meaningful offline functionality—without building a native app.\n' +
			'\n' +
			'I’ll walk through a practical, step-by-step approach to offline support on the web:\n' +
			'- choosing the right offline model (foreground queues vs. background sync),\n' +
			'- ensuring the application can reliably load without a network,\n' +
			'- persisting the right data locally using IndexedDB,\n' +
			'- and handling offline changes with a foreground queue.\n' +
			'\n' +
			'The focus is on what actually matters in practice: product requirements, browser constraints, trade-offs, and incremental wins that improve user experience long before full offline sync is in place.\n' +
			'\n' +
			'You’ll leave with a clear mental model for offline support in web applications and concrete steps you can apply before considering a native rewrite.',
		bio: 'Senior Software Engineer at OpenSpace. I help product teams build quality software and lead engineering efforts.',
		imageUrl: TomaszGil,
		social: {
			linkedin: 'https://www.linkedin.com/in/tomasz-gil/',
		},
	},
	{
		name: 'Michał Michalczuk',
		role: 'Senior Software Engineer and consultant. IT trainer.',
		company: 'Tektit Consulting',
		talkTitle:
			'Your AI Agent is just a while loop with an API call. Let me prove it.',
		talkDescription:
			'AI agents are everywhere right now. Every week, there’s a new framework promising to make agents “easy” — Vercel AI SDK, LangChain, Claude SDK, Google ADK, you name it. And you can start playing with them in ~20 lines of code. What a time to be alive!\n' +
			'\n' +
			'But what actually happens when an agent “thinks”? \n' +
			'What is behind that magical`generateText()`call? \n' +
			'How and why are tools and MCP servers called, and how does the whole flow work? \n' +
			"If you use it as a black box when things break, it's a matter of time before you’re guessing instead of understanding.\n" +
			'\n' +
			"I’ve been building an AI agent with Vercel AI SDK that helps professionals prepare for meetings by processing emails, chats, and calendars. At some point, debugging the system was like hitting the black box with a stick and wondering why it didn't work, so I decided to open up the box.\n" +
			'\n' +
			'Spoiler: there’s no magic. It’s a loop, a few API calls, some tool invocations, a lot of prompt‑engineering glue, and even more glue.\n' +
			'\n' +
			'In this talk, I’ll show you:\n' +
			'\n' +
			'- How the agent loop works\n' +
			'- How tool calling and MCP integration work under the hood\n' +
			'- Why “multi‑agent systems” are often just nested loops with a buzzword sticker on it\n' +
			'\n' +
			'You’ll walk away knowing what your agent is doing when no one is watching. No more black boxes.',
		bio: 'He talks and records content on front-end, node.js and web development topics. Co-organizer of meet.js Gdańsk meetup. One of the talking heads on “Śniadanie z Programowaniem” and other video formats by JustJoin.it',
		imageUrl: MichalMichalczuk,
		social: {
			linkedin: 'https://www.linkedin.com/in/michalczukm/',
		},
	},
	{
		name: 'Szymon Chmal',
		role: 'Creator of Rozenite, Harness and Voltra',
		company: 'Callstack',
		talkTitle: 'JSX to Live Activity: The Story of Voltra.',
		talkDescription:
			'This is a story of the many gotchas we hit while building Voltra, a library that brings React to iOS Live Activities and the Dynamic Island. From discovering why the usual way of building a custom renderer doesn’t always work, to digging into how hooks function under the hood and supporting them by hand, to wrestling with the brutal 4 KB payload limit. It’s a tour through React internals, extreme platform constraints, and the unexpected decisions required to make React work where it was never designed to run.',
		bio: 'Creator of Rozenite, Harness and Voltra. The kind of person who dives into code and somehow makes the "impossible" happen. Focused on building the next generation of developer tools so you can ship your apps even faster.',
		imageUrl: SzymonChmal,
		social: {
			linkedin: 'https://www.linkedin.com/in/szymon-chmal/',
		},
	},
	{
		name: 'Dominika Zając',
		role: 'Senior Software Engineer',
		company: 'Qualtrics',
		talkTitle: 'AI in non-perfect (brownfield/legacy) world',
		talkDescription:
			'Many AI-related talks focus on new features and brand-new repositories. Adding a new feature or creating a' +
			' new webpage is no longer a real technical challenge in 2026. But that’s not what our day-to-day work usually' +
			' looks like. In reality, we work in brownfield and legacy codebases—imperfectly structured, with a bit of' +
			' spaghetti sadly hiding between the lines. In this talk, I share lessons from experimenting with AI in a' +
			' non-perfect world: using it to handle the work I hate—managing dependency upgrades, migrating deprecated libraries and frameworks, adding missing tests, debugging issues, removing stale feature flags, and more. Were all experiments successful? Of course not. But you can learn from what worked, what failed, and why. Join me on a journey where AI takes over the boring but necessary tasks—so we can focus on what programmers love most: solving problems, delivering value, and building solid architecture. Let AI take our jobs… just the parts we don’t like',
		bio: 'Full-stack developer who loves sharing their knowledge and singing. Google Developer Expert for Web Technologies, Microsoft Most Valuable Professional in Web technologies, senior software engineer at Qualtrics, public speaker, trainer and blogger. Talking and writing about Web, a11y, teaching others how to code and code best practices.',
		imageUrl: DominikaZajac,
		social: {
			linkedin: 'https://www.linkedin.com/in/dominikazajac/',
		},
	},
	{
		name: 'Michał Gołębiowski-Owczarek',
		role: 'Active member of the jQuery Core team ',
		company: '',
		talkTitle: 'From “Write Less” to v4: Why jQuery Still Matters (in 2026).',
		talkDescription:
			"We'll have a look at the 20-year history of jQuery, what was its role in the past and why is it still actively supported & relevant, even getting a new major version in 2026.",
		bio: 'An active member of the jQuery Core team for the past 13 years, a former member of the AngularJS core team. A TypeScript enthusiast. Likes diving deep into technical details and working with browser vendors or spec authors. Frontend-focused, but also a fan of automations & small shell scripts.',
		imageUrl: MichalGolebiewskiOwczarek,
		social: {
			linkedin: 'https://www.linkedin.com/in/mzgol/',
		},
	},
	{
		name: 'Michał Hadrysiak',
		role: 'Senior Full Stack Engineer',
		company: 'IndieBI',
		talkTitle: '(AuDH)DX - How to cope with attention deficit as developer.',
		talkDescription:
			"Productivity of neurodivergent people is weird: you have a mix of hyperfocus moments when you are almost unstoppable with executive paralysis moments when you'll avoid even a simple task. I've been in IT for over 10 years. During this time, I was looking for tools and strategies that would help me to reduce the effort of starting things and maximize the chance of finishing them without distraction. This talk will be a summary of my thoughts about Developer Experience from neurodivergent perspective.",
		bio: 'Curious full-stack developer with AuDHD. Focused not only about code but whole Software Development Life Cycle. Big fan of simple solutions that "just work". Member of Mensa.',
		imageUrl: MichalHadrysiak,
		social: {
			linkedin: 'https://www.linkedin.com/in/michal-hadrysiak',
		},
	},
	{
		name: 'Piotr Kacała',
		role: 'Co-founder ',
		company: {
			name: 'AI Product Heroes',
			url: 'https://www.aiproductheroes.pl/',
		},
		talkTitle:
			'Engineer → Product Engineer → Product Builder Why? Why now? How?',
		talkDescription: '',
		bio:
			'Piotr Kacała is a Chief Technology & Product Officer with over 20 years of experience building' +
			' high-performing teams and globally recognized digital products. Throughout his career, Piotr has contributed to the growth of companies such as Displate (scaling from startup to global brand), CD Projekt (including flagship titles like Cyberpunk 2077 and The Witcher), and GOG.com.' +
			'In addition, he co-founded AI Products Heroes, a program and community dedicated to helping product leaders successfully design, build, and scale AI-powered products. Through this initiative, he supports teams in navigating the unique strategic, technical, and organizational challenges that come with AI.',
		imageUrl: PiotrKacala,
		social: {
			linkedin: 'https://www.linkedin.com/in/piotr-kacala/',
		},
	},
];

export const Speakers = () => {
	return (
		<section id="speakers" className="bg-black py-16 text-white">
			<Wrapper>
				<h2 className="mb-4 text-center text-5xl font-semibold">Speakers</h2>
				<p className="mb-12 text-center text-lg text-white-2">
					Learn from industry experts and thought leaders
				</p>

				{speakers.length === 0 ? (
					<div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-gray/10 p-12 text-center">
						<div className="mb-6 flex justify-center">
							<svg
								className="h-24 w-24 text-meetjs-green"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={1.5}
									d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
								/>
							</svg>
						</div>
						<h3 className="mb-4 text-3xl font-semibold">To Be Announced</h3>
						<p className="mb-6 text-lg text-white-2">
							We're curating an incredible lineup of industry experts, thought
							leaders, and innovators who will share their knowledge and
							insights.
						</p>
						<p className="text-white-2">
							Stay tuned for speaker announcements! Follow us on social media to
							be the first to know. 🎉
						</p>
					</div>
				) : (
					<>
						<div className="grid justify-center gap-8 md:grid-cols-2 lg:grid-cols-3">
							{speakers.map(speaker => (
								<SpeakerCard {...speaker} key={speaker.name} />
							))}
						</div>

						<div className="mt-12 text-center">
							<p className="text-lg text-white-2">
								More amazing speakers will be announced soon! 🎉
							</p>
						</div>
					</>
				)}
			</Wrapper>
		</section>
	);
};
