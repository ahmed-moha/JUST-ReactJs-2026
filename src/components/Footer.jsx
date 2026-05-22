import React from 'react'
import NameContext from '../context/NameContext';
import { useContext } from 'react';
function Footer() {
    const {name} = useContext(NameContext);
  return (
    <div>
        <h2>This is the footer {name}</h2>
    </div>
  )
}

export default Footer