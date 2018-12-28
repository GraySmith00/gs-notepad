export const postNote = async note => {
  const url = process.env.REACT_APP_POST_NOTE;
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(note),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.status > 299) {
    const error = await response.json();
    throw new Error(error.message);
  }

  const data = await response.json();
  return data;
};

export const getNotes = async () => {
  const url = process.env.REACT_APP_GET_NOTES;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
