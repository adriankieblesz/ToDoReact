import React from "react";

const Checkbox = ({id, className, label, disabled, checked, onChange}) => {
    return(
        <label>
            <input 
                id={id}
                className={className}
                type="checkbox" 
                disabled={disabled} 
                checked={checked} 
                onChange={onChange}/>
            {label}
        </label>
    );
}

export default Checkbox;