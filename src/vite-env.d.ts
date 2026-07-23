/// <reference types="vite/client" />

declare global {
  interface Window { chrome?: { storage?: { local?: { get(keys: string[]): Promise<Record<string, unknown>>; set(items: Record<string, unknown>): Promise<void>; remove(keys: string[]): Promise<void> } } } }
  // Chrome exposes this global in extension contexts. It is optional in Vite dev mode.
  const chrome: Window['chrome'];
}
export {};
