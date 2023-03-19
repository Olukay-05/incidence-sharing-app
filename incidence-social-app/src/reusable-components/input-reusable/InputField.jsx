import React from 'react'

const InputField = (type, label, name, value, ...props) => {
  return (
    <div>
        <input 
            label={label}
            type={type}
            name={name}
            value={value}
         />
    </div>
  )
}

export default InputField