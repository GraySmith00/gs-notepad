import { mockNotes } from '../mockData';

export const getNotes = jest.fn().mockImplementation(() => {
  return Promise.resolve(mockNotes);
});

export const postNote = jest.fn().mockImplementation(() => {
  return Promise.resolve(mockNotes[0]);
});
