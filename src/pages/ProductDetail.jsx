import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProductById } from '../services/product_services';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchProduct(){
      try {
        setLoading(true);
        setError('');
        const data=await getProductById(id);
        setProduct(data);
      }catch(err){
        setError(err.message || 'Failed to fetch product');
      }finally{
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id])
  if (loading) {
    return <p className="text-gray-600">Loading product...</p>;
  }

  if (error) {
    return <p className="text-red-600">{error}</p>;
  }

  if (!product) {
    return <p className="text-gray-600">Product not found</p>;
  }

  return (
    <div>
      <Link to="/products" className="mb-4 inline-block text-sm text-blue-600 hover:text-blue-800">
        Back to products
      </Link>

      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <img
          src={product.image}
          alt={product.name}
          className="mb-4 h-64 w-full rounded-md object-cover"
        />
        <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
        <p className="mt-2 text-2xl font-semibold text-blue-600">${product.price}</p>
        <p className="mt-4 text-gray-600 leading-relaxed">{product.description}</p>
      </div>
    </div>
  );
}

export default ProductDetail;
