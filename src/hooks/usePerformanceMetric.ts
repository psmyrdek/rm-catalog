import { useEffect, useRef } from 'react';

export function usePerformanceMetric<T>(dep: T) {
  const renderStart = useRef(0);

  useEffect(() => {
    renderStart.current = performance.now();
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_AWS_MONITORING_API}/prod/monitoring`, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        loadTimeMs: 320,
      }),
    });
  }, [dep]);
}
