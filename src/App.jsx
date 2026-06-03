import React, { useState, useMemo } from 'react'
const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for(let i=0; i<1000000000; i++){
    num = num+1;
  }
  return num;
}
function App() {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState([]);
const calculatedValue = expensiveCalculation(count);
  const handleCounter=()=>{
    setCount(count + 1);
  }

  const handleTodo=()=>{
    setTodo([...todo, {id: todo.length + 1, text: "Todo " + (todo.length + 1)}]);
  }
  return (
    <div>

      <h2 className='text-2xl font-bold mb-4'>My Todos</h2>
      <ul className='list-disc list-inside'>
        {todo.map((todo)=>(
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <button className='bg-blue-500 text-white p-2 rounded-md m-2' onClick={handleTodo}>Add Todo</button>
      <hr />
      <h2 className='text-2xl font-bold mb-4'>My Counter</h2>
      <p className='text-lg mb-4'>Count: {count}</p>
      <p className='text-lg mb-4'>Calculated Value: {calculatedValue}</p>
      <button className='bg-blue-500 text-white p-2 rounded-md m-2' onClick={handleCounter}>Increment</button>
    </div>
  )
}

export default App