import { memo } from 'react';

// Child component used in the W3Schools useCallback example
const CallbackButton = memo(({ onClick, text }) => {
  alert(`Child ${text} button rendered`);

  return (
    <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md m-1" onClick={onClick}>
      {text}
    </button>
  );
});

CallbackButton.displayName = 'CallbackButton';

export default CallbackButton;
