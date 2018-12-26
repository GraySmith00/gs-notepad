export const postNote = async note => {
  const url = `https://w1vzjix7vk.execute-api.us-east-1.amazonaws.com/dev/notes`;
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
