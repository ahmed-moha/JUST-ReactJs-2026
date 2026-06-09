import useCounter from './hooks/useCounter';

function App() {
  const [count, increment, decrement, reset] = useCounter(0);
  const parity = count % 2 === 0 ? 'Even' : 'Odd';

  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>My Counter</h2>
      <p className='text-lg mb-4'>Count: {count}</p>
      <p className='text-lg mb-4'>The number is {parity}</p>

      <button className='bg-blue-500 text-white p-2 rounded-md m-2' onClick={increment}>Increment</button>
      <button className='bg-red-500 text-white p-2 rounded-md m-2' onClick={decrement}>Decrement</button>
      <button className='bg-green-500 text-white p-2 rounded-md m-2' onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
