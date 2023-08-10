import { useState } from 'react';

export default function useToggel(initialValue) {
  const [value, setValue] = useState(initialValue);
  function toggle() {
    setValue((curr) => !curr);
  }
  return [value, toggle];
}
