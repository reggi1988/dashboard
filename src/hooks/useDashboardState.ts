import { useCallback, useEffect, useState } from 'react';
import { StorageService } from '../services/StorageService';
import type { DashboardState } from '../types';
import { DEFAULT_STATE } from '../utils/constants';

export const useDashboardState = () => {
  const [state, setState] = useState<DashboardState>(DEFAULT_STATE);
  const [ready, setReady] = useState(false);
  useEffect(() => { void StorageService.load().then((loaded) => { setState(loaded); setReady(true); }); }, []);
  const persist = useCallback((updater: (current: DashboardState) => DashboardState) => {
    setState((current) => { const next = updater(current); void StorageService.save(next); return next; });
  }, []);
  return { state, ready, persist };
};
