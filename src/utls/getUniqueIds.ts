import { IResponseData } from '../types/types';

export const getUniqueIds = (data: IResponseData): string[] => {
  const locationDataArr = Object.values(data);
  return [...new Set(locationDataArr.map((item) => item.id))];
};
