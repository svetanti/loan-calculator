import React from 'react';

export default function Result(props) {
  const { deposit, period, sum, rate } = props;

  return (
    <div className='result'>
      <p>Тарифный план</p>
      <p>{deposit}</p>
      <p>Срок</p>
      <p>{period}</p>
      <p>Сумма</p>
      <p>{sum}</p>
      <p>Ставка</p>
      <p>{rate}</p>
    </div>
  )
}