import { useSearchParams } from 'react-router-dom';

export const useFilter = (key: string = 'id') => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filteringTheKey = searchParams.get(key);

  const setFilteringTheKey = (value: string | undefined) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());

    if (value) {
      newSearchParams.set(key, value);
    } else {
      newSearchParams.delete(key);
    }
    setSearchParams(newSearchParams);
  };

  return { filteringTheKey, setFilteringTheKey };
};
