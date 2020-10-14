import React from 'react';

export default function Result(props) {
  const { deposit, period, sum, rate } = props;

  function decl(n, titles) {
    return titles[n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];
  }

  return (
    <div className='result'>
      <div className='result__block'>
        <p className='label'>Тарифный план</p>
        <p className='result__value'>{deposit}</p>
      </div>
      <div className='result__block'>
        <p className='label'>Ставка</p>
        <p className='result__value'>{rate !== 0 && `${rate} \u0025`}</p>
      </div>
      <div className='result__block'>
        <p className='label'>Срок</p>
        <p className='result__value'>{period !== 0 && `${period} ${decl(period, ['день', 'дня', 'дней'])}`}</p>
      </div>
      <div className='result__block'>
        <p className='label'>Сумма</p>
        <p className='result__value'>{sum !== 0 && `${sum} 	\u20bd`}</p>
      </div>

    </div>
  )
}