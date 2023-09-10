import {
  COLORS,
  X_AXIS_KEY,
  Y_AXIS_KEY,
  VALUE_AREA_KEY,
  VALUE_BAR_KEY,
} from '../constants/constants';
import { IResponseData, ITimeSeriesData } from '../types/types';

const returnToAreaDataset = (dataList: ITimeSeriesData[]) => {
  return {
    type: 'line' as const,
    label: VALUE_AREA_KEY,
    yAxisID: 'area',
    data: dataList,
    parsing: {
      xAxisKey: X_AXIS_KEY,
      yAxisKey: `${Y_AXIS_KEY}.${VALUE_AREA_KEY}`,
    },
    borderWidth: 2,
    borderColor: COLORS.red.base,
    backgroundColor: COLORS.red.dimmed,
    fill: true,
    order: 1,
  };
};

const returnToBarDataset = (dataList: ITimeSeriesData[]) => {
  return {
    type: 'bar' as const,
    label: VALUE_BAR_KEY,
    yAxisID: 'bar',
    data: dataList,
    parsing: {
      xAxisKey: X_AXIS_KEY,
      yAxisKey: `${Y_AXIS_KEY}.${VALUE_BAR_KEY}`,
    },
    backgroundColor: COLORS.blue.dimmed,
    hoverBorderColor: COLORS.blue.base,
    hoverBackgroundColor: COLORS.blue.base,
    order: 2,
  };
};

export const convertChartData = (data: IResponseData) => {
  if (!data) return [];

  const dataList = Object.entries(data).map(([time, data]) => ({
    [X_AXIS_KEY]: time,
    [Y_AXIS_KEY]: data,
  }));

  return {
    datasets: [returnToAreaDataset(dataList), returnToBarDataset(dataList)],
  };
};
