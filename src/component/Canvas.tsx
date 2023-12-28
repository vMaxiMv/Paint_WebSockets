import React, {useEffect, useRef} from 'react';
import '../styles/canvas.css'
import useCanvasStore from "../store/canvasState";
import useToolStore from "../store/toolState";
import {Brush} from "../tools/Brush";
function Canvas() {
    const {canvas, setCanvas} = useCanvasStore()
    const {tool,setTool} = useToolStore()
    const canvasRef = useRef<HTMLCanvasElement>(null)


    useEffect(()=>{
        setCanvas(canvasRef.current)
        setTool(new Brush(canvasRef.current))
    },[])
console.log(tool?.ctx.lineWidth)



    return (
        <div className="canvas">
            <canvas ref={canvasRef} width={800} height={600}></canvas>
        </div>
    );
}

export default Canvas;