import CarolaK from '@/assets/speakers/carola-keskula.jpeg';
import DominikaZajac from '@/assets/speakers/dominika-zajac.jpg';
import MartinTorp from '@/assets/speakers/martin-torp.jpeg';
import MateuszChrobok from '@/assets/speakers/mateusz-chrobok.png';
import MichalMichalczuk from '@/assets/speakers/michal-michalczuk.webp';
import MichalGolebiowskiOwczarek from '@/assets/speakers/michał-golebiowski-owczarek.jpeg';
import MichalHadrysiak from '@/assets/speakers/michał-hadrysiak.jpg';
import PiotrKacala from '@/assets/speakers/piotr-kacala.png';
import PrzemyslawSuchodolski from '@/assets/speakers/przemek-suchodolski.jpg';
import RadekWojtysiak from '@/assets/speakers/radek-wojtysiak.jpeg';
import SzymonChmal from '@/assets/speakers/szymon-chmal.png';
import TomaszGil from '@/assets/speakers/tomasz-gil.jpeg';
import ZbyszekTenerowicz from '@/assets/speakers/zbyszek-tenerowicz.jpg';

export const AGENDA_CONF = [
	{
		id: '67a54ea8-40f1-4ed0-ada2-3c985b75b901',
		title: 'Registration',
		description:
			'Registration starts at 8:30 AM and ends at 9:30 AM on the first day of the summit. Please arrive on time to avoid missing the start of the event.',
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
			'Welcome to the event, get an introduction to navigating our conference, celebrate our 15th anniversary and learn some history of meet.js.',
		since: '2026-03-04T09:30:00',
		till: '2026-03-04T10:00:00',
		image: ZbyszekTenerowicz,
		channelUuid: 'summit-03-04-2026-stage',
		linkedinUrl: 'https://www.linkedin.com/in/zbigniew-tenerowicz-288175165/',
	},
	{
		id: 'cb166ed0-837e-4661-aee1-9904bec33dae',
		title: 'Engineer → Product Engineer → Product Builder Why? Why now? How?',
		speaker: 'Piotr Kacała',
		description:
			"If you were skeptical about AI hype - you were right. AI won't replace engineers. It won't magically turn bad ideas into good products. You ship code faster, sure, but if you're building the wrong thing, you're just shipping garbage at scale.\n" +
			'But something IS changing. LinkedIn introduced a "Full Stack Builder" title. Linear hit $1.25B with one PM. Market favors engineers who decide WHAT gets built, not just HOW. That\'s the Product Builder: someone who owns the full picture, from user problem to shipped solution.\n' +
			"In this talk, I'll walk you through the evolution: Engineer → Product Engineer → Product Builder. What changes at each stage, which skills to stack, and how AI accelerates the leap without replacing your judgment. A concrete roadmap for engineers ready to stop implementing someone else's ideas - whether you want to own product decisions, go technical founder, or build something of your own.",
		since: '2026-03-04T10:00:00',
		till: '2026-03-04T10:30:00',
		image: PiotrKacala,
		channelUuid: 'summit-03-04-2026-stage',
		linkedinUrl: 'https://www.linkedin.com/in/piotr-kacala/',
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
		linkedinUrl: 'https://www.linkedin.com/in/carolakeskyla/',
	},
	{
		id: 'be41a453-18a8-4245-98bb-fc3472850d33',
		title: '☕ Coffee break',
		speaker: '',
		description:
			'The food area where sandwiches are served is located in Hades on floor -1.',
		since: '2026-03-04T11:00:00',
		till: '2026-03-04T11:20:00',
		image: '',
		channelUuid: 'summit-03-04-2026-stage',
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
		linkedinUrl: 'https://www.linkedin.com/in/szymon-chmal/',
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
		linkedinUrl: 'https://www.linkedin.com/in/tomasz-gil/',
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
		linkedinUrl: 'https://www.linkedin.com/in/michalczukm/',
	},
	{
		id: 'be41a453-18a8-4245-98bb-fc3472850d33',
		title: '☕ Coffee break',
		speaker: '',
		description:
			'The food area where sandwiches are served is located in Hades on floor -1.',
		since: '2026-03-04T12:50:00',
		till: '2026-03-04T13:10:00',
		image: '',
		channelUuid: 'summit-03-04-2026-stage',
	},
	{
		id: 'b5d01eed-9f84-4b9b-8a13-8052e7811d1b',
		title: 'The end of the "Hand-crafted UI" era? Case study.',
		speaker: 'Radek Wojtysiak',
		description:
			'Skeptical about AI-generated websites? Until recently, so was I—having spent over a decade building front-end components by hand. But I recently conducted an experiment: I created the "Developer\'s Christmas Career Calendar" landing page entirely using an AI agent. The results are incredible, and I’d love to share the exact details of this project with you.',
		since: '2026-03-04T13:10:00',
		till: '2026-03-04T13:40:00',
		image: RadekWojtysiak,
		channelUuid: 'summit-03-04-2026-stage',
		linkedinUrl: 'https://www.linkedin.com/in/radekwojtysiak/',
	},
	{
		id: 'b5d01eed-9f84-4b9b-8a13-8052e7811d1c',
		title: '(AuDH)DX - How to cope with attention deficit as developer',
		speaker: 'Michał (Hans) Hadrysiak',
		showDescription: false,
		description:
			"Productivity of neurodivergent people is weird: you have a mix of hyperfocus moments when you are almost unstoppable with executive paralysis moments when you'll avoid even a simple task. I've been in IT for over 10 years. During this time, I was looking for tools and strategies that would help me to reduce the effort of starting things and maximize the chance of finishing them without distraction. This talk will be a summary of my thoughts about Developer Experience from neurodivergent perspective.",
		since: '2026-03-04T13:40:00',
		till: '2026-03-04T13:50:00',
		image: MichalHadrysiak,
		channelUuid: 'summit-03-04-2026-stage',
		linkedinUrl: 'https://www.linkedin.com/in/michal-hadrysiak',
		githubUrl: '',
	},
	{
		id: 'b5d01eed-9f84-4b9b-8a13-8052e7811d1d',
		title: 'From “Write Less” to v4: Why jQuery Still Matters (in 2026)',
		speaker: 'Michał Gołębiowski-Owczarek',
		showDescription: false,
		description:
			"We'll have a look at the 20-year history of jQuery, what was its role in the past and why is it still actively supported & relevant, even getting a new major version in 2026.",
		since: '2026-03-04T13:50:00',
		till: '2026-03-04T14:00:00',
		image: MichalGolebiowskiOwczarek,
		channelUuid: 'summit-03-04-2026-stage',
		linkedinUrl: 'https://www.linkedin.com/in/mzgol/',
		githubUrl: '',
	},
	{
		id: 'b5d01eed-9f84-4b9b-8a13-8052e7811d1e',
		title: 'Using a 30-Year-Old Algorithm to Battle CVE Fatigue',
		speaker: 'Martin Torp',
		showDescription: false,
		description:
			"Are you getting too many warnings about vulnerabilities in dependencies? Many of those are not reachable from your code so they don't matter. In this talk, I'll show how we can tackle this for JavaScript using points-to and control-flow analysis, as implemented in the open-source static analysis tool Jelly.",
		since: '2026-03-04T14:00:00',
		till: '2026-03-04T14:10:00',
		image: MartinTorp,
		channelUuid: 'summit-03-04-2026-stage',
		linkedinUrl: 'https://www.linkedin.com/in/martin-torp/',
		githubUrl: '',
	},
	{
		id: 'be42a453-18a8-4245-98bb-fc3472850d33',
		title: '🍽 Lunch break',
		speaker: '',
		description:
			'Lunch break. The SGH cafeteria is available on site. More info: https://www.sgh.waw.pl/kantyny-i-kuchnie-pracownicze',
		since: '2026-03-04T14:10:00',
		till: '2026-03-04T14:40:00',
		image:
			'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><text y=".9em" font-size="90">🍽</text></svg>',
		channelUuid: 'summit-03-04-2026-stage',
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
		image: PrzemyslawSuchodolski,
		channelUuid: 'summit-03-04-2026-stage',
		linkedinUrl: 'https://www.linkedin.com/in/przemyslaw-suchodolski/',
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
		linkedinUrl: 'https://www.linkedin.com/in/dominikazajac/',
	},
	{
		id: 'b5d01eed-9f84-4b9b-8a13-8052e7811d1f',
		title: 'When AI does whatever it wants. AI alignment.',
		speaker: 'Mateusz Chrobok',
		description: '',
		since: '2026-03-04T15:40:00',
		till: '2026-03-04T16:10:00',
		image: MateuszChrobok,
		channelUuid: 'summit-03-04-2026-stage',
		linkedinUrl: 'https://www.linkedin.com/in/mateuszchrobok/',
	},
	{
		id: 'be41a453-18a8-4245-98bb-fc3472850d33',
		title: '☕ Coffee break',
		speaker: '',
		description:
			'The food area where sandwiches are served is located in Hades on floor -1.',
		since: '2026-03-04T16:10:00',
		till: '2026-03-04T16:30:00',
		image: '',
		channelUuid: 'summit-03-04-2026-stage',
	},
	{
		id: 'b5d01eed-9f84-4b9b-8a13-8052e7811d2f',
		title: 'Panel discussion',
		description:
			'A panel discussion with experts on AI ranging from academics to hackers, about the future of programming and agents and the human in the loop.\n\n Panelists:\n🎤 Bartosz Pampuch\n🎤 Mateusz Chrobok\n🎤 Marcin Czarkowski\n🎤 dr Mariusz Rafało\n🎤 prof Jerzy Surma\n\n Host:\n Zbigniew Tenerowicz',
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
		image: ZbyszekTenerowicz,
		channelUuid: 'summit-03-04-2026-stage',
		linkedinUrl: 'https://www.linkedin.com/in/zbigniew-tenerowicz-288175165/',
	},
];
