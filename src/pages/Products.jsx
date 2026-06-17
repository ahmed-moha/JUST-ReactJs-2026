import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../services/product_services';
import ProductCard from '../components/ProductCard';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchProducts(){
      try {
        setLoading(true);
        setError('');
        const data=await getAllProducts();
        setProducts(data);
      }catch(err){
        setError(err.message || 'Failed to fetch products');
      }finally{
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-600">Loading products...</p>;
  }

  if (error) {
    return <p className="text-center text-red-600">{error}</p>;
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Products</h1>
        <Link
          to="/products/create"
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Create Product
        </Link>
      </div>

      {products.length === 0 ? (
        <p className="text-center text-gray-600">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
