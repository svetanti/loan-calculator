import React from 'react';

export default function Input(props) {
  const { heading, param, min, max, userInput, disabled, onInputChange, onInputBlur } = props;

  function handleChange(evt) {
    onInputChange(evt);
  }

  function handleBlur(evt) {
    onInputBlur(evt);
  }

  return (
    <label
      className='input__heading'
      htmlFor={param}>
      <span className='label'>{heading}</span>
      <input
        className='input'
        id={`${param}Input`}
        name={param}
        type='number'
        min={min}
        max={max}
        value={userInput < 0 ? Math.abs((userInput)) : (userInput !== 0 ? userInput : '')}
        disabled={disabled}
        onBlur={handleBlur}
        onChange={handleChange} />
    </label>
  )
}