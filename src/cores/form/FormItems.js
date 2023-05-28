import React from "react";
import Radio from "../Radio";
import Slider from "../Slider";

export const FormItems = ({FormFields: fields}) => {


const filedformat = (type,label, data, key, value, min, max, itemStyle, disabled, onChange) => {
    let item = null;
    switch (type) {
        case 'Radio':
        item = (
            <Radio
            label={label}
            options={data}
            style={itemStyle}
            onChange={onChange}
            name={key}
            value={value}
            />
        );
        break;
        case 'Slider':
        item = (
            <Slider
            label={label}
            min={min}
            max={max}
            style={itemStyle}
            onChange={onChange}
            name={key}
            value={value}
            />
        );
        break;
    }
    return item;
    };

  return (
        fields?.map((item, j) => (
            <div
              style ={{width:"100%"}}
              >
                {filedformat(
                  item.type,
                  item.label,
                  item.data,
                  item.key,
                  item.value,
                  item.min,
                  item.max,
                  item.itemStyle,
                  item.disabled,
                  item.onChange
                )}
            </div>
          ))
  );
};



export default FormItems;

