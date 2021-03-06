import React from 'react';

export default function SizeChanger(props) {
  return (
    <select className="dropDownContainer" value={props.fontSize}>
    onChange={(event) =>props.updated(event.target.value)}>
      <option value="12"> 12 </option>
      <option value="16"> 16 </option>
      <option value="36"> 36 </option>
    </select>
  )
}