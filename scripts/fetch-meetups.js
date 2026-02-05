import { writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const MEETUPS_API_URL = process.env.MEETUPS_API_URL;

if (!MEETUPS_API_URL) {
	console.error('Error: MEETUPS_API_URL environment variable is not set');
	process.exit(1);
}

async function fetchMeetups() {
	try {
		console.log('Fetching meetups data...');
		const response = await fetch(MEETUPS_API_URL);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();

		const outputPath = join(__dirname, '../public/meetups.json');
		writeFileSync(outputPath, JSON.stringify(data, null, 2));

		console.log(`✓ Meetups data saved to ${outputPath}`);
		console.log(`✓ Found ${Object.keys(data).length} events`);
	} catch (error) {
		console.error('Error fetching meetups:', error);
		process.exit(1);
	}
}

fetchMeetups();
