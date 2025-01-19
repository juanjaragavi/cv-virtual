import { useEffect } from 'react';

function ScrollRestoration() {
  useEffect(() => {
    // Save scroll position before navigation
    const handleBeforeUnload = () => {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    };

    // Restore scroll position after navigation
    const handleLoad = () => {
      const savedPosition = sessionStorage.getItem('scrollPosition');
      if (savedPosition) {
        window.scrollTo(0, parseInt(savedPosition));
        sessionStorage.removeItem('scrollPosition');
      } else {
        window.scrollTo(0, 0);
      }
    };

    // Handle hash changes
    const handleHashChange = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('load', handleLoad);
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('load', handleLoad);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return null;
}

export default ScrollRestoration;
