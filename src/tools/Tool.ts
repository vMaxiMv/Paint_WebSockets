export class Tool{
    public canvas: HTMLCanvasElement;
    public ctx: any;
    constructor(canvas:any) {
        this.canvas = canvas
        this.ctx = canvas.getContext('2d')
        this.destroyEvents()
    }
    set lineWidth(width: number){
        this.ctx.lineWidth = width
    }
    destroyEvents(){
        this.canvas.onmouseup = null
        this.canvas.onmousedown = null
        this.canvas.onmousemove = null
    }
}