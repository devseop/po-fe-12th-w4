import { useEffect, useState } from 'react';
import './style.css';
import { fetchData } from './api/api';
import { ITimeSeriesData } from './types/types';

import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  Filler,
  ChartData,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import styled from '@emotion/styled';
import { convertChartData } from './utls/convertChartData';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  Filler,
);

interface IChartDataState extends ChartData<'bar' | 'line', ITimeSeriesData[]> {}

const App = () => {
  const [chartData, setchartData] = useState<IChartDataState>({ datasets: [] });

  useEffect(() => {
    const laodData = async () => {
      try {
        const res = await fetchData();
        setchartData(convertChartData(res) as IChartDataState);
      } catch (err) {
        console.error(err);
      }
    };

    laodData();
  }, []);

  return (
    <Container>
      <Chart type='bar' data={chartData} />
    </Container>
  );
};

const Container = styled.div`
  max-width: 1280px;
  margin: 20px 0 0 20px;
`;

export default App;
