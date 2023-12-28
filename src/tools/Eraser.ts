import {Tool} from "./Tool";
import {Brush} from "./Brush";

export class Eraser extends Brush{

    draw(x: number,y: number){
        this.ctx.lineTo(x,y)
        this.ctx.stroke()
        //this.ctx.lineWidth = 5
        this.ctx.strokeStyle = 'white'
    }

}