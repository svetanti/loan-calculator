import React, { useState } from 'react';
import { deposits } from '../data/depcalc.json';
import Calculator from './Calculator';

function App() {
  const [sum, setSum] = useState('');
  const [rate, setRate] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedDeposit, setSelectedDeposit] = useState([]);
  const [minSum, setMinSum] = useState('');
  const [maxSum, setMaxSum] = useState('');
  const [minPeriod, setMinPeriod] = useState('');
  const [maxPeriod, setMaxPeriod] = useState('');
  const [sumValue, setSumValue] = useState('');
  const [periodValue, setPeriodValue] = useState('');
  const [disabled, setDisabled] = useState(true);

  function hanldeSelectDeposit(evt) {
    setSelectedOption(evt.target.value);

    const currentDeposit = deposits.find((deposit) => deposit.code === evt.target.value);
    setSelectedDeposit(currentDeposit);

    const currentParams = currentDeposit.param;
    setMinAndMax(currentParams);
    setDisabled(false);
  }

  function setMinAndMax(current) {
    const firstParam = current[0];
    const lastParam = current[current.length - 1];
    const summsAndRate = firstParam.summs_and_rate;

    setMinPeriod(firstParam.period_from);
    setMaxPeriod(lastParam.period_from);

    setMinSum(summsAndRate[0].summ_from);
    setMaxSum(summsAndRate[summsAndRate.length - 1].summ_from);
  }

  function handleInputChange(evt) {
    evt.target.id === 'sum' ? setSumValue(evt.target.value) : setPeriodValue(evt.target.value);
  }

  return (
    <div className="page">
      <Calculator
        deposits={deposits}
        selectedOption={selectedOption}
        onSelect={hanldeSelectDeposit}
        deposit={selectedDeposit.name}
        minSum={minSum}
        maxSum={maxSum}
        minPeriod={minPeriod}
        maxPeriod={maxPeriod}
        sumValue={sumValue}
        periodValue={periodValue}
        period={periodValue}
        sum={sum}
        rate={rate}
        onInputChange={handleInputChange}
        disabled={disabled}
      />
    </div>
  );
}

export default App;
