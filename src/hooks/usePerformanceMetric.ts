import { useEffect } from 'react';

export function usePerformanceMetric<T>(dep: T) {
  useEffect(() => {
    console.log(dep);
  }, [dep]);
}
