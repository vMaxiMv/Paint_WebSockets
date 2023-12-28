import {create} from "zustand";

export interface ICanvasState {
    canvas: HTMLCanvasElement | null,
    setCanvas: (newCanvas:HTMLCanvasElement | null) => void
}

const useCanvasStore = create<ICanvasState>((set) =>({
    canvas:null,
    //setCanvas: ()=>set((newCanvas) => ({canvas: newCanvas}))
    setCanvas: (newCanvas) => set({canvas:newCanvas})
}))

export default useCanvasStore;