const getDataFromApi = () => {
  const url = 'https://randomuser.me/api/?results=20';
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data.results;
    });
};

export default { getDataFromApi };
