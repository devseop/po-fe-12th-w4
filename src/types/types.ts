import { VALUE_AREA, VALUE_BAR } from '../constants/constants';

export type ILocationData = {
  id: string;
  [VALUE_AREA]: number;
  [VALUE_BAR]: number;
};

export type ILocationDateKey = string;

export type TimeSeriesData = Record<ILocationDateKey, ILocationData>;

export type IResponseType = {
  type: string;
  version: number;
  response: TimeSeriesData;
};
