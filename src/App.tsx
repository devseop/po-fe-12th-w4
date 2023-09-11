import styled from '@emotion/styled';
import { ChartData } from 'chart.js';
import { Chart } from 'react-chartjs-2';
import './style.css';

import './utls/registerChartJS';
import { customedChartOptions } from './utls/customedChartOption';
import { ITimeSeriesData } from './types/types';
import { useChartData } from './hooks/useChartData';
import { FilterButtons } from './components/FilterButtons';

export interface IChartDataState extends ChartData<'bar' | 'line', ITimeSeriesData[]> {}

const App = () => {
  const { chartData, isLoading, uniqueIds } = useChartData();
  // const [highlightedId, setHighlightedId] = useState<string | null>(null);

  if (isLoading) {
    return (
      <Loading>
        <p>Loading...</p>
      </Loading>
    );
  }

  console.log(uniqueIds);

  return (
    <Container>
      <h1>서울특별시 자치구 시계열 차트</h1>
      <FilterButtons uniqueIds={uniqueIds} />
      <Chart type='bar' data={chartData} options={customedChartOptions} />
    </Container>
  );
};

const Container = styled.div`
  max-width: 1280px;
  padding: 0 20px;
  margin: 80px auto 0;

  h1 {
    color: white;
    font-size: 40px;
    margin: 0 0 40px 40px;
  }
`;

const Loading = styled.div`
  margin: 350px auto 0;
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  color: white;
`;

export default App;
