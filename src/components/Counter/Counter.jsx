import s from './Counter.module.css';

export const Counter = () => {
  const sayMyName = e => {
    console.log('Hello');
    console.log(e);
  };
  const sayMyNameWithName = name => {
    console.log(`Hello, ${name}`);
  };

  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{1}</h1>
        <div className={s.flex}>
          <button className='btn' onClick={() => sayMyNameWithName('Serhii')}>
            minus
          </button>
          <button className='btn' onClick={sayMyName}>
            reset
          </button>
          <button className='btn' onClick={() => console.log('Hello world')}>
            plus
          </button>
        </div>
      </div>
    </div>
  );
};
