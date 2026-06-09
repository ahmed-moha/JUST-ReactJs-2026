import { useReducer } from 'react';

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return action.payload;
    default:
      return state;
  }
};

const useCounter = (initialValue = 0) => {
  const [count, dispatch] = useReducer(counterReducer, initialValue);

  const increment = () => dispatch({ type: 'INCREMENT' });
  const decrement = () => dispatch({ type: 'DECREMENT' });
  const reset = () => dispatch({ type: 'RESET', payload: initialValue });

  return [count, increment, decrement, reset];
};

export default useCounter;
