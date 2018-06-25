import React from 'react';

export default function ColorChanger(props) {
  return (
    <select className="dropDownContainer" value={props.fontColor} onChange={(event) => props.update(event.target.value)} disabled={!props.allowEdit}>
      <option value="black"> Black </option>
      <option value="blue"> Blue </option>
      <option value="green"> Green </option>
    </select>
  )
}
