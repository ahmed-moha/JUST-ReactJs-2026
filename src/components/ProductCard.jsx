import { useNavigate } from 'react-router-dom';

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(`/products/${product._id}`)}
      className="w-full rounded-lg border border-gray-200 bg-white p-4 text-left shadow-sm transition hover:border-blue-300 hover:shadow-md"
    >
      <img
        src={product.image}
        alt={product.name}
        className="mb-3 h-40 w-full rounded-md object-cover"
      />
      <h2 className="text-lg font-semibold text-gray-900">{product.name}</h2>
      <p className="mt-1 text-sm text-gray-500 line-clamp-2">{product.description}</p>
      <p className="mt-3 text-base font-bold text-blue-600">${product.price}</p>
    </button>
  );
}

export default ProductCard;
