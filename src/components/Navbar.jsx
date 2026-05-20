import React from 'react'
import { NameContext } from '../Context/AppContext';
import { useContext } from 'react';

function Navbar() {
  const {name,age}=useContext(NameContext);
  return (
    <div>Navbar {name} {age}</div>
  )
}

export default Navbar