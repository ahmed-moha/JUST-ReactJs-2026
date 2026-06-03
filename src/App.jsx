import React, { useReducer, useState, memo, useCallback } from 'react'

// Child component that receives a function prop
const Button = memo(({onClick, text})=>{
  console.log("CHILD RENDERED", text);
  return (<button className="bg-blue-500 text-white p-2 rounded-md m-2" onClick={onClick}>{text}</button>)
});

// Parent component without useCallback
function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // This function is recreated on every render
  const handleClick1 =  useCallback(() => {
    setCount1(count1 + 1);
  },[count1]);

  const handleClick2 =  useCallback(() => {
    setCount2(count2 + 1);
  },[count2]);

  console.log("Parent rendered");
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Without useCallback:</h2>
      <p className="text-lg mb-4">Count 1: {count1}</p>
      <p className="text-lg mb-4">Count 2: {count2}</p>
      <Button onClick={handleClick1} text="Button 1" />
      <Button onClick={handleClick2} text="Button 2" />
    </div>
  );
}
export default App