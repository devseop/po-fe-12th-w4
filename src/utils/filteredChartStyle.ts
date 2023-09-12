import { COLORS, Y_AXIS_KEY } from '../constants/constants';
import { ILocationData, ITimeSeriesData } from '../types/types';

interface IFilteredChartStyle {
  pointBorderWidthForArea: number[];
  backgroundColorForBar: string[];
}

export const filteredChartStyle = (
  data: ITimeSeriesData[],
  filteredId: ILocationData['id'] | null,
): IFilteredChartStyle => {
  return data.reduce<IFilteredChartStyle>(
    (obj, current) => {
      const currentId = current[Y_AXIS_KEY].id;
      const isMatched = currentId === filteredId;

      const newAreaBorderWidth = isMatched ? 2 : 0;
      const newBarColor = isMatched ? COLORS.blue.base : COLORS.blue.dimmed;

      return {
        pointBorderWidthForArea: [...obj.pointBorderWidthForArea, newAreaBorderWidth],
        backgroundColorForBar: [...obj.backgroundColorForBar, newBarColor],
      };
    },
    { pointBorderWidthForArea: [], backgroundColorForBar: [] },
  );
};
