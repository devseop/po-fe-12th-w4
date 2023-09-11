import { useState, useEffect } from 'react';
import { IChartDataState } from '../App';
import { fetchData } from '../api/api';
import { convertChartData } from '../utls/convertChartData';
import { getUniqueIds } from '../utls/getUniqueIds';

export const useChartData = () => {
  const [chartData, setchartData] = useState<IChartDataState>({ datasets: [] });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [uniqueIds, setUniqueIds] = useState<string[]>([]);

  useEffect(() => {
    const laodData = async () => {
      try {
        setIsLoading(true);
        const res = await fetchData();
        setchartData(convertChartData(res) as IChartDataState);
        setUniqueIds(getUniqueIds(res));
        setIsLoading(false);
      } catch (err) {
        console.error(err);
      }
    };

    laodData();
  }, []);

  return { chartData, isLoading, uniqueIds };
};
