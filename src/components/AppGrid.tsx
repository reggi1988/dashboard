import { DndContext, PointerSensor, closestCenter, useSensor, useSensors, type DragEndEvent } from '@dnd-kit/core';
import { SortableContext, arrayMove, useSortable, rectSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Edit3, Plus, Trash2 } from 'lucide-react';
import type { AppShortcut } from '../types';

function Tile({ app, onEdit, onDelete }: { app: AppShortcut; onEdit: () => void; onDelete: () => void }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: app.id });
  return <div ref={setNodeRef} style={{ transform: CSS.Transform.toString(transform), transition }} {...attributes} {...listeners} className="group relative rounded-[1.75rem] border border-white/15 bg-white/10 p-4 text-center shadow-glow backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/20">
    <a href={app.url} className="block" onClick={(e)=>{ if((e.target as HTMLElement).closest('button')) e.preventDefault(); }}><img src={app.iconUrl} className="mx-auto h-14 w-14 rounded-2xl"/><div className="mt-3 truncate text-sm font-medium text-white">{app.title}</div></a>
    <div className="absolute right-2 top-2 flex gap-1 opacity-0 transition group-hover:opacity-100"><button onClick={onEdit} className="rounded-full bg-black/35 p-1.5 text-white"><Edit3 size={14}/></button><button onClick={onDelete} className="rounded-full bg-black/35 p-1.5 text-white"><Trash2 size={14}/></button></div>
  </div>;
}
export function AppGrid({ apps, setApps, onAdd, onEdit }: { apps: AppShortcut[]; setApps: (apps: AppShortcut[]) => void; onAdd: () => void; onEdit: (app: AppShortcut) => void }) {
 const sensors=useSensors(useSensor(PointerSensor,{activationConstraint:{distance:8}}));
 const dragEnd=(e:DragEndEvent)=>{const {active,over}=e;if(over&&active.id!==over.id){const oldIndex=apps.findIndex(a=>a.id===active.id);const newIndex=apps.findIndex(a=>a.id===over.id);setApps(arrayMove(apps,oldIndex,newIndex));}};
 return <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={dragEnd}><SortableContext items={apps.map(a=>a.id)} strategy={rectSortingStrategy}><div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">{apps.map(app=><Tile key={app.id} app={app} onEdit={()=>onEdit(app)} onDelete={()=>setApps(apps.filter(a=>a.id!==app.id))}/>) }<button onClick={onAdd} className="grid min-h-32 place-items-center rounded-[1.75rem] border border-dashed border-white/35 bg-white/10 text-white/80 backdrop-blur-xl transition hover:bg-white/20"><Plus size={34}/></button></div></SortableContext></DndContext>;
}
