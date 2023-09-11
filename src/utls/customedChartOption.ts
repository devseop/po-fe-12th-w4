import { TooltipItem } from 'chart.js';
import { AREA_CHART_SCALE_MAX, X_AXIS_KEY } from '../constants/constants';
import { ITimeSeriesData } from '../types/types';

interface ICustomedChartsTooltip extends TooltipItem<'bar' | 'line'> {
  raw: ITimeSeriesData;
}

export const customedChartOptions = {
  responsive: true,
  radius: 0,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  scales: {
    area: {
      type: 'linear' as const,
      display: true,
      position: 'left' as const,
      title: { display: true, text: 'Area' },
      max: AREA_CHART_SCALE_MAX,
    },
    bar: {
      type: 'linear' as const,
      display: true,
      position: 'right' as const,
      title: { display: true, text: 'Bar' },
      beginAtzero: true,
    },
  },
  parsing: {
    xAxisKey: X_AXIS_KEY,
  },
  plugins: {
    tooltip: {
      callbacks: {
        afterTitle: function (tooltipItems: ICustomedChartsTooltip[]) {
          const [item] = tooltipItems;
          return `ID: ${item.raw.y.id}`;
        },
      },
    },
  },
};
