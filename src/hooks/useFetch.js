import { useState } from 'react';

const useFetch = (callback) => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetching = async () => {
    try {
      setLoading(true);
      await callback();
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return [fetching, isLoading, error];
};

export default useFetch;
