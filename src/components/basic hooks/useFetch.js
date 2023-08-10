import { useEffect, useState } from 'react';
import axios, { CanceledError } from 'axios';

export default function useFetch(url, OPTIONS) {
  // const [url, seturl] = useState(initalValue);
  const [isLoading, setisLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState(false);

  // console.log(`${url}`);

  useEffect(() => {
    const controller = new AbortController();
    setisLoading(true);

    fetch(url, { signal: controller.signal })
      .then((res) => {
        if (res.status === 200) return res.json();
        else Promise.reject(res);
      })
      .then(setData)
      .catch((err) => {
        console.log(err);
        if (err instanceof CanceledError) return;
        setError(true);
      })
      .finally(() => {
        if (controller.signal.aborted) return;
        setisLoading(false);
      });
    return () => controller.abort();
  }, [url]);

  return { data, error, isLoading };
}
