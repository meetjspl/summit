import monitorImage from '/src/assets/monitor.png';

export const Monitor = () => {
	return (
		<img
			src={monitorImage}
			alt=""
			className="relative z-30 w-full md:absolute md:-top-32 md:right-12 md:h-auto md:w-auto"
		/>
	);
};
