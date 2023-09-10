import { useEffect, useState } from 'react';
import './style.css';
import { fetchData } from './api/api';
import { IResponseType, TimeSeriesData } from './types/types';
import { VALUE_AREA, VALUE_BAR, X_AXIS, Y_AXIS } from './constants/constants';

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
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import styled from '@emotion/styled';

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

const App = () => {
  const [data, setData] = useState<TimeSeriesData | unknown>();

  const chartDataConvertHandler = (data: IResponseType) => {
    if (!data) return [];
    const result = Object.entries(data).map(([time, data]) => ({
      [X_AXIS]: time,
      [Y_AXIS]: data,
    }));

    return result;
  };

  useEffect(() => {
    const laodData = async () => {
      try {
        const res = await fetchData();
        const convertedData = chartDataConvertHandler(res);
        // console.log(convertedData)
        setData(convertedData);
      } catch (err) {
        console.error(err);
      }
    };

    laodData();
  }, []);

  const chartData = {
    datasets: [
      {
        type: 'line' as const,
        label: VALUE_AREA,
        yAxisID: 'area',
        data: data,
        parsing: {
          xAxisKey: X_AXIS,
          yAxisKey: `${Y_AXIS}.${VALUE_AREA}`,
        },
        borderWidth: 2,
        borderColor: 'rgba(255, 99, 132, 0.8)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
        order: 1,
      },
      {
        type: 'bar' as const,
        label: VALUE_BAR,
        yAxisID: 'bar',
        data: data,
        parsing: {
          xAxisKey: X_AXIS,
          yAxisKey: `${Y_AXIS}.${VALUE_BAR}`,
        },
        backgroundColor: 'rgb(75, 192, 192)',
        order: 2,
      },
    ],
  };

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
