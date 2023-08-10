import { useCallback, useState } from 'react';

export default function useArray(arr) {
  const [array, setArray] = useState(arr);
  // console.log(array[0]);

  const push = useCallback((pushArr) => {
    setArray([...array, pushArr]);
  }, []);

  const replace = useCallback((index, value) => {
    setArray((a) => {
      return [...a.slice(0, index), value, ...a.slice(index + 1)];
    });
  }, []);

  const filter = useCallback((cal) => {
    setArray((e) => {
      return e.filter(cal);
    });
  }, []);
  const remove = useCallback((index) => {
    setArray((a) => {
      return [...a.slice(0, index), ...a.slice(index + 1)];
    });
  }, []);
  const clear = useCallback(() => {
    setArray([]);
  }, []);
  const reset = useCallback(() => {
    setArray(arr);
  }, [arr]);
  return { array, set: setArray, push, replace, filter, remove, clear, reset };
}
