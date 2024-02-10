import { useEffect } from 'react';

export function useOutsideClick(handler, ref, listenCapturing = true) {
  useEffect(() => {
    const handleClick = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    };

    document.addEventListener('click', handleClick, listenCapturing);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [handler, ref, listenCapturing]);
}
