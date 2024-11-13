import { useEffect, useMemo, useRef, useState } from 'react';
import s from './Counter.module.css';

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);
  const [testValue, setTestValue] = useState(1);
  const refBtn = useRef();
  const fileRef = useRef();
  useEffect(() => {
    console.log(refBtn);
    // setInterval(() => {
    //   refBtn.current.click();
    // }, 1000);
  }, []);

  const renderCount = useRef(0);
  useEffect(() => {
    console.log(renderCount.current++);
  });

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
          <button id='btn' ref={refBtn} className='btn' onClick={handlePlusClick}>
            plus
          </button>
        </div>
        <h3>Result:{result}</h3>
        <button onClick={() => setTestValue(prev => prev + 1)}>Click</button>
        <input ref={fileRef} style={{ visibility: 'hidden' }} type='file' /> <button onClick={() => fileRef.current.click()}>Обрати файл</button>
        <button onClick={() => renderCount.current++}>Render count: {renderCount.current}</button>
      </div>
    </div>
  );
};
