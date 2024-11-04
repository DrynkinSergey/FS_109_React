import { useId } from 'react';

const CustomInput = () => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>This is my custom input: </label>
      <input id={id} />
    </div>
  );
};
export default CustomInput;
