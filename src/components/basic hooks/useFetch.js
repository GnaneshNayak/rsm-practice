import { useEffect, useReducer, useState } from 'react';
import { CanceledError } from 'axios';

function reducer(state, { type, payload }) {
  if (type === 'start') {
    return { isError: false, isLoading: true };
  }

  if (type === 'success') {
    return {
      data: payload.data,
      isLoading: false,
      isError: false,
    };
  }
  if (type === 'error') {
    return {
      isError: true,
      isLoading: false,
    };
  }
  return state;
}

export default function useFetch(url, OPTIONS = {}) {
  // const [url, seturl] = useState(initalValue);
  const [state, dispatch] = useReducer(reducer, {
    isError: false,
    isLoading: false,
  });

  // console.log(`${url}`);

  useEffect(() => {
    dispatch({ type: 'start' });
    const controller = new AbortController();

    fetch(url, { signal: controller.signal })
      .then((res) => {
        if (res.status === 200) return res.json();
        else Promise.reject(res);
      })
      .then((data) => {
        dispatch({ type: 'success', payload: { data } });
      })
      .catch((err) => {
        console.log(err);
        if (err instanceof CanceledError) return;
        dispatch({ type: 'error' });
      });

    return () => controller.abort();
  }, [url]);

  return state;
}
