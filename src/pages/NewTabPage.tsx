import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { AppGrid } from '../components/AppGrid';
import { AppModal } from '../components/AppModal';
import { Clock } from '../components/Clock';
import { SearchBar } from '../components/SearchBar';
import { SettingsPanel } from '../components/SettingsPanel';
import { Sidebar } from '../components/Sidebar';
import { useDashboardState } from '../hooks/useDashboardState';
import type { AppShortcut, Settings } from '../types';
import { SEARCH_ENGINES } from '../utils/constants';

export function NewTabPage() {
 const {state,ready,persist}=useDashboardState(); const [settingsOpen,setSettingsOpen]=useState(false); const [modal,setModal]=useState<AppShortcut|null|undefined>(undefined);
 const workspace=state.workspaces[0]; const engine=SEARCH_ENGINES.find(e=>e.id===state.settings.searchEngine)??SEARCH_ENGINES[0];
 const wallpaper=useMemo(()=>state.settings.wallpaperId==='custom' && state.settings.customWallpaper ? `url(${state.settings.customWallpaper})` : state.wallpapers.find(w=>w.id===state.settings.wallpaperId)?.value,[state]);
 const setApps=(apps:AppShortcut[])=>persist(c=>({...c,workspaces:c.workspaces.map((w,i)=>i===0?{...w,shortcuts:apps}:w)}));
 const saveApp=(app:AppShortcut)=>{ const exists=workspace.shortcuts.some(a=>a.id===app.id); setApps(exists?workspace.shortcuts.map(a=>a.id===app.id?app:a):[...workspace.shortcuts,app]); setModal(undefined); };
 const updateSettings=(settings:Settings)=>persist(c=>({...c,settings}));
 return <main className="min-h-screen overflow-hidden bg-slate-950 bg-cover bg-center text-white" style={{backgroundImage: wallpaper}}><div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,.20),transparent_35%),linear-gradient(180deg,rgba(2,6,23,.15),rgba(2,6,23,.72))]" />{state.settings.showSidebar&&<Sidebar onSettings={()=>setSettingsOpen(true)} onWallpapers={()=>setSettingsOpen(true)}/>}<section className="relative z-10 flex min-h-screen flex-col px-6 py-10"><motion.header initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} className="mx-auto mb-10 w-full max-w-6xl"><SearchBar engine={engine}/></motion.header><div className="flex flex-1 flex-col items-center justify-center gap-12">{state.settings.showClock&&<Clock use24Hour={state.settings.use24HourClock}/>}<AppGrid apps={workspace.shortcuts} setApps={setApps} onAdd={()=>setModal(null)} onEdit={setModal}/></div><div className="pb-3 text-center text-xs text-white/45">{ready?'Saved in chrome.storage.local':'Loading workspace…'}</div></section><AnimatePresence>{settingsOpen&&<SettingsPanel state={state} update={updateSettings} onClose={()=>setSettingsOpen(false)}/>}</AnimatePresence>{modal!==undefined&&<AppModal initial={modal??undefined} onClose={()=>setModal(undefined)} onSave={saveApp}/>}</main>;
}
