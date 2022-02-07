import { BASE_URL, API_VERSION } from './endpoints';

const options = {
  method: 'GET',
  headers: { Accept: 'application/json' },
};

export const getList = async (type = 'news', page = 1) => {
  const endpoint = `${BASE_URL}/${API_VERSION}/${type}/${page}.json`;
  const response = await fetch(endpoint, options);
  const data = await response.json();
  return data;
};

export const getItem = async (id = 0) => {
  const endpoint = `${BASE_URL}/${API_VERSION}/item/${id}.json`;
  const response = await fetch(endpoint, options);
  const data = await response.json();
  return data;
};

export const getUser = async (user = 0) => {
  const endpoint = `${BASE_URL}/${API_VERSION}/user/${user}.json`;
  const response = await fetch(endpoint, options);
  const data = await response.json();
  return data;
};
