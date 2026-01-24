export const GA_TRACKING_ID = 'G-QLKEEWW472';

declare global {
	interface Window {
		gtag: (
			command: 'config' | 'event' | 'js',
			targetId: string,
			config?: Record<string, unknown>
		) => void;
	}
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
	if (typeof window !== 'undefined' && window.gtag) {
		window.gtag('config', GA_TRACKING_ID, {
			page_path: url,
		});
	}
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
	action,
	category,
	label,
	value,
	...rest
}: {
	action: string;
	category?: string;
	label?: string;
	value?: number;
	[key: string]: unknown;
}) => {
	if (typeof window !== 'undefined' && window.gtag) {
		window.gtag('event', action, {
			event_category: category,
			event_label: label,
			value: value,
			...rest,
		});
	}
};
