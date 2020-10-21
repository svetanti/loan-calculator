import React, { useContext } from 'react';
import Form from './Form';
import Result from './Result';
import CalculatorHeader from './CalculatorHeader';
import { InputsContext } from '../contexts/InputsContext';

export default function Calculator(props) {
  const { sumValue } = useContext(InputsContext);

  const {
    deposits,
    deposit,
    period,
    sum,
    rate
  } = props;

  return (
    <div className='calculator'>
      <CalculatorHeader
        initialSum={sumValue}
        totalSum={sum} />
      <Form
        deposits={deposits} />
      <Result
        deposit={deposit}
        period={period}
        sum={sum}
        rate={rate} />
    </div>
  )
}