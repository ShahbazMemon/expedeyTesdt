import React from "react";

export const Radio = ({label, options, style, onChange, name, value}) => {
  return (
    <>
        <div >
          <p style={{...style}}>{label}</p>
          {options.map((item, ind)=>{
              return <div className="radio" key={ind}>
                          <label style={{color:"white", fontSize:18}}>
                              <input
                              name={name}
                              type="radio"
                              value={item.value}
                              checked={item.value == value}
                              onChange={onChange}
                              />
                              {item.label}
                          </label>
                    </div>
          })}
        </div>
    </>
  );
};

export default Radio;
