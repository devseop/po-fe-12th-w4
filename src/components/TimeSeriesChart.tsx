import { ChartData, ChartOptions } from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { ITimeSeriesData } from '../types/types';

interface ITimeSeriesChart {
  chartData: ChartData<'bar' | 'line', ITimeSeriesData[]>;
  chartOptions: ChartOptions<'bar' | 'line'>;
}

export const TimeSeriesChart = ({ chartData, chartOptions }: ITimeSeriesChart) => {
  return <Chart type='bar' data={chartData} options={chartOptions} />;
};
