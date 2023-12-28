import React from 'react';
import '../styles/toolbar.css'
import useToolStore from "../store/toolState";
function SettingBar() {
   const {setLineWidth} = useToolStore()
    return (
        <div className="setting_bar">
            <input
                onChange={e => setLineWidth(+e.target.value)}
                type="number" defaultValue={1} min={1} max={50}/>
        </div>
    );
}

export default SettingBar;