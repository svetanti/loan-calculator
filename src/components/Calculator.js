import React, { useContext } from 'react';
import Form from './Form';
import Result from './Result';
import CalculatorHeader from './CalculatorHeader';
import { DynamicContext } from '../contexts/DynamicContext';

export default function Calculator() {
  const { sumValue, period, sum, rate, deposit } = useContext(DynamicContext);

  return (
    <div className='calculator'>
      <CalculatorHeader
        initialSum={sumValue}
        totalSum={sum} />
      <Form />
      <Result
        deposit={deposit}
        period={period}
        sum={sum}
        rate={rate} />
    </div>
  )
}