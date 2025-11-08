import { useMemo } from 'react';

export const usePagination = (pagesConut) => {
  const result = useMemo(() => {
    const arr = [];
    for (let i = 0; i < pagesConut; i++) {
      arr.push(i + 1);
    }
    console.log('pages update');
    console.log(arr);
    return arr;
  }, [pagesConut]);

  return result;
};
