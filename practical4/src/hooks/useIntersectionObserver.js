import { useEffect, useState } from 'react';

/**
 * Hook to observe when an element enters the viewport
 * @param {Object} options - IntersectionObserver options
 * @param {boolean} freezeOnceVisible - Whether to stop observing once visible
 * @returns {[React.RefObject, boolean]} - Reference and isIntersecting flag
 */
export default function useIntersectionObserver({
  root = null,
  rootMargin = '0px',
  threshold = 0.1,
  freezeOnceVisible = false,
} = {}) {
  const [ref, setRef] = useState(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when observer callback is invoked
        setIsIntersecting(entry.isIntersecting);

        // If element should freeze once visible and is now visible,
        // disconnect the observer
        if (entry.isIntersecting && freezeOnceVisible) {
          observer.disconnect();
        }
      },
      { root, rootMargin, threshold }
    );

    observer.observe(ref);

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, root, rootMargin, threshold, freezeOnceVisible]);

  return [setRef, isIntersecting];
}