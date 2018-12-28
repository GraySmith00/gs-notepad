import { getNotes, postNote } from '../apiCalls';
import { mockNotes } from '../mockData';

describe('apiCalls', () => {
  describe('getNotes', () => {
    it('return a list of notes', async () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(mockNotes)
        })
      );

      const result = await getNotes();
      expect(result).toEqual(mockNotes);
    });
  });

  describe('postNote', () => {
    it('should post a note and return its body', async () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(mockNotes[0])
        })
      );

      const result = await postNote({ text: 'buy groceries', tag: 'hobby' });
      expect(result.text).toEqual('buy groceries');
    });
  });
});
