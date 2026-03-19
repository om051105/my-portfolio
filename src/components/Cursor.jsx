import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Cursor() {
  const dot  = useRef();
  const ring = useRef();

  useEffect(() => {
    const onMove = ({ clientX: x, clientY: y }) => {
      gsap.to(dot.current,  { x, y, duration: 0.06, ease: 'none' });
      gsap.to(ring.current, { x, y, duration: 0.28, ease: 'power2.out' });
    };

    const onEnter = () => gsap.to(ring.current, { scale: 2.2, duration: 0.25 });
    const onLeave = () => gsap.to(ring.current, { scale: 1,   duration: 0.25 });

    window.addEventListener('mousemove', onMove);

    // Attach to interactive elements lazily so dynamic elements are included
    const attach = () => {
      document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };
    attach();
    const obs = new MutationObserver(attach);
    obs.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      obs.disconnect();
    };
  }, []);

  return (
    <>
      {/* Tiny sharp dot — always crisp and on top */}
      <div
        ref={dot}
        className="fixed top-0 left-0 z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)' }}
      />
      {/* Trailing ring — blend-mode so it never covers text */}
      <div
        ref={ring}
        className="fixed top-0 left-0 z-[9998] pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 28, height: 28,
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.2)',
          mixBlendMode: 'difference',
        }}
      />
    </>
  );
}
