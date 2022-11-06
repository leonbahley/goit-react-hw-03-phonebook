import React from 'react';
const Filter = ({ value, onChange }) => (
  <label className="Filter">
    Filter contacts by name
    <input
      className="FilterInput"
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);
export default Filter;
