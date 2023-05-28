import React from "react";

export const Slider = ({label, min, max, style, onChange, name, value}) => {

  return (
    <>
        <div >
            <p style={{...style}}>{label}</p>
            <div style={{display:"flex"}}>
                <input type="range" min={min} max={max} value={value} onChange={onChange} name={name} style={{width:"100%"}}/>
                <label style={{color:"white"}}>{max}</label>
            </div>
        </div>
    </>
  );
};

export default Slider;