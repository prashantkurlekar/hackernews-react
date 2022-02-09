type Props = {
  page: number;
  maxPages: number;

  prevPage: () => void;
  nextPage: () => void;
};

const Pagination: React.FC<Props> = ({ page, maxPages, prevPage, nextPage }) => {
  return (
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
  );
};

export default Pagination;
