import type React from 'react';
import { Search } from 'lucide-react';
import type { SearchEngine } from '../types';

const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/.*)?$/i;
export function SearchBar({ engine }: { engine: SearchEngine }) {
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = new FormData(event.currentTarget).get('query')?.toString().trim();
    if (!query) return;
    const destination = urlPattern.test(query) ? (query.startsWith('http') ? query : `https://${query}`) : `${engine.searchUrl}${encodeURIComponent(query)}`;
    window.location.href = destination;
  };
  return <form onSubmit={submit} className="group mx-auto flex max-w-3xl items-center gap-3 rounded-3xl border border-white/25 bg-white/15 px-5 py-4 shadow-glow backdrop-blur-2xl transition hover:bg-white/20">
    <Search className="text-white/80" size={22}/><input name="query" autoFocus className="w-full bg-transparent text-lg text-white placeholder:text-white/65 outline-none" placeholder={engine.placeholder}/><span className="rounded-full bg-white/15 px-3 py-1 text-xs text-white/75">{engine.name}</span>
  </form>;
}
