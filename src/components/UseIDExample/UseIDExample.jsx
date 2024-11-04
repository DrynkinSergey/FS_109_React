import { useState } from 'react';
import CustomInput from './CustomInput';

const UseIDExample = () => {
  const [inputCount, setInputCount] = useState(1);
  const pageCount = 12;
  return (
    <div>
      <button onClick={() => setInputCount(prev => prev + 1)}>ADD</button>
      <button onClick={() => setInputCount(prev => prev - 1)}>REMOVE</button>
      {Array(inputCount)
        .fill('')
        .map((_, idx) => (
          <CustomInput key={idx} />
        ))}

      {Array(pageCount)
        .fill('')
        .map((_, idx) => (
          <button key={idx}>{idx + 1}</button>
        ))}
    </div>
  );
};
export default UseIDExample;
