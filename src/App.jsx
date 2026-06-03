import React, { useReducer, useState } from 'react'
//  REDUCER
const handleCounter=(state,action)=>{
  if(action.nuuc==="inc"){
    return state+=1;
  }else if(action.nuuc==="dec"){
    return state-=1;
  } else if(action.nuuc==="reset"){
    return state=0;
  }else if(action.type==="amount"){
    return state=state+action.amount;
  }

  return state;
}
function App() {
  console.log("RENDER");
//  const [count, setCount]=useState(0)
const [count,dispatch]=useReducer(handleCounter,0);
 const [amount,setAmount]=useState();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black">
      <div className="w-full max-w-sm bg-gray-200 rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Counter</h1>

        <p className="text-lg mb-4">Count:{count} </p>

        <div className="flex gap-2 mb-4">
          <button
            className="bg-blue-500 px-3 py-2 rounded text-white"
            onClick={()=> dispatch({nuuc:"inc"})}
          >
            +1
          </button>
          <button className="bg-red-500 px-3 py-2 rounded text-white"
            onClick={()=>dispatch({nuuc:"dec"})}
          >
            -1
          </button>
          <button className="bg-gray-600 px-3 py-2 rounded text-white"
            onClick={()=> dispatch({nuuc:"reset"})}
          >
            Reset
          </button>
        </div>

        <div className="flex gap-2">
          <input
            type="number"
            className="w-24 rounded px-2 py-1 text-black border border-gray-300"
            value={amount}
            onChange={(e)=>setAmount(Number(e.target.value))}
          />
          <button
            className="bg-emerald-500 px-3 py-2 rounded text-white"
            onClick={()=> dispatch({type:"amount", amount:amount})}
          >
            Add Amount
          </button>
        </div>
      </div>
    </div>
  );
}

export default App