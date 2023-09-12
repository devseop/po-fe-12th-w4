import { useState, useEffect } from 'react';
import { IChartDataState } from '../App';
import { fetchData } from '../api/api';
import { convertChartData } from '../utils/convertChartData';
import { getUniqueIds } from '../utils/getUniqueIds';

export const useChartData = () => {
  const [chartData, setchartData] = useState<IChartDataState>({ datasets: [] });
  const [uniqueIds, setUniqueIds] = useState<string[]>([]); //데이터별 id: 성북구, 강남구, 노원구, 중랑구
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // API 호출, res를 이용하여 chartData, uniqueIds 설정
  useEffect(() => {
    const laodData = async () => {
      try {
        setIsLoading(true);
        const res = await fetchData();
        setUniqueIds(getUniqueIds(res));
        setchartData(convertChartData(res) as IChartDataState);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
      }
    };

    laodData();
  }, []);

  return { chartData, uniqueIds, isLoading };
};
