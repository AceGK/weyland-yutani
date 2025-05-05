import { useEffect } from 'react';

export default function useScrollHash(ids = []) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            if (window.location.hash !== `#${sectionId}`) {
              history.replaceState(null, '', `#${sectionId}`);
            }
            break;
          }
        }
      },
      {
        root: null,
        rootMargin: '0px 0px -25% 0px',
        threshold: 0.1,
      }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);
}
