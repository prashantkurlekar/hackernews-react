import axios from 'axios';
import { useEffect, useState } from 'react';
import { BASE_URL, API_VERSION } from '../api/endpoints';

export const useFetch = (type: string) => {
  const [items, setItems] = useState([]);

  const fetchData = async (page: number) => {
    const endpoint = `${BASE_URL}/${API_VERSION}/${type}/${page}.json`;
    const response = await axios.get(endpoint);

    setItems(response.data);
  };

  useEffect(() => {
    fetchData(1);
  }, []);

  return { items, fetchData };
};
