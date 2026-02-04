import monitorImage from '/src/assets/monitor.png';
import oldMonitorImage from '/src/assets/old-monitor-mobile.png';

export const Monitor = () => {
	return (
		<>
			<img
				src={oldMonitorImage}
				alt=""
				className="relative z-30 w-full md:hidden"
			/>
			<img
				src={monitorImage}
				alt=""
				className="relative z-30 hidden w-full md:absolute md:-top-24 md:right-12 md:block md:h-auto md:w-auto md:animate-float"
			/>
		</>
	);
};
