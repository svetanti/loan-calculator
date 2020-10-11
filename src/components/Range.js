import React from 'react';

export default function Range(props) {
  const { heading, param, min, max, value, disabled, onInputChange } = props;

  function handleChange(evt) {
    onInputChange(evt);
  }

  return (

    <label
      className='range__label'
      htmlFor={param}>
      {heading}

      <input
        className='range'
        id={param}
        name={param}
        type='range'
        step='1'
        min={min}
        max={max}
        value={value}
        disabled={disabled}
        onChange={handleChange} />
      <div className='range__minmax'>
        <span>{min === '' ? '' : Number(min).toLocaleString()}</span>
        <span>{max === '' ? '' : Number(max).toLocaleString()}</span>
      </div>
      <span>{value === '' ? '' : Number(value).toLocaleString()}</span>
    </label>
  )
}