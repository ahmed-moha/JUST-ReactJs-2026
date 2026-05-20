import React, { use } from 'react'
import { useContext,createContext } from 'react';
import { NameContext } from './Context/AppContext';
import Navbar from './components/Navbar';
function App() {
  const name="Ahmed";
  const age=20;
  return (
    <div>
      
      <h1>App Component</h1>
     <NameContext.Provider value={{name,age}}>
     <Navbar/>
     </NameContext.Provider>
      
    </div>
  )
}

export default App

function ComponentOne(){
  return (
    <div>
      <h1>Component One</h1>
      <Navbar />
    </div>
  )
}

function ComponentTwo(){
  const magac=useContext(NameContext);
  return (
    <div>
      <h1>Component Two {magac}</h1>
      <ComponentThree />
    </div>
  )
}

function ComponentThree(){
  const name=useContext(NameContext);
  return (
    <div>
      <h1>Component Three</h1>
      <h2>Welcome: {name}</h2>
    </div>
  )
}