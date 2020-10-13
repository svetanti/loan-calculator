import React from 'react';
import Input from './Input';
import Range from './Range';
import Select from './Select';

export default function Form(props) {
  const {
    deposits,
    selectedOption,
    onSelect,
    minSum,
    maxSum,
    minPeriod,
    maxPeriod,
    sumValue,
    periodValue,
    onInputChange,
    disabled
  } = props;

  return (
    <form className='form'>
      <Select
        deposits={deposits}
        selectedOption={selectedOption}
        onSelect={onSelect} />
      <Input
        heading='Сумма вклада'
        param='sum'
        min={minSum}
        max={maxSum}
        onInputChange={onInputChange}
        value={sumValue}
        disabled={disabled}
      />
      <Range
        heading='Сумма вклада'
        param='sum'
        min={minSum}
        max={maxSum}
        onInputChange={onInputChange}
        value={sumValue}
        disabled={disabled}
      />
      <Input
        heading='Срок вклада'
        param='rate'
        min={minPeriod}
        max={maxPeriod}
        value={periodValue}
        onInputChange={onInputChange}
        disabled={disabled}
      />
      <Range
        heading='Срок вклада'
        param='rate'
        min={minPeriod}
        max={maxPeriod}
        value={periodValue}
        onInputChange={onInputChange}
        disabled={disabled}
      />
    </form>
  )
}