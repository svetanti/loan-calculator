import React, { useState, useEffect } from 'react';
import { deposits } from '../data/depcalc.json';
import calculations from '../utils/calculations';
import Calculator from './Calculator';

function App() {
  const [sum, setSum] = useState(null)
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

  const [selectedPeriod, setSelectedPeriod] = useState();

  useEffect(() => {
    if (periodValue && selectedDeposit) {
      const depositParams = selectedDeposit.param;

      const days = depositParams.filter((param) => param.period_from <= +periodValue);
      const currentPeriodSumsAndRate = days[days.length - 1].summs_and_rate;
      setSelectedPeriod(currentPeriodSumsAndRate);
      setMinSum(currentPeriodSumsAndRate[0].summ_from);
      setMaxSum(currentPeriodSumsAndRate[currentPeriodSumsAndRate.length - 1].summ_from);
    }
  }, [periodValue, selectedDeposit]);

  useEffect(() => {
    if (selectedPeriod && sumValue) {
      const sums = selectedPeriod.filter((sum) => sum.summ_from <= sumValue);
      const currentSum = sums[sums.length - 1].rate;
      setRate(currentSum);
      setSum(calculations(sumValue, rate, periodValue));
    }
  }, [maxSum, periodValue, rate, selectedPeriod, sum, sumValue]);

  function hanldeSelectDeposit(evt) {
    setSelectedOption(evt.target.value);

    const currentDeposit = deposits.find((deposit) => deposit.code === evt.target.value);
    setSelectedDeposit(currentDeposit);
    setMinAndMax(currentDeposit);
    setDisabled(false);
  }

  function setMinAndMax(current) {
    const depositParams = current.param;
    const firstParam = depositParams[0];
    const lastParam = depositParams[depositParams.length - 1];
    setMinPeriod(firstParam.period_from);
    setMaxPeriod(lastParam.period_from);
    setPeriodValue(firstParam.period_from);
    setSumValue(firstParam.summs_and_rate[0].summ_from);
    setRate(firstParam.summs_and_rate[0].rate);
  }

  function handleInputChange(evt) {
    evt.target.id === 'sum' ? setSumValue(evt.target.value) : setPeriodValue(evt.target.value);
    evt.target.value < minSum && setSumValue(minSum);
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
