import React from 'react';

export default function Select(props) {
  const { deposits, selectedOption, onSelect } = props;

  function handleSelect(evt) {
    onSelect(evt);
  }

  return (
    <label
      htmlFor='select'
      className='input__heading'>
      <span className='label'>Вклад</span>
      <select
        className='select input'
        id='select'
        value={selectedOption}
        onChange={handleSelect}
        placeholder='Выберите тарифный план'>
        <option
          disabled
          value=''>Выберите план</option>
        {
          deposits.map((deposit) => (
            <option
              key={deposit.code}
              value={deposit.code}>
              {deposit.name}
            </option>
          ))
        }
      </select>
    </label>
  )
}