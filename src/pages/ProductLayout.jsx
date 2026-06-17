import React from 'react'
import { Outlet } from 'react-router-dom'

function ProductLayout() {
  return (
    <div>
        <h1> Product Layout</h1>
        <Outlet/>
    </div>
  )
}

export default ProductLayout