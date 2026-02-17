import CarolaK from '@/assets/speakers/carola-keskula.jpeg';
import DominikaZajac from '@/assets/speakers/dominika-zajac.jpg';
import MateuszChrobok from '@/assets/speakers/mateusz-chrobok.png';
import MichalMichalczuk from '@/assets/speakers/michal-michalczuk.webp';
import SzymonChmal from '@/assets/speakers/szymon-chmal.png';
import TomaszGil from '@/assets/speakers/tomasz-gil.jpeg';

export const AGENDA_CONF = [
	{
		id: '67a54ea8-40f1-4ed0-ada2-3c985b75b901',
		title: 'Registration',
		description:
			'Registration starts at 8:00 AM and ends at 9:30 AM on the first day of the summit. Please arrive on time to avoid missing the start of the event.',
		since: '2026-03-04T08:00:00',
		till: '2026-03-04T09:30:00',
		image:
			'https://summit.meetjs.pl/2026/assets/meetjs-organizers-XM_zsAH4.webp',
		channelUuid: 'summit-03-04-2026-stage',
		linkedinUrl: '',
		githubUrl: '',
	},
	{
		id: '2eeeeed5-21ad-4039-8afd-4a3fc0be9f45',
		title: 'Intro',
		speaker: 'Zbigniew Tenerowicz',
		description:
			'The intro session is a brief overview of the summit agenda and the schedule. It is a great opportunity to meet the speakers and the organizers.',
		since: '2026-03-04T09:30:00',
		till: '2026-03-04T10:00:00',
		image:
			'https://summit.meetjs.pl/2026/assets/zbyszek-tenerowicz-C_pqvgoT.jpg',
		channelUuid: 'summit-03-04-2026-stage',
		linkedinUrl: 'https://www.linkedin.com/in/zbigniew-tenerowicz-288175165/',
		githubUrl: 'https://www.linkedin.com/company/meetjs/',
	},
	{
		id: 'cb166ed0-837e-4661-aee1-9904bec33dae',
		title: 'Engineer → Product Engineer → Product Builder Why? Why now? How?',
		speaker: 'Piotr Kacała',
		description: '',
		since: '2026-03-04T10:00:00',
		till: '2026-03-04T10:30:00',
		image: '',

		channelUuid: 'summit-03-04-2026-stage',
		linkedinUrl: 'https://www.linkedin.com/company/meetjs/',
		githubUrl: 'https://www.linkedin.com/company/meetjs/',
	},
	{
		id: 'be41a45d-18a8-4245-98bb-fc3472850d33',
		title: 'Don’t Rush It, Refactor It: Building Better Front-Ends with AI',
		speaker: 'Carola Kesküla',
		description:
			'If you’ve ever juggled multiple front-end projects while still deeply caring about clean styles, accessible UIs and fast load times… hi, you’re in good company!\n' +
			'Quality is a non-negotiable. Deadlines are often tight. I’ll be sharing how AI has supported my workflow. Not by letting it do all the work, but by accelerating and verifying parts that can get squeezed under pressure. From tidying up CSS to spotting accessibility issues and optimising performance, we’ll explore how to move fast without cutting corners.\n' +
			'Whether you’re working on smaller features or scaling big systems, you’ll leave with ideas to adapt to your own pace and context. Also... hopefully with a little inspiration to keep pushing for quality, even when everything’s moving fast.',
		since: '2026-03-04T10:30:00',
		till: '2026-03-04T11:00:00',
		image: CarolaK,
		channelUuid: 'summit-03-04-2026-stage',
		linkedinUrl: 'https://www.linkedin.com/company/meetjs/',
	},
	{
		id: 'b5d01eed-9f84-4b9b-8a13-8052e7811d1a',
		title: 'JSX to Live Activity: The Story of Voltra',
		speaker: 'Szymon Chmal',
		description:
			"What if you could ship native iOS Live Activities and Dynamic Island experiences without writing a single line of Swift? This talk tells the story of Voltra, a library born from a viral tweet and a collaboration between Saul Sharma and Callstack to bridge the gap between React and native iOS extensions. We'll go behind the scenes of building a custom React renderer from scratch to translate JSX into SwiftUI primitives, bypassing the traditional \"Swift wall.\" You will learn how we tackled the extreme technical constraints of the platform: from the tiny 4KB data limit to server-side driven UI that doesn't require a pre-shipped implementation. Join us for a deep dive into Voltra's architecture and learn how you can start shipping React to a brand-new platform today.",
		since: '2026-03-04T11:20:00',
		till: '2026-03-04T11:50:00',
		image: SzymonChmal,
		channelUuid: 'summit-03-04-2026-stage',
		linkedinUrl: 'https://www.linkedin.com/company/meetjs/',
	},
	{
		id: 'b5d01eed-9f84-4b9b-8a13-8052e7811d1v',
		title: 'Shipping Offline Support on the Web',
		speaker: 'Tomasz Gil',
		description:
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
		since: '2026-03-04T11:50:00',
		till: '2026-03-04T12:20:00',
		image: TomaszGil,
		channelUuid: 'summit-03-04-2026-stage',
		linkedinUrl: 'https://www.linkedin.com/company/meetjs/',
		githubUrl: 'https://www.linkedin.com/company/meetjs/',
	},
	{
		id: 'b5d01eed-9f84-4b9b-8a13-8052e7811d11',
		title:
			'Your AI Agent is just a while loop with an API call. Let me prove it.',
		speaker: 'Michał Michalczuk',
		description:
			'AI agents are everywhere right now. Every week, there’s a new framework promising to make agents “easy” — Vercel AI SDK, LangChain, Claude SDK, Google ADK, you name it. And you can start playing with them in ~20 lines of code. What a time to be alive!\n' +
			'\n' +
			'But what actually happens when an agent “thinks”? \n' +
			'What is behind that magical `generateText()` call? \n' +
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
		since: '2026-03-04T12:20:00',
		till: '2026-03-04T12:50:00',
		image: MichalMichalczuk,
		channelUuid: 'summit-03-04-2026-stage',
		linkedinUrl: 'https://www.linkedin.com/company/meetjs/',
		githubUrl: 'https://www.linkedin.com/company/meetjs/',
	},
	{
		id: 'b5d01eed-9f84-4b9b-8a13-8052e7811d1b',
		title: 'The end of the "Hand-crafted UI" era? Case study.',
		speaker: 'Radek Wojtysiak',
		description:
			'Skeptical about AI-generated websites? Until recently, so was I—having spent over a decade building front-end components by hand. But I recently conducted an experiment: I created the "Developer\'s Christmas Career Calendar" landing page entirely using an AI agent. The results are incredible, and I’d love to share the exact details of this project with you.',
		since: '2026-03-04T13:10:00',
		till: '2026-03-04T13:40:00',
		image: '',
		channelUuid: 'summit-03-04-2026-stage',
		linkedinUrl: 'https://www.linkedin.com/company/meetjs/',
		githubUrl: 'https://www.linkedin.com/company/meetjs/',
	},
	{
		id: 'b5d01eed-9f84-4b9b-8a13-8052e7811d1c',
		title: 'lightning talk 1',
		showDescription: false,
		description:
			"Stand-alone eco-centric conglomeration. generating the bus won't do anything, we need to compress the 1080p HDD microchip!.Stabilis demens capto anser verecundia victus repellendus quam supplanto ex. Trucido sum nesciunt decet sonitus valens quibusdam. Spiculum aeneus quidem demonstro.",
		since: '2026-03-04T13:40:00',
		till: '2026-03-04T13:50:00',
		image: '',
		channelUuid: 'summit-03-04-2026-stage',
		linkedinUrl: 'https://www.linkedin.com/company/meetjs/',
		githubUrl: 'https://www.linkedin.com/company/meetjs/',
	},
	{
		id: 'b5d01eed-9f84-4b9b-8a13-8052e7811d1d',
		title: 'lightning talk 2',
		showDescription: false,
		description:
			"Stand-alone eco-centric conglomeration. generating the bus won't do anything, we need to compress the 1080p HDD microchip!.Stabilis demens capto anser verecundia victus repellendus quam supplanto ex. Trucido sum nesciunt decet sonitus valens quibusdam. Spiculum aeneus quidem demonstro.",
		since: '2026-03-04T13:50:00',
		till: '2026-03-04T14:00:00',
		image: '',
		channelUuid: 'summit-03-04-2026-stage',
		linkedinUrl: 'https://www.linkedin.com/company/meetjs/',
		githubUrl: 'https://www.linkedin.com/company/meetjs/',
	},
	{
		id: 'b5d01eed-9f84-4b9b-8a13-8052e7811d1e',
		title: 'lightning talk 3',
		showDescription: false,
		description:
			"Stand-alone eco-centric conglomeration. generating the bus won't do anything, we need to compress the 1080p HDD microchip!.Stabilis demens capto anser verecundia victus repellendus quam supplanto ex. Trucido sum nesciunt decet sonitus valens quibusdam. Spiculum aeneus quidem demonstro.",
		since: '2026-03-04T14:00:00',
		till: '2026-03-04T14:10:00',
		image: '',
		channelUuid: 'summit-03-04-2026-stage',
		linkedinUrl: 'https://www.linkedin.com/company/meetjs/',
		githubUrl: 'https://www.linkedin.com/company/meetjs/',
	},
	{
		id: 'b5d01eed-9f84-4b9b-8a13-8052e7811d1q',
		title: 'Did AI really make us faster?',
		speaker: 'Przemysław Suchodolski',
		description:
			'Everyone says AI makes developers more productive. Someone even claims that we can become 10x devs ;) So we decided to prove it.\n' +
			'\n' +
			'At Apollo.io, we introduced AI tooling to 250+ engineers and quickly realized that measuring "productivity" is harder than shipping the tools themselves. Metrics lied. Assumptions broke. Some teams sped up (spoiler alert: frontend-oriented :)), others didn’t. And the biggest insights weren’t where we expected them.\n' +
			'\n' +
			'This talk is the story of that experiment:\n' +
			'\n' +
			'- Why our first productivity metrics failed\n' +
			'- What actually changed in developers’ daily work\n' +
			'- Where AI helped less than the hype suggested\n' +
			'- How we eventually learned to measure impact without fooling ourselves\n' +
			'\n' +
			'This isn’t a success story or an AI sales pitch. It’s a behind-the-scenes look at a real engineering organization trying to answer a deceptively simple question: Did AI really make us faster?',
		since: '2026-03-04T14:40:00',
		till: '2026-03-04T15:10:00',
		image: '',
		channelUuid: 'summit-03-04-2026-stage',
		linkedinUrl: 'https://www.linkedin.com/company/meetjs/',
		githubUrl: 'https://www.linkedin.com/company/meetjs/',
	},
	{
		id: 'b5d01eed-9f84-4b9b-8a13-8052e7811d1l',
		title: 'AI in non-perfect (brownfield/legacy) world',
		speaker: 'Dominika Zając',
		description:
			'Many AI-related talks focus on new features and brand-new repositories. Adding a new feature or creating a new webpage is no longer a real technical challenge in 2026. But that’s not what our day-to-day work usually looks like.\n' +
			'\n' +
			'In reality, we work in brownfield and legacy codebases—imperfectly structured, with a bit of spaghetti sadly hiding between the lines.\n' +
			'\n' +
			'In this talk, I share lessons from experimenting with AI in a non-perfect world: using it to handle the work I hate—managing dependency upgrades, migrating deprecated libraries and frameworks, adding missing tests, debugging issues, removing stale feature flags, and more.\n' +
			'\n' +
			'Were all experiments successful? Of course not. But you can learn from what worked, what failed, and why. Join me on a journey where AI takes over the boring but necessary tasks—so we can focus on what programmers love most: solving problems, delivering value, and building solid architecture.\n' +
			'\n' +
			'Let AI take our jobs… just the parts we don’t like',
		since: '2026-03-04T15:10:00',
		till: '2026-03-04T15:40:00',
		image: DominikaZajac,
		channelUuid: 'summit-03-04-2026-stage',
		linkedinUrl: 'https://www.linkedin.com/company/meetjs/',
		githubUrl: 'https://www.linkedin.com/company/meetjs/',
	},
	{
		id: 'b5d01eed-9f84-4b9b-8a13-8052e7811d1f',
		title: 'When AI does whatever it wants. AI alignment.',
		speaker: 'Mateusz Chrobok',
		description:
			"Stand-alone eco-centric conglomeration. generating the bus won't do anything, we need to compress the 1080p HDD microchip!.Stabilis demens capto anser verecundia victus repellendus quam supplanto ex. Trucido sum nesciunt decet sonitus valens quibusdam. Spiculum aeneus quidem demonstro.",
		since: '2026-03-04T15:40:00',
		till: '2026-03-04T16:10:00',
		image: MateuszChrobok,
		channelUuid: 'summit-03-04-2026-stage',
		linkedinUrl: 'https://www.linkedin.com/company/meetjs/',
		githubUrl: 'https://www.linkedin.com/company/meetjs/',
	},
	{
		id: 'b5d01eed-9f84-4b9b-8a13-8052e7811d2f',
		title: 'Panel discussion',
		description:
			'A panel discussion with experts on AI ranging from academics to hackers, about the future of programming and agents.',
		since: '2026-03-04T16:30:00',
		till: '2026-03-04T17:50:00',
		image:
			'https://summit.meetjs.pl/2026/assets/meetjs-networking-BjUS3EdE.webp',
		channelUuid: 'summit-03-04-2026-stage',
		linkedinUrl: '',
		githubUrl: '',
	},
	{
		id: 'b5d01eed-9f84-4b9b-8a13-8052e7811d3f',
		title: 'Good bye',
		showDescription: false,
		speaker: 'Zbigniew Tenerowicz',
		since: '2026-03-04T17:50:00',
		till: '2026-03-04T18:00:00',
		description:
			'Goodbye session. Thank you for attending the summit. We hope to see you next year.',
		image:
			'https://summit.meetjs.pl/2026/assets/zbyszek-tenerowicz-C_pqvgoT.jpg',
		channelUuid: 'summit-03-04-2026-stage',
		linkedinUrl: 'https://www.linkedin.com/in/zbigniew-tenerowicz-288175165/',
		githubUrl: 'https://www.linkedin.com/company/meetjs/',
	},
];
