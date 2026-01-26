import { useEffect } from 'react';
import * as gtag from '@/utils/gtag';

export const useErrorTracking = () => {
	useEffect(() => {
		const handleError = (event: ErrorEvent) => {
			gtag.trackError(event.message, 'javascript_error');
		};

		const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
			gtag.trackError(
				event.reason?.message || 'Unhandled promise rejection',
				'promise_rejection'
			);
		};

		window.addEventListener('error', handleError);
		window.addEventListener('unhandledrejection', handleUnhandledRejection);

		return () => {
			window.removeEventListener('error', handleError);
			window.removeEventListener('unhandledrejection', handleUnhandledRejection);
		};
	}, []);
};
