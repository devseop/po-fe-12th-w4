import { IResponseType } from '../types/types';

export const fetchData = async (): Promise<IResponseType> => {
  try {
    const res = await fetch('public/mock/mock_data.json');
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await res.json();
    // console.log('api:', data.response)
    return data.response;
  } catch (err) {
    console.error('Fetch data error:', err);
    throw err;
  }
};
