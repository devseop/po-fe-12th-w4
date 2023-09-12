import { IResponseData } from '../types/types';

export const fetchData = async (): Promise<IResponseData> => {
  try {
    const res = await fetch('/public/mock_data.json');
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await res.json();
    return data.response;
  } catch (err) {
    console.error('Fetch data error:', err);
    throw err;
  }
};
