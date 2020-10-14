import React from 'react';

export default function PrintButton(props) {
  const { onClick, btnDisabled } = props;

  return (
    <button
      className='button'
      type='button'
      disabled={btnDisabled}
      onClick={onClick}>Распечатать</button>
  )
}