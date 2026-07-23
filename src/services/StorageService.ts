import type { DashboardState } from '../types';
import { DEFAULT_STATE } from '../utils/constants';

const STORAGE_KEY = 'luminous-dashboard-state';
type ChromeStorageArea = { get(keys: string[]): Promise<Record<string, unknown>>; set(items: Record<string, unknown>): Promise<void>; remove(keys: string[]): Promise<void> };
const getChromeStorage = (): ChromeStorageArea | undefined => window.chrome?.storage?.local as ChromeStorageArea | undefined;
const cloneDefault = (): DashboardState => structuredClone(DEFAULT_STATE);

export const StorageService = {
  async load(): Promise<DashboardState> {
    const storage = getChromeStorage();
    if (!storage) return cloneDefault();
    const result = await storage.get([STORAGE_KEY]);
    return (result[STORAGE_KEY] as DashboardState | undefined) ?? cloneDefault();
  },
  async save(state: DashboardState): Promise<void> {
    const storage = getChromeStorage();
    if (storage) await storage.set({ [STORAGE_KEY]: state });
  },
  async export(): Promise<string> { return JSON.stringify(await this.load(), null, 2); },
  async import(payload: string): Promise<DashboardState> { const parsed = JSON.parse(payload) as DashboardState; await this.save(parsed); return parsed; },
  async reset(): Promise<DashboardState> { const state = cloneDefault(); const storage = getChromeStorage(); if (storage) await storage.remove([STORAGE_KEY]); await this.save(state); return state; },
};
