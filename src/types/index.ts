export type SearchEngineId = 'google' | 'duckduckgo' | 'brave' | 'bing' | 'chatgpt' | 'perplexity' | 'kagi' | 'yandex';

export interface SearchEngine { id: SearchEngineId; name: string; searchUrl: string; placeholder: string }
export interface AppShortcut { id: string; title: string; url: string; iconUrl: string; iconType: 'favicon' | 'custom' }
export interface Workspace { id: string; name: string; shortcuts: AppShortcut[] }
export interface Wallpaper { id: string; name: string; type: 'built-in' | 'custom'; value: string; accent: string }
export interface Settings { searchEngine: SearchEngineId; use24HourClock: boolean; showClock: boolean; showSidebar: boolean; wallpaperId: string; customWallpaper?: string }
export interface DashboardState { version: 1; settings: Settings; workspaces: Workspace[]; wallpapers: Wallpaper[] }
export interface ImportService<T = unknown> { canImport(payload: T): boolean; import(payload: T): Promise<DashboardState> }
