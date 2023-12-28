import React from 'react';
import '../styles/toolbar.css'
import useCanvasStore from "../store/canvasState";
import useToolStore from "../store/toolState";
import {Brush} from "../tools/Brush";
import {Rect} from "../tools/Rect";
import {Circle} from "../tools/Сircle";
import {Eraser} from "../tools/Eraser";
import {Line} from "../tools/Line";
function Toolbar() {
    const {canvas, setCanvas} = useCanvasStore()
    const {setTool} = useToolStore()
    return (
        <div className="toolbar">
            <button className="toolbar_btn brush" onClick={()=> setTool(new Brush(canvas))}></button>
            <button className="toolbar_btn rect" onClick={()=> setTool(new Rect(canvas))}></button>
            <button className="toolbar_btn circle" onClick={()=> setTool(new Circle(canvas))}></button>
            <button className="toolbar_btn eraser" onClick={()=> setTool(new Eraser(canvas))}></button>
            <button className="toolbar_btn line" onClick={()=> setTool(new Line(canvas))}></button>
            <input style={{marginLeft:10}} type="color"/>

            <button className="toolbar_btn undo"></button>
            <button className="toolbar_btn redo"></button>
            <button className="toolbar_btn save"></button>
        </div>
    );
}

export default Toolbar;