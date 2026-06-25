import { useCallback, useState } from 'react';
import CallbackButton from '../components/CallbackButton';

// W3Schools useCallback example (without useCallback)
// Functions are recreated on every parent render, so memoized children re-render too.
function WithoutCallbackExample() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleClick1 = () => {
    setCount1(count1 + 1);
  };

  const handleClick2 = () => {
    setCount2(count2 + 1);
  };

  alert('Parent rendered');

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Without useCallback</h3>
      <p>Count 1: {count1}</p>
      <p>Count 2: {count2}</p>
      <CallbackButton onClick={handleClick1} text="Button 1" />
      <CallbackButton onClick={handleClick2} text="Button 2" />
    </div>
  );
}

// W3Schools useCallback example (with useCallback)
// Memoized functions keep the same reference unless dependencies change.
function WithCallbackExample() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleClick1 = useCallback(() => {
    setCount1((value) => value + 1);
  }, []);

  const handleClick2 = useCallback(() => {
    setCount2((value) => value + 1);
  }, []);

  alert('Parent rendered');

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">With useCallback</h3>
      <p>Count 1: {count1}</p>
      <p>Count 2: {count2}</p>
      <CallbackButton onClick={handleClick1} text="Button 1" />
      <CallbackButton onClick={handleClick2} text="Button 2" />
    </div>
  );
}

export { WithoutCallbackExample, WithCallbackExample };
