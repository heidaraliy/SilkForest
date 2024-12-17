import { useState, useEffect } from "react";

// while this isn't currently used, it's a good idea to have
// a debounce function in case we need it in the future.
export function useDebouncedValue<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}
