import React from 'react'
import { Outlet } from 'react-router-dom';
function ProductLayout() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Layout</h1>
      <Outlet />
    </div>
  )
}

export default ProductLayout