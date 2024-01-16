import React from 'react'

const FormSelect = ({ label, value, list, onChange }) => {
  return (
    <>
     <div className='form-select-container '>
      <label className='form-select-label'>
        <span className='text-uppercase'>{label}</span>
      </label>
      <select
        value={value}
        className="select select-bordered bg-light text-dark form-select-dropdown"
        onChange={onChange}
      >
        {list.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
    </>
  )
}

export default FormSelect