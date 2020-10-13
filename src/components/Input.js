import React from 'react';

export default function Input(props) {
  const { heading, param, min, max, value, disabled, onInputChange } = props;

  function handleChange(evt) {
    onInputChange(evt);
  }

  return (
    <label
      className='input__heading'
      htmlFor={param}>
      <span className='label'>{heading}</span>
      <input
        className='input'
        id={param}
        name={param}
        type='number'
        min={min}
        max={max}
        value={value === '' ? min : value}
        disabled={disabled}
        onChange={handleChange} />
    </label>
  )
}