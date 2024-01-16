import React from "react";

const FeildInput = ({ label, type, value, onChange,error }) => {
  return (
    <>
      <div className="form-group">
        <label className="capitalize mb-2 custom-label">
          {label} 
        </label>
        <input type={type} onChange={onChange} value={value} className="form-control capitalize bg-light text-dark input-text" />
        <div className="mt-1 text-danger">{error}</div>
      </div>
    </>
  );
};

export default FeildInput;
