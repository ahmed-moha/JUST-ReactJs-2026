import React from 'react'
import { NameContext } from '../Context/AppContext';
import { useContext } from 'react';
function Footer() {
  const name=useContext(NameContext);
  return (
    <div>Footer {name}</div>
  )
}

export default Footer