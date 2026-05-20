import React, { useState, useRef } from 'react'

function App() {
  console.log("App Component Rendered");
  const [counter,setCounter]=useState(0);
  let refCounter=useRef(0);
  const inputRef=useRef(null);


  const handleCounterIncrement=()=>{
    setCounter(counter+1);
    
  }

  const handleRefCounterIncrement=()=>{
    refCounter.current+=1;
    console.log("Ref Counter",refCounter.current);
  }

  const handleInputFocus=()=>{
    inputRef.current.focus();
  }
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      {/* <h1 className='text-2xl font-bold'>Counter: {counter}</h1>
      <h1 className='text-2xl font-bold'>Ref Counter: {refCounter.current}</h1>
      <button className='bg-blue-500 text-white p-2 rounded-md' onClick={handleCounterIncrement}>Increment</button> */}
      <input className='border-2 border-gray-300 p-2 rounded-md' type="text" ref={inputRef}
      placeholder='Enter your name'
      />
      <button className='bg-green-500 mt-4 text-white p-2 rounded-md' onClick={handleInputFocus}>Increment Ref</button>
    </div>
  )
}

export default App