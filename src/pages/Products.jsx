import React from 'react'

function Products() {
  const products=[
    {id:1,name:'Product 1',price:100},
    {id:2,name:'Product 2',price:200},
    {id:3,name:'Product 3',price:300},
  ];
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Products</h1>
      <ul className="space-y-3 text-gray-700">
        {products.map((product)=>(
          <li key={product.id}>{product.name} - {product.price}</li>
        ))}
      </ul>
    </div>
  )
}

export default Products