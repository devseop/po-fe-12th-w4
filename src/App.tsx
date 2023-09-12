import styled from '@emotion/styled';
import { ChartData } from 'chart.js';

import { FilterButtons } from './components/FilterButtons';
import { ChartHeader } from './components/ChartHeader';
import { TimeSeriesChart } from './components/TimeSeriesChart';

import { useData } from './hooks/useData';
import './utils/registerChartJS';
import { customedChartOptions } from './utils/customedChartOption';
import { ITimeSeriesData } from './types/types';
import { Spinner } from './components/Spinner';

export interface IChartDataState extends ChartData<'bar' | 'line', ITimeSeriesData[]> {}

const App = () => {
  const { chartData, isLoading, uniqueIds, chartRef, onClick } = useData();

  return (
    <>
      <Container>
        <ChartHeader />
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <FilterButtons uniqueIds={uniqueIds} />
            <TimeSeriesChart
              chartData={chartData}
              chartOptions={customedChartOptions}
              ref={chartRef}
              onClick={onClick}
            />
          </>
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  max-width: 1280px;
  padding: 0 20px;
  margin: 80px auto 0;
`;

export default App;
