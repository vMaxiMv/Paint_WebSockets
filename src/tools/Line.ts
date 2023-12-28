import {Tool} from "./Tool";

export class Line extends Tool{
    constructor(canvas:any) {
        super(canvas)
        this.listen()
    }
    mouseDown: boolean = false
    startX: number = 0
    startY: number = 0
    saved:string = ""
    listen(){
        this.canvas.onmouseup = this.mouseUpHandler.bind(this)
        this.canvas.onmousedown = this.mouseDownHandler.bind(this)
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
    }

    mouseUpHandler(e: any){
        this.mouseDown = false
    }

    mouseDownHandler(e: any){
        this.mouseDown = true
        this.startX = e.pageX - e.target.offsetLeft
        this.startY = e.pageY - e.target.offsetTop
        this.ctx.beginPath()
        this.ctx.moveTo(this.startX, this.startY)
        this.saved = this.canvas.toDataURL()

    }
    mouseMoveHandler(e: any){
        if (this.mouseDown) {
            const x = e.pageX - e.target.offsetLeft
            const y = e.pageY - e.target.offsetTop
            this.draw(this.startX, this.startY, x, y)
        }
    }

    draw(startX: number,startY: number, endX:number, endY: number){
        const img = new Image()
        img.src = this.saved
        img.onload = () => {
            this.ctx.strokeStyle = 'black'
            this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height)
            this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
            this.ctx.beginPath()
            this.ctx.moveTo(startX, startY)
            this.ctx.lineTo(endX,endY)
            this.ctx.stroke()
        }

    }

}