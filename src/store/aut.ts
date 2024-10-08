import { create } from 'zustand';

interface StoreState {
  user: any | null; 
  trigger:boolean,// Replace `any` with a specific type if you have one
  setUser: (newUser: any) => void; 
  lang:'az'|"en"|"ru"|"es";
  setLang:(param:'az'|"en"|"ru"|"es")=>void;
  setTrigger:()=>void
  // Replace `any` with a specific type if you have one
}

export const useStore = create<StoreState>((set) => ({
  lang:"az",
  user: null,
  trigger:false,
  setUser: (newUser) => set(() => ({ user: newUser })),
  setTrigger:() => set(() => ({ trigger:true  })),
  setLang: (param) => set(() => ({ lang: param })),
}));
