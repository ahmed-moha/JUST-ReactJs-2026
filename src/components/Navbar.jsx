import { useNavigate, Link, NavLink, useLocation } from 'react-router-dom'
 
function Navbar() {
const navigate = useNavigate()
const location = useLocation()

  const linkClass = (path) =>
    `px-4 py-2 text-sm font-medium rounded-md transition-colors
    ${location.pathname === path ? 'bg-blue-100 text-blue-900' : 'text-gray-600 hover:text-gray-900'}`;

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <span to="/" className="text-xl font-semibold text-gray-900 tracking-tight">
            My App
          </span>

          <ul className="flex items-center gap-2">
            <li>
              <button
                type="button"
                onClick={()=>navigate('/')}
                className={linkClass('/')}
              >
                Home
              </button>
            </li>
            <li>
              <button
              type='button'
               onClick={()=>navigate('/about')}
                className={linkClass('/about')}
              >
                About
              </button>
              {/* <NavLink to="/about" className={linkClass('/about')}>
                About
              </NavLink> */}
            </li>
            <li>
              {/* <NavLink to="/contact" className={linkClass('/contact')}>
                Contact
              </NavLink> */}
              <button
                type='button'
                onClick={()=>navigate('/contact')}
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
