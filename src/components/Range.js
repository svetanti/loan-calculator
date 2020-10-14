import React from 'react';

export default function Range(props) {
  const { param, min, max, value, disabled, onRangeChange } = props;

  function handleChange(evt) {
    onRangeChange(evt);
  }

  return (

    <label
      className='range__label'
      htmlFor={param}>
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
        <span>{!min ? '' : `от ${Number(min).toLocaleString()}`}</span>
        <span>{!max ? '' : `свыше ${Number(max).toLocaleString()}`}</span>
      </div>
    </label>
  )
}