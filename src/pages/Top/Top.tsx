import { useEffect, useState } from 'react';
import ItemComponent from '../../components/ItemComponent';
import Pagination from '../../components/Pagination';
import { useFetch } from '../../core/hooks/useFetch';
import { Item } from '../../core/models/Item';

const maxPages = 10;

const Top = () => {
  const [page, setPage] = useState(1);
  const { items, fetchData } = useFetch('news');

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const prevPage = () => (page > 1 ? setPage(page - 1) : 1);

  const nextPage = () => (page < maxPages ? setPage(page + 1) : maxPages);

  return (
    <div className="items-container">
      {items && items.map((item: Item) => <ItemComponent item={item} key={item.id} />)}
      <Pagination maxPages={maxPages} page={page} prevPage={prevPage} nextPage={nextPage} />
    </div>
  );
};

export default Top;
