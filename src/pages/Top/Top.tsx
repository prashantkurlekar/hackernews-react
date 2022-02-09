import ItemComponent from '../../components/ItemComponent';
import Pagination from '../../components/Pagination';
import { useFetch } from '../../core/hooks/useFetch';
import { Item } from '../../core/models/Item';

const maxPages = 10;

const Top = () => {
  const { items, page, setPage } = useFetch();

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
