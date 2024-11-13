import { useRef } from 'react';
import CustomInput from './CustomInput';

const ForwardRef = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <CustomInput ref={inputRef} placeholder='Тицніть на кнопку для фокусу' />
      <button onClick={focusInput}>Focus</button>
    </div>
  );
};

export default ForwardRef;
