import axios from 'axios';
import { useEffect, useState } from 'react';
import ItemComponent from '../../components/ItemComponent';
import { API_VERSION, BASE_URL } from '../../core/api/endpoints';
import { Item } from '../../core/models/Item';

const maxPages = 10;

const Top = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const type = 'news';

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `${BASE_URL}/${API_VERSION}/${type}/${page}.json`;
      const response = await axios.get(endpoint);

      setItems(response.data);
    };
    fetchData();
  }, [page]);

  const prevPage = () => (page > 1 ? setPage(page - 1) : 1);

  const nextPage = () => (page < maxPages ? setPage(page + 1) : maxPages);

  return (
    <div className="items-container">
      {items && items.map((item: Item) => <ItemComponent item={item} key={item.id} />)}
      <div className="pagination">
        <button onClick={prevPage} disabled={page === 1}>
          Previous
        </button>
        <span>
          {page}/{maxPages}
        </span>
        <button onClick={nextPage} disabled={page === maxPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Top;
