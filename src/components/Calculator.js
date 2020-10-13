import React from 'react';
import Form from './Form';
import Result from './Result';
import CalculatorHeader from './CalculatorHeader';

export default function Calculator(props) {
  const {
    deposits,
    deposit,
    period,
    sum,
    rate,
    selectedOption,
    onSelect,
    minSum,
    minPeriod,
    maxSum,
    maxPeriod,
    sumValue,
    periodValue,
    onInputChange,
    disabled
  } = props;

  return (
    <div className='calculator'>
      <CalculatorHeader
        initialSum={sumValue}
        totalSum={sum} />
      <Form
        deposits={deposits}
        selectedOption={selectedOption}
        onSelect={onSelect}
        minSum={minSum}
        maxSum={maxSum}
        minPeriod={minPeriod}
        maxPeriod={maxPeriod}
        sumValue={sumValue}
        periodValue={periodValue}
        onInputChange={onInputChange}
        disabled={disabled}
      />
      <Result
        deposit={deposit}
        period={period}
        sum={sum}
        rate={rate} />
    </div>
  )
}