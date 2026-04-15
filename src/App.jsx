import { useState } from 'react';
import './style.css';
function App() {
  // let name = "AHMED"
  const [name, setName] = useState("ALI")
  const [age, setAge] = useState(20)
  const [counter, setCounter] = useState(0)
  const handleClick = (name) => {
    console.log("HELLOW " + name);
  }

  const handleName = () => {
    // name="MARYAMA";
    setName("MARYAMA")
    setAge(30)

    console.log(name)
  }

  const handleCounter = (isIncrement) => {
    if (isIncrement) {
      setCounter(counter + 1)
    } else {
      if(counter>0){
        setCounter(counter - 1)
      }
      
    }
  }

  return (
    <div className='m-20'>

      {/* <h2>{name} is {age} years old</h2> */}
      <h2>COUNTER: {counter}</h2>
      {/* <button className='p-2 bg-blue-500 text-white rounded hover:bg-blue-600' onClick={handleName}
      >Click Me</button> */}

      <button className='p-2 bg-blue-500 text-white rounded hover:bg-blue-600' onClick={() => handleCounter(true)}
      >INCREMEANT</button>


      <button className='p-2 bg-red-500 text-white rounded hover:bg-red-600' onClick={() => handleCounter(false)}
      >DECREMEANT</button>


    </div>


  )
}

export default App
