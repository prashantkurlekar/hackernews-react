import axios from 'axios';
import { useEffect, useState } from 'react';
import { BASE_URL, API_VERSION } from '../api/endpoints';

const externalFetch = async (type: string, page: number) => {
  const endpoint = `${BASE_URL}/${API_VERSION}/${type}/${page}.json`;
  const response = await axios.get(endpoint);
  return response.data;
};

export const useFetch = () => {
  const [error, setError] = useState<any>(null);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setError(null);
      try {
        const data = await externalFetch('news', page);
        setItems(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [page]);

  return { items, error, page, setPage };
};
