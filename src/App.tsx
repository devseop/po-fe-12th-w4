import styled from '@emotion/styled';
import { ChartData } from 'chart.js';
import { Chart } from 'react-chartjs-2';
import './style.css';

import './utls/registerChartJS';
import { customedChartOptions } from './utls/customedChartOption';
import { ITimeSeriesData } from './types/types';
import { useChartData } from './hooks/useChartData';
import { FilterButtons } from './components/FilterButtons';
import { ChartHeader } from './components/ChartHeader';

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

  return (
    <Container>
      <ChartHeader />
      <FilterButtons uniqueIds={uniqueIds} />
      <Chart type='bar' data={chartData} options={customedChartOptions} />
    </Container>
  );
};

const Container = styled.div`
  max-width: 1280px;
  padding: 0 20px;
  margin: 80px auto 0;
`;

const Loading = styled.div`
  margin: 350px auto 0;
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  color: white;
`;

export default App;
