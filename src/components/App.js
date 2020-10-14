import React, { useState, useEffect } from 'react';
import { deposits } from '../data/depcalc.json';
import calculations from '../utils/calculations';
import Calculator from './Calculator';

function App() {
  const [sum, setSum] = useState(0)
  const [rate, setRate] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedDeposit, setSelectedDeposit] = useState([]);
  const [minSum, setMinSum] = useState(0);
  const [maxSum, setMaxSum] = useState(0);
  const [minPeriod, setMinPeriod] = useState(0);
  const [maxPeriod, setMaxPeriod] = useState(0);
  const [sumValue, setSumValue] = useState(0);
  const [periodValue, setPeriodValue] = useState(0);
  const [disabled, setDisabled] = useState(true);

  const [selectedPeriod, setSelectedPeriod] = useState(0);
  const [userSumInput, setUserSumInput] = useState(0);
  const [userPeriodInput, setUserPeriodInput] = useState(0);

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
      const sums = selectedPeriod.filter((sum) => {
        if (sumValue < selectedPeriod[0].summ_from) {
          return selectedPeriod[0];
        }
        return sum.summ_from <= sumValue;
      });
      const currentSum = sums[sums.length - 1].rate;
      setRate(currentSum);
      setSum(calculations(sumValue, rate, periodValue));
    }
  }, [periodValue, rate, selectedPeriod, sum, sumValue]);

  useEffect(() => {
    if (sumValue < minSum && userSumInput < minSum) {
      setSumValue(minSum);
      setUserSumInput(minSum);
    }
  }, [sumValue, minSum, userSumInput])

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
    setUserSumInput(firstParam.summs_and_rate[0].summ_from);
    setUserPeriodInput(firstParam.period_from);
    setRate(firstParam.summs_and_rate[0].rate);
  }

  function handleRangeChange(evt) {
    if (evt.target.id === 'sum') {
      setSumValue(evt.target.value);
      setUserSumInput(evt.target.value);
    } else {
      setPeriodValue(evt.target.value);
      setUserPeriodInput(evt.target.value);
    }
  }

  function handleInputChange(evt) {
    if (evt.target.id === 'sumInput') {
      setUserSumInput(evt.target.value);
      evt.target.value > minSum ? setSumValue(evt.target.value) : setSumValue(minSum);
      return;
    }
    setUserPeriodInput(evt.target.value);
    evt.target.value < minPeriod ? setPeriodValue(minPeriod) : setPeriodValue(evt.target.value);
  }

  function onInputBlur(evt) {
    if (evt.target.id === 'sumInput') {
      if (userSumInput < minSum) {
        setUserSumInput(minSum);
      }
      else {
        setUserSumInput(evt.target.value);
        setSumValue(evt.target.value);
      }
      return;
    }
    setUserPeriodInput(evt.target.value);
    evt.target.value < minPeriod ? setPeriodValue(minPeriod) : setPeriodValue(evt.target.value);
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
        userSumInput={userSumInput}
        userPeriodInput={userPeriodInput}
        sumValue={sumValue}
        periodValue={periodValue}
        period={periodValue}
        sum={sum}
        rate={rate}
        onInputBlur={onInputBlur}
        onInputChange={handleInputChange}
        onRangeChange={handleRangeChange}
        disabled={disabled}
      />
    </div>
  );
}

export default App;
