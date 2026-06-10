import React from 'react'
import { Link } from 'react-router-dom';
function NotFound() {
  return (
    <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 leading-relaxed mb-4">The page you are looking for does not exist.</p>
        <Link to="/" className="text-blue-600 hover:underline">Go to Home</Link>
    </div>
  )
}

export default NotFound