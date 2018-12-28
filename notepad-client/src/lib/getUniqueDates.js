import { formatDate } from './formatDate';

export const getUniqueDates = notes => {
  const dates = notes.reduce((dates, note) => {
    const formattedDate = formatDate(note.createdAt);

    if (!dates[formattedDate]) {
      dates[formattedDate] = 1;
    }

    return dates;
  }, {});

  return Object.keys(dates);
};
