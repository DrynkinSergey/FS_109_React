import { createAction } from '@reduxjs/toolkit';

// export const increment = () => {
//   return { type: 'UPDATE_VALUE_BY_STEP' };
// };
// export const decrement = () => {
//   return { type: 'DECREMENT' };
// };
// export const reset = () => {
//   return { type: 'RESET' };
// };
// export const changeStep = step => {
//   return { type: 'CHANGE_STEP', payload: step };
// };

export const increment = createAction('increment'); // > {type:'increment', payload:undefined}
export const decrement = createAction('decrement');
export const reset = createAction('reset');
export const changeStep = createAction('changeStep'); // > {type:'changeStep', payload:undefined}

console.log(changeStep());
console.log(changeStep(5));
console.log(changeStep([1, 2, 3, 4]));
