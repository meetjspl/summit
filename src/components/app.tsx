import { useState } from 'react';
import { FaCheck, FaRegCopy, FaWifi } from 'react-icons/fa6';

import AiDevs from '@/assets/ai_devs_logo.svg';
import hakersiLogo from '@/assets/hakersi-logo.png';
import licytacja from '@/assets/licytacka.jpg';
import Mission from '@/assets/mission.png';
import Slido from '@/assets/partners/slido.svg';
import { Agenda } from '@/components/agenda.tsx';
import { Wrapper } from '@/components/wrapper.tsx';

export const App = () => {
	const [copied, setCopied] = useState(false);
	const wifiPassword = 'TypesenseSearch';

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(wifiPassword);
			setCopied(true);

			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error('Błąd kopiowania:', err);
		}
	};

	return (
		<section>
			<Wrapper>
				<p className="block w-full rounded-lg border-2 border-meetjs-green p-4 text-meetjs-green">
					<span className="flex items-center justify-center gap-4 text-3xl">
						<FaWifi /> connect to WiFi <br />
					</span>
					WiFi: Summit2026
					<br />
					Password: {wifiPassword}
					<button onClick={handleCopy} className="ml-2">
						{copied ? <FaCheck /> : <FaRegCopy />}
					</button>
				</p>
				<div className="flex items-center justify-center gap-4 p-4 text-white">
					<p>sponsored by:</p>
					<img
						src="https://typesense.org/typesense-logo-dark.svg"
						alt="TypeSense"
						className="w-1/2"
					/>
				</div>
				<div className="mx-8" />
				<article className="mt-8 w-full rounded-xl border-2 border-meetjs-green/20 bg-gradient-to-br from-meetjs-green/5 to-transparent p-6 shadow-lg transition-all hover:border-meetjs-green/40">
					<div className="flex flex-col items-center gap-6">
						<img
							src={licytacja}
							alt="Charytatywna licytacja - wspieraj rozwój technologiczny dzieci"
							className="w-full max-w-xs rounded-lg shadow-md transition-transform hover:scale-105 sm:max-w-sm"
						/>

						<div className="text-center">
							<h2 className="mb-3 text-xl font-semibold text-white sm:text-2xl">
								Charytatywna Licytacja
							</h2>
							<p className="max-w-2xl text-base text-gray-200 sm:text-lg">
								Przejdź do charytatywnej licytacji i wspieraj technologiczny
								rozwój dzieci wykluczonych cyfrowo
							</p>
						</div>

						<div className="relative h-20 w-full max-w-md overflow-hidden rounded-lg">
							<iframe
								className="absolute inset-0 h-full w-full"
								src="https://zrzutka.pl/award/fufsjw/widget/button"
								frameBorder="0"
								scrolling="no"
								title="Widget licytacji charytatywnej"
								loading="lazy"
							/>
						</div>

						<div className="flex items-center gap-3 text-sm text-gray-300">
							<span>powered by:</span>
							<img
								src={hakersiLogo}
								alt="Hakersi - organizator licytacji"
								className="h-8 w-auto object-contain"
							/>
						</div>
					</div>
				</article>
				<img src={Mission} alt="mission" className="mt-8 rounded-lg" />
				<a
					href="https://ag3nts.org/meetjs/"
					className="block w-full rounded-lg bg-aidevs-green p-4 text-center"
				>
					join to special Agent V mission
				</a>
				<div className="mb-8 flex items-center justify-center gap-4 p-4 text-white">
					<p>powered by:</p>
					<img src={AiDevs} alt="Ai_Devs 4" className="w-1/4" />
				</div>
				<a
					href="https://app.sli.do/event/auUgyrPJBYWmAwWtjLPD9e"
					className="mt-8 block w-full rounded-lg bg-meetjs-green p-4 text-center"
				>
					click to join to Q&A
				</a>
				<div className="mb-8 flex items-center justify-center gap-4 p-4 text-white">
					<p>powered by:</p>
					<img src={Slido} alt="Slido" className="w-1/4" />
				</div>
				<Agenda />
				<iframe
					// href="https://www.mappedin.com/"
					title="Mappedin Map"
					name="Mappedin Map"
					allow="clipboard-write 'self' https://app.mappedin.com; web-share 'self' https://app.mappedin.com"
					scrolling="no"
					width="100%"
					height="650"
					frameBorder="0"
					// style="border:0"
					src="https://app.mappedin.com/map/6968dd107716b3000b9cb84e?embedded=true"
				></iframe>
			</Wrapper>
		</section>
	);
};
