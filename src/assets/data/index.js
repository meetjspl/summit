import agendaData from './agenda.json';
import mainData from './main.json';
import speakersData from './speakers.json';

// convert speakers array to a mapped object for easier lookup
const speakersObject = {};
speakersData.speakers.forEach((speaker) => {
  speakersObject[speaker.id] = speaker;
});

export default {
  ...mainData,
  speakers: speakersObject,
  agenda: agendaData,
};
