import type { DashboardState, SearchEngine, Wallpaper } from '../types';

export const SEARCH_ENGINES: SearchEngine[] = [
  { id: 'google', name: 'Google', searchUrl: 'https://www.google.com/search?q=', placeholder: 'Search Google or type URL' },
  { id: 'duckduckgo', name: 'DuckDuckGo', searchUrl: 'https://duckduckgo.com/?q=', placeholder: 'Search privately with DuckDuckGo' },
  { id: 'brave', name: 'Brave', searchUrl: 'https://search.brave.com/search?q=', placeholder: 'Search Brave' },
  { id: 'bing', name: 'Bing', searchUrl: 'https://www.bing.com/search?q=', placeholder: 'Search Bing' },
  { id: 'chatgpt', name: 'ChatGPT', searchUrl: 'https://chatgpt.com/?q=', placeholder: 'Ask ChatGPT' },
  { id: 'perplexity', name: 'Perplexity', searchUrl: 'https://www.perplexity.ai/search/new?q=', placeholder: 'Ask Perplexity' },
  { id: 'kagi', name: 'Kagi', searchUrl: 'https://kagi.com/search?q=', placeholder: 'Search Kagi' },
  { id: 'yandex', name: 'Яндекс', searchUrl: 'https://yandex.ru/search/?text=', placeholder: 'Искать в Яндексе' },
];

export const BUILT_IN_WALLPAPERS: Wallpaper[] = [
  { id: 'sonoma', name: 'Sonoma Mist', type: 'built-in', accent: '#7dd3fc', value: 'linear-gradient(135deg, rgba(14,165,233,.75), rgba(15,23,42,.7)), url(https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2400&q=80)' },
  { id: 'aurora', name: 'Aurora Glass', type: 'built-in', accent: '#c084fc', value: 'linear-gradient(135deg, rgba(88,28,135,.65), rgba(2,6,23,.78)), url(https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=2400&q=80)' },
  { id: 'desert', name: 'Desert Focus', type: 'built-in', accent: '#f59e0b', value: 'linear-gradient(135deg, rgba(120,53,15,.62), rgba(15,23,42,.65)), url(https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=2400&q=80)' },
];

export const DEFAULT_STATE: DashboardState = {
  version: 1,
  wallpapers: BUILT_IN_WALLPAPERS,
  settings: { searchEngine: 'google', use24HourClock: true, showClock: true, showSidebar: true, wallpaperId: 'sonoma' },
  workspaces: [{ id: 'main', name: 'Home', shortcuts: [
    { id: 'gmail', title: 'Gmail', url: 'https://mail.google.com', iconUrl: 'https://www.google.com/s2/favicons?domain=mail.google.com&sz=128', iconType: 'favicon' },
    { id: 'youtube', title: 'YouTube', url: 'https://youtube.com', iconUrl: 'https://www.google.com/s2/favicons?domain=youtube.com&sz=128', iconType: 'favicon' },
    { id: 'notion', title: 'Notion', url: 'https://notion.so', iconUrl: 'https://www.google.com/s2/favicons?domain=notion.so&sz=128', iconType: 'favicon' },
    { id: 'github', title: 'GitHub', url: 'https://github.com', iconUrl: 'https://www.google.com/s2/favicons?domain=github.com&sz=128', iconType: 'favicon' },
    { id: 'figma', title: 'Figma', url: 'https://figma.com', iconUrl: 'https://www.google.com/s2/favicons?domain=figma.com&sz=128', iconType: 'favicon' },
    { id: 'chatgpt-app', title: 'ChatGPT', url: 'https://chatgpt.com', iconUrl: 'https://www.google.com/s2/favicons?domain=chatgpt.com&sz=128', iconType: 'favicon' },
  ] }],
};
