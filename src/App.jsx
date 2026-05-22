import React from 'react'
import { useContext, createContext, useState } from 'react';
import NameContext from './context/NameContext';
import Navbar from './components/Navbar';
function App() {
 const [name, setName] = useState("Ahmed");
 const [age, setAge] = useState(20);
  return (
    <div>Hellow

      <NameContext.Provider value={{name,age,setName,setAge}}>
       <Navbar />
      </NameContext.Provider>
    </div>
  )
}

export default App


function ComponentOne(){
  return (
    <div>ComponentOne


      <ComponentTwo />
    </div>
  )
}

function ComponentTwo(){
  return (
    <div>ComponentTwo
      <ComponentThree />
    </div>
  )
}   

function ComponentThree(){
  const name=useContext(NameContext);
  return (
    <div>Welcome {name}</div>
  )
}