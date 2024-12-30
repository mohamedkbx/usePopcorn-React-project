import { useEffect, useState } from "react";

export function useLocalStorageState(initailState, key) {
  const [value, setValue] = useState(() => JSON.parse(localStorage.getItem(key)) || []);

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(value ? value : initailState));
  }, [value, key]);

  return [value, setValue];
}
