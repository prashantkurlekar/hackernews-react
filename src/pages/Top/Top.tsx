import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_VERSION, BASE_URL } from '../../core/api/endpoints';
import { Item } from '../../core/models/Item';

const Top = () => {
  const [items, setItems] = useState([]);
  const type = 'news';
  const page = 1;

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `${BASE_URL}/${API_VERSION}/${type}/${page}.json`;
      const response = await axios.get(endpoint);

      setItems(response.data);
    };
    fetchData();
  }, []);

  return (
    <>
      {items &&
        items.map((item: Item) => {
          return (
            <div title="item" key={item.id}>
              <span>{item.title}</span>
            </div>
          );
        })}
    </>
  );
};

export default Top;
