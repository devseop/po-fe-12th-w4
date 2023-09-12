import { useState, useEffect, useRef, useCallback } from 'react';
import { Chart as ChartJS, InteractionItem } from 'chart.js';

import { fetchData } from '../api/api';
import { useFilter } from './useFilter';
import { convertChartData } from '../utils/convertChartData';
import { filteredChartStyle } from '../utils/filteredChartStyle';
import { getUniqueIds } from '../utils/getUniqueIds';

import { IChartDataState } from '../App';
import { getElementsAtEvent } from 'react-chartjs-2';

export const useData = () => {
  const { filteringTheKey, setFilteringTheKey } = useFilter();

  const [chartData, setchartData] = useState<IChartDataState>({ datasets: [] });
  const [uniqueIds, setUniqueIds] = useState<string[]>([]); //데이터별 id: 성북구, 강남구, 노원구, 중랑구
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const chartRef = useRef<ChartJS>(null);

  /** `filteredId`에 따라 데이터를 강조하는 함수 */
  const highlightedById = (filteredId: string | null) => {
    if (!chartRef.current || !chartData.datasets.length) return;

    const [areaDataset] = chartData.datasets;
    const { pointBorderWidthForArea, backgroundColorForBar } = filteredChartStyle(
      areaDataset.data,
      filteredId,
    );

    setchartData((prevChartData) => {
      const [prevAreaDataset, prevBarDataset] = prevChartData.datasets;

      const newAreaDataset = { ...prevAreaDataset, pointBorderWidth: pointBorderWidthForArea };
      const newBarDataset = { ...prevBarDataset, backgroundColor: backgroundColorForBar };

      const isMatchedInAreaDataset =
        JSON.stringify(newAreaDataset) === JSON.stringify(prevAreaDataset);
      const isMatchedInBarDataset =
        JSON.stringify(newBarDataset) === JSON.stringify(prevBarDataset);

      if (isMatchedInAreaDataset && isMatchedInBarDataset) {
        return prevChartData;
      }

      return {
        datasets: [newAreaDataset, newBarDataset],
      };
    });
  };

  /** 차트에서 선택된 값의 ID를 찾는 함수 */
  const getIdFromChartElement = (element: InteractionItem[]) => {
    if (!element.length || !chartData.datasets.length) return;

    const { datasetIndex, index } = element[0];
    const clickedItemId = chartData.datasets[datasetIndex].data[index].y.id;
    return clickedItemId;
  };

  const clickBlankCanvasHandler: React.MouseEventHandler<HTMLCanvasElement> = useCallback(
    (event) => {
      if (!chartRef.current) return;

      const clickedElementInCanvas = getElementsAtEvent(chartRef.current, event);
      const clickedId = getIdFromChartElement(clickedElementInCanvas);

      setFilteringTheKey(clickedId);
    },
    [chartRef.current],
  );

  useEffect(() => {
    highlightedById(filteringTheKey);
  }, [filteringTheKey]);

  useEffect(() => {
    if (chartData.datasets.length !== 0 && filteringTheKey) {
      highlightedById(filteringTheKey);
    }
  }, [chartData]);

  // API 호출, res를 이용하여 chartData, uniqueIds 설정
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

  return { chartData, uniqueIds, isLoading, chartRef, onClick: clickBlankCanvasHandler };
};
