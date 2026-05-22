import React from 'react'
import NameContext from '../context/NameContext';
import { useContext } from 'react';
import Footer from './Footer';
function Navbar() {
    const {name, age, setName, setAge} = useContext(NameContext);
    return (                
        <div>
            <h2>My name is {name} and my age is {age}</h2>

            <button className='bg-blue-500 text-white p-2 rounded-md' onClick={() => setName("Faarax")}>Change Name</button>

            <Footer/>
        </div>
    )
}

export default Navbar