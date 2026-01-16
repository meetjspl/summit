import LogoAiDevs from '../assets/ai_devs_logo.svg?react';

export const AIDevs = () => {
	return (
		<section className="relative z-20 -mt-45 flex">
			<div className="flex flex-col justify-center gap-4">
				<LogoAiDevs alt="AI devs 4" />
				<p className="text-5xl font-medium text-white">Edition</p>
			</div>
			<img src="/src/assets/monitor.png" alt="" />
		</section>
	);
};
