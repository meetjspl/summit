import LogoAiDevs from '../assets/ai_devs_logo.svg?react';


export const AIDevs = () => {
	return (
		<section className="relative z-10 mt-2 flex flex-col items-center gap-8 md:mt-0 md:block">
			<div className="flex flex-col items-center justify-center gap-2 text-center md:items-start md:text-left">
				<LogoAiDevs className="h-10 w-auto md:h-12" />
				<p className="text-3xl font-medium text-white md:text-4xl">Edition</p>
			</div>
		</section>
	);
};
