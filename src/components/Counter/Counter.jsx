import { useMemo, useState } from 'react';
import s from './Counter.module.css';

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);
  const [testValue, setTestValue] = useState(1);

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

  // const calcValue = () => {
  //   console.log('Calc start');
  //   for (let i = 0; i < 1000_000_000; i++) {}
  //   console.log('Calc end');
  //   return 2 + 2;
  // };
  // const result = calcValue();
  const result = useMemo(() => {
    console.log('Calc start');
    for (let i = 0; i < 1000_000_000; i++) {}
    console.log('Calc end');
    return testValue * testValue;
  }, [testValue]);

  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{counter}</h1>
        <input
          value={step}
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
        <h3>Result:{result}</h3>
        <button onClick={() => setTestValue(prev => prev + 1)}>Click</button>
      </div>
    </div>
  );
};
