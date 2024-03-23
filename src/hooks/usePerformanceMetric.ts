import { useEffect, useRef } from 'react';

export function usePerformanceMetric<T>(dep: T) {
  const renderStart = useRef(0);

  useEffect(() => {
    renderStart.current = performance.now();
  }, []);

  useEffect(() => {
    fetch(import.meta.env.VITE_AWS_MONITORING_API, {
      method: 'POST',
      body: JSON.stringify({
        loadTimeMs: performance.now() - renderStart.current,
      }),
    });
  }, [dep]);
}
