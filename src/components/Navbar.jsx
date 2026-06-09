import { useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const linkClass = (path) =>
    `px-4 py-2 text-sm font-medium rounded-md transition-colors ${
      location.pathname === path
        ? 'text-blue-600 bg-blue-50'
        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
    }`;

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold text-gray-900 tracking-tight">
            My App
          </span>

          <ul className="flex items-center gap-2">
            <li>
              <button
                type="button"
                onClick={() => navigate('/')}
                className={linkClass('/')}
              >
                Home
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => navigate('/about')}
                className={linkClass('/about')}
              >
                About
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => navigate('/contact')}
                className={linkClass('/contact')}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
