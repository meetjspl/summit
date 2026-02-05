import { useEffect, useState } from 'react';

import { OutboundLink } from '@/components/outbound-link.tsx';
import { Wrapper } from '@/components/wrapper.tsx';

interface MeetupEvent {
	id: string;
	name: string;
	city: string;
	date: string;
	time?: string;
	url?: string;
	venue?: string;
	address?: string;
	type?: string;
}

export const MonthlyMeetups = () => {
	const [upcomingMeetups, setUpcomingMeetups] = useState<MeetupEvent[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const parseDateDDMMYYYY = (dateString: string): Date => {
		const [day, month, year] = dateString.split('.');
		return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
	};

	useEffect(() => {
		const fetchMeetups = async () => {
			try {
				const response = await fetch('/2026/meetups.json');

				if (!response.ok) {
					throw new Error('Failed to fetch meetups');
				}

				const data = await response.json();
				const meetupsArray = Object.values(data) as MeetupEvent[];

				const today = new Date();
				today.setHours(0, 0, 0, 0);

				const upcoming = meetupsArray
					.filter(meetup => meetup.type === 'Spotkanie')
					.filter(meetup => {
						const eventDate = parseDateDDMMYYYY(meetup.date);
						eventDate.setHours(0, 0, 0, 0);
						return eventDate >= today;
					})
					.sort(
						(a, b) =>
							parseDateDDMMYYYY(a.date).getTime() -
							parseDateDDMMYYYY(b.date).getTime(),
					)
					.slice(0, 6);

				setUpcomingMeetups(upcoming);
			} catch (err) {
				setError(err instanceof Error ? err.message : 'An error occurred');
			} finally {
				setLoading(false);
			}
		};

		fetchMeetups();
	}, []);

	const formatDate = (dateString: string, timeString?: string) => {
		const date = parseDateDDMMYYYY(dateString);
		const formattedDate = date.toLocaleDateString('pl-PL', {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});
		return timeString ? `${formattedDate}, ${timeString}` : formattedDate;
	};

	const getDaysUntil = (dateString: string): number => {
		const today = new Date();
		today.setHours(0, 0, 0, 0);
		const eventDate = parseDateDDMMYYYY(dateString);
		eventDate.setHours(0, 0, 0, 0);
		const diffTime = eventDate.getTime() - today.getTime();
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
		return diffDays;
	};

	return (
		<section className="bg-black py-16 text-white">
			<Wrapper>
				<div className="mb-12 text-center">
					<h2 className="mb-4 text-4xl leading-[140%] font-semibold tracking-tight text-meetjs-green md:text-[40px]">
						Monthly Meetups
					</h2>
					<p className="text-base text-aidevs-white/80 md:text-lg">
						Join us at our regular monthly JavaScript meetups across Poland
					</p>
				</div>

				{loading && (
					<div className="text-center">
						<p className="text-white/60">Loading meetups...</p>
					</div>
				)}

				{error && (
					<div className="text-center">
						<p className="text-red-400">Error loading meetups: {error}</p>
					</div>
				)}

				{!loading && !error && upcomingMeetups.length === 0 && (
					<div className="text-center">
						<p className="text-white/60">No upcoming meetups scheduled yet.</p>
					</div>
				)}

				{!loading && !error && upcomingMeetups.length > 0 && (
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{upcomingMeetups.map(meetup => (
							<div
								key={meetup.id}
								className="group flex flex-col overflow-hidden rounded-2xl border-2 border-white/10 bg-black transition-all hover:scale-105 hover:border-meetjs-green hover:shadow-xl hover:shadow-meetjs-green/20"
							>
								<div className="flex flex-col gap-4 p-6">
									<div className="flex items-center justify-between gap-2">
										<span className="inline-flex items-center gap-2 rounded-lg bg-meetjs-green/10 px-3 py-1.5 text-sm font-semibold text-meetjs-green">
											<svg
												className="h-4 w-4"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
												/>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
												/>
											</svg>
											{meetup.city}
										</span>
										{(() => {
											const days = getDaysUntil(meetup.date);
											return (
												<span
													className={`rounded-lg px-3 py-1.5 text-xs font-bold ${
														days === 0
															? 'bg-meetjs-green text-black'
															: days <= 7
																? 'bg-meetjs-blue/20 text-meetjs-blue'
																: 'bg-white/10 text-white/70'
													}`}
												>
													{days === 0
														? 'TODAY'
														: days === 1
															? 'TOMORROW'
															: `${days} DAYS`}
												</span>
											);
										})()}
									</div>
									<h3 className="text-xl font-bold text-white">
										{meetup.name}
									</h3>
									<div className="flex items-center gap-2 text-sm text-white/70">
										<svg
											className="h-4 w-4 text-meetjs-blue"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
											/>
										</svg>
										{formatDate(meetup.date, meetup.time)}
									</div>
									{meetup.address && (
										<div className="flex items-start gap-2 text-sm text-white/70">
											<svg
												className="mt-0.5 h-4 w-4 shrink-0 text-meetjs-blue"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
												/>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
												/>
											</svg>
											{meetup.address}
										</div>
									)}
									{meetup.venue && (
										<div className="flex items-start gap-2 text-sm text-white/70">
											<svg
												className="mt-0.5 h-4 w-4 shrink-0 text-meetjs-blue"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
												/>
											</svg>
											{meetup.venue}
										</div>
									)}
									{meetup.url && (
										<OutboundLink
											href={meetup.url}
											className="mt-2 block rounded-lg bg-meetjs-green py-3 text-center font-semibold text-black transition-all hover:bg-meetjs-green/90 hover:shadow-lg hover:shadow-meetjs-green/20"
										>
											Learn More
										</OutboundLink>
									)}
								</div>
							</div>
						))}
					</div>
				)}

				<div className="mt-12 text-center">
					<p className="text-sm text-white/70 md:text-base">
						Want to organize a meetup in your city?{' '}
						<OutboundLink
							href="https://meetjs.pl"
							className="font-semibold text-meetjs-green underline transition-colors hover:text-meetjs-green/80"
						>
							Get in touch
						</OutboundLink>
					</p>
				</div>
			</Wrapper>
		</section>
	);
};
