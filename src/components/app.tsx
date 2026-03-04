import { useState } from 'react';
import { FaCheck, FaRegCopy, FaWifi } from 'react-icons/fa6';

import AiDevs from '@/assets/ai_devs_logo.svg';
import hakersiLogo from '@/assets/hakersi-logo.png';
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
				<div
					style={{
						position: 'relative',
						width: '100%',
						height: '80px',
						overflow: 'hidden',
					}}
				>
					<iframe
						style={{
							position: 'absolute',
							top: 0,
							left: 0,
							bottom: 0,
							right: 0,
							width: '100%',
							height: '100%',
						}}
						src="https://zrzutka.pl/award/fufsjw/widget/button"
						frameBorder="0"
						scrolling="no"
					></iframe>
				</div>
				<div className="mb-8 flex items-center justify-center gap-4 p-4 text-white">
					<p>powered by:</p>
					<img src={hakersiLogo} alt="Ai_Devs 4" className="w-1/8" />
				</div>
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
