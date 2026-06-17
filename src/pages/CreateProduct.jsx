import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createProduct } from '../services/product_services';

function CreateProduct() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    image: '',
    description: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (event) => {
    console.log(event.target);
    const { name, value } = event.target;
    console.log(event.target);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.price) {
      setError('Name and price are required');
      return;
    }
    try {
      setLoading(true);
      setError('');
      const created = await createProduct({
        name: formData.name.trim(),
        price: Number(formData.price),
        image: formData.image.trim(),
        description: formData.description.trim(),
      });
      navigate(`/products/${created._id}`);
    }catch(err){
      setError(err.message || 'Failed to create product');
    }finally{
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-xl">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Create Product</h1>
        <Link to="/products" className="text-sm text-blue-600 hover:text-blue-800">
          Back to products
        </Link>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
      >
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none"
            placeholder="Product name"
          />
        </div>

        <div>
          <label htmlFor="price" className="mb-1 block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            min="0"
            step="0.01"
            value={formData.price}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none"
            placeholder="0.00"
          />
        </div>

        <div>
          <label htmlFor="image" className="mb-1 block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="url"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div>
          <label htmlFor="description" className="mb-1 block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none"
            placeholder="Product description"
          />
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? 'Creating...' : 'Create Product'}
        </button>
      </form>
    </div>
  );
}

export default CreateProduct;
