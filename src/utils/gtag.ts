export const GA_TRACKING_ID = 'G-QLKEEWW472';

declare global {
	interface Window {
		gtag: (
			command: 'config' | 'event' | 'js',
			targetId: string,
			config?: Record<string, unknown>,
		) => void;
		fbq: (...args: unknown[]) => void;
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

// Scroll depth tracking
export const trackScrollDepth = (percentage: number) => {
	event({
		action: 'scroll_depth',
		category: 'engagement',
		label: `${percentage}%`,
		value: percentage,
	});
};

// Navigation click tracking
export const trackNavigation = (sectionName: string) => {
	event({
		action: 'navigation_click',
		category: 'navigation',
		label: sectionName,
	});
};

// Outbound link tracking
export const trackOutboundLink = (url: string, label?: string) => {
	event({
		action: 'click',
		category: 'outbound_link',
		label: label || url,
		outbound_url: url,
	});
};

// View item event (for tickets)
export const trackViewItem = ({
	itemName,
	price,
	currency = 'PLN',
}: {
	itemName: string;
	price: number;
	currency?: string;
}) => {
	event({
		action: 'view_item',
		category: 'ecommerce',
		label: itemName,
		value: price,
		currency: currency,
		items: [
			{
				item_name: itemName,
				price: price,
				currency: currency,
			},
		],
	});
};

// Form interaction tracking
export const trackFormStart = (formName: string) => {
	event({
		action: 'form_start',
		category: 'form',
		label: formName,
	});
};

export const trackFormSubmit = (formName: string) => {
	event({
		action: 'form_submit',
		category: 'form',
		label: formName,
	});
};

export const trackFormAbandon = (formName: string, fieldName?: string) => {
	event({
		action: 'form_abandon',
		category: 'form',
		label: formName,
		field_name: fieldName,
	});
};

// Time on page tracking
export const trackTimeOnPage = (seconds: number) => {
	event({
		action: 'time_on_page',
		category: 'engagement',
		label: `${seconds}s`,
		value: seconds,
	});
};

// Error tracking
export const trackError = (errorMessage: string, errorType?: string) => {
	event({
		action: 'error',
		category: 'technical',
		label: errorMessage,
		error_type: errorType || 'unknown',
	});
};

// Social share tracking
export const trackSocialShare = (platform: string, url?: string) => {
	event({
		action: 'share',
		category: 'social',
		label: platform,
		share_url: url || window.location.href,
	});
};

// Meta Pixel Purchase event
export const trackMetaPurchase = ({
	value,
	currency = 'PLN',
	contentName,
}: {
	value: number;
	currency?: string;
	contentName?: string;
}) => {
	if (typeof window !== 'undefined' && window.fbq) {
		window.fbq('track', 'Purchase', {
			value: value,
			currency: currency,
			content_name: contentName,
		});
	}
};

// Section view tracking
export const trackSectionView = (sectionName: string) => {
	event({
		action: 'section_view',
		category: 'engagement',
		label: sectionName,
	});
};
