import { VALUE_AREA_KEY, VALUE_BAR_KEY, X_AXIS_KEY, Y_AXIS_KEY } from '../constants/constants';

export type ILocationData = {
  id: string;
  [VALUE_AREA_KEY]: number;
  [VALUE_BAR_KEY]: number;
};

export type ITimeSeriesData = {
  [X_AXIS_KEY]: string;
  [Y_AXIS_KEY]: ILocationData;
};

export type ILocationDateKey = string;

export type IResponseData = Record<ILocationDateKey, ILocationData>;

export type IResponseType = {
  type: string;
  version: number;
  response: IResponseData;
};
