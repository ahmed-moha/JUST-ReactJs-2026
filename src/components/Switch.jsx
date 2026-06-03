import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

function Switch({ isDark }) {
  const setIsDark = useContext(ThemeContext);

  return (
    <button
      type="button"
      className="rounded bg-gray-700 px-4 py-2 text-white"
      onClick={() => setIsDark((prev) => !prev)}
    >
      {isDark ? 'Light mode' : 'Dark mode'}
    </button>
  );
}

export default Switch;
