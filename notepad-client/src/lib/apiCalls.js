export const postNote = async note => {
  const url = process.env.REACT_APP_POST_NOTE;
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(note),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  return data;
};

export const getNotes = async () => {
  const url = process.env.REACT_APP_GET_NOTES;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
