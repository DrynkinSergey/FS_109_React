import { useEffect, useState } from 'react';
import s from './Counter.module.css';

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  useEffect(() => {
    console.log('Counter was mounted!');
  }, []);

  useEffect(() => {
    console.log(`Counter was changed! Current counter is: ${counter}`);
  }, [counter]);

  useEffect(() => {
    console.log(`Step was changed! Current Step is: ${step}`);
  }, [step]);

  useEffect(() => {
    console.log(`Step or Counter was changed! `);
  }, [step, counter]);

  const handlePlusClick = () => {
    setCounter(prev => prev + step);
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
