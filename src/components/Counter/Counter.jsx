import { useState } from 'react';
import s from './Counter.module.css';

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(111);
  const handlePlusClick = () => {
    // setCounter(0 + 1);
    // setCounter(0 + 1);
    // setCounter(0 + 1);
    setCounter(prev => prev + step);
    console.log(counter);
  };
  const handleMinusClick = () => {
    setCounter(prev => prev - step);
  };

  const handleReset = () => {
    setCounter(0);
    setStep(1);
  };
  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{counter}</h1>
        <input
          onChange={e => {
            setStep(+e.target.value);
          }}
        />
        <div className={s.flex}>
          <button className='btn' onClick={handleMinusClick}>
            minus
          </button>
          <button className='btn' onClick={handleReset}>
            reset
          </button>
          <button className='btn' onClick={handlePlusClick}>
            plus
          </button>
        </div>
      </div>
    </div>
  );
};
