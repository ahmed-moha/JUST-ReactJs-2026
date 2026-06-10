import React from 'react'
import { useParams } from 'react-router-dom';
function ProductDetail() {
    const {id}=useParams();
    const products=[
        {id:1,name:'Product 1',price:100},
        {id:2,name:'Product 2',price:200},
        {id:3,name:'Product 3',price:300},
    ];
    const product=products.find((product)=>product.id===Number(id));
    if(!product){
        return <div>Product not found</div>;
    }
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Detail</h1>
      <p className="text-gray-600 leading-relaxed mb-4">
        This is the detail page for the product {id}.
      </p>
    </div>
  )
}

export default ProductDetail