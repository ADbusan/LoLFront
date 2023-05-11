import { create } from 'zustand'

interface Userstore{
    user: any;
    setUser:(user: any) => void;
    removeUser: () => void;
}
const useStore = create<Userstore>((set)=>({
    user: null,
    setUser:(user:any)=>{
        set((state)=>({...state,user}));
    },
    removeUser:()=>{
        set((state)=>({...state,user:null}));
    },
}));
export default useStore;