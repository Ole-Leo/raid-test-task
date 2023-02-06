import axios from 'axios';
import { useState } from 'react';

const baseURL = 'https://api.npoint.io/ab5af380fe541cd365e7';

export const useFetchHook = (setState: Function) => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(baseURL);
      setIsError(false);
      setState(res.data.data);
      setIsLoading(false);
    } catch (err: any) {
      console.error(err);
      setIsLoading(false);
      setIsError(true);
    }
  };

  return { fetchData, isError, isLoading };
};
