import AppButton from '../button/AppButton';
import { usePagination } from '../../../hooks/usePagination';

const Pagination = ({ totalPages, page, setPage }) => {
  const pagesArray = usePagination(totalPages);
  return (
    <div>
      {pagesArray.map((p) => (
        <AppButton key={p} onClick={() => setPage(p)}>
          {p === page ? <strong>{p}</strong> : p}
        </AppButton>
      ))}
    </div>
  );
};

export default Pagination;
