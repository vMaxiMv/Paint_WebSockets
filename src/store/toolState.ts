import {create} from "zustand";

interface IBrush {
    ctx: any;
    lineWidth?:number;
   // setLineWidth: (width:number) => void,
}
export interface IToolState {
    tool: IBrush | null,
    setTool: (newTool:IBrush | null) => void,
   setLineWidth: (width:number) => void,
}

const useToolStore = create<IToolState>((set, get) =>({
    tool:null,
    setTool: (newTool: IBrush | null) => set({ tool: newTool }),
    setLineWidth: (width: number) => {

        const currentTool = get().tool;

        if (currentTool) {
            currentTool.ctx.lineWidth = width;
            set({tool:currentTool})
        }
    },
}))

export default useToolStore;