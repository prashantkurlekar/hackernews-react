import axios from 'axios';
import { useEffect, useState } from 'react';
import ItemComponent from '../../components/ItemComponent';
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
    <div className="items-container">
      {items && items.map((item: Item) => <ItemComponent item={item} key={item.id} />)}
    </div>
  );
};

export default Top;
