import { forwardRef } from 'react';
import { ChartData, ChartOptions } from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { ITimeSeriesData } from '../types/types';

interface ITimeSeriesChart {
  chartData: ChartData<'bar' | 'line', ITimeSeriesData[]>;
  chartOptions: ChartOptions<'bar' | 'line'>;
  onClick: React.MouseEventHandler<HTMLCanvasElement>;
}

// ref의 정확한 타입을 설정하는 방법을 찾지 못 함
// 따라서 any로 선언함과 동시에 해당 규칙을 현재 파일에서만 비활성화
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TimeSeriesChart = forwardRef<any, ITimeSeriesChart>(
  ({ chartData, chartOptions, onClick }, ref) => {
    return <Chart type='bar' data={chartData} options={chartOptions} onClick={onClick} ref={ref} />;
  },
);

TimeSeriesChart.displayName = 'TimeSeriesChart';
