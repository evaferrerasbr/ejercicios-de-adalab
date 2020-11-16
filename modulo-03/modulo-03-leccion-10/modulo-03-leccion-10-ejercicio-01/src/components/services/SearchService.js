const url = 'https://randomuser.me/api/?results=50';

const fetchSearch = () => fetch(url).then((response) => response.json());

export { fetchSearch };
