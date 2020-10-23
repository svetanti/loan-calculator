import React, { useContext } from 'react';
import Input from './Input';
import Range from './Range';
import Select from './Select';
import { DynamicContext } from '../contexts/DynamicContext';
import { DataContext } from '../contexts/DataContext';

export default function Form() {
  const { selectedOption,
    onSelect,
    minSum,
    maxSum,
    minPeriod,
    maxPeriod,
    userSumInput,
    userPeriodInput,
    sumValue,
    periodValue,
    onInputBlur,
    onInputChange,
    onRangeChange,
    disabled } = useContext(DynamicContext);

  const deposits = useContext(DataContext);

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
        onInputBlur={onInputBlur}
        onInputChange={onInputChange}
        userInput={userSumInput}
        disabled={disabled} />
      <Range
        heading='Сумма вклада'
        param='sum'
        min={minSum}
        max={maxSum}
        onRangeChange={onRangeChange}
        value={sumValue}
        disabled={disabled} />
      <Input
        heading='Срок вклада'
        param='period'
        min={minPeriod}
        max={maxPeriod}
        userInput={userPeriodInput}
        onInputBlur={onInputBlur}
        onInputChange={onInputChange}
        disabled={disabled} />
      <Range
        heading='Срок вклада'
        param='period'
        min={minPeriod}
        max={maxPeriod}
        value={periodValue}
        onRangeChange={onRangeChange}
        disabled={disabled} />
    </form>
  )
}