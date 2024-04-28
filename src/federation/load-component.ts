import { loadRemote } from '@module-federation/enhanced/runtime';
import { lazy } from 'react';

export function loadComponent<T extends React.FC<Parameters<T>[0]>>(componentPath: string) {
  return lazy(async () => {
    // Use the generic type `T` in the `loadRemote` call.
    const cmp = await loadRemote<{ default: T }>(componentPath);
    if (!cmp) {
      throw new Error('Failed to load remote component');
    }
    return cmp;
  });
}
