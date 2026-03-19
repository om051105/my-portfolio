import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Cursor() {
  const dot = useRef();
  const ring = useRef();

  useEffect(() => {
    const onMove = ({ clientX: x, clientY: y }) => {
      gsap.to(dot.current,  { x, y, duration: 0.08, ease: 'none' });
      gsap.to(ring.current, { x, y, duration: 0.35, ease: 'power2.out' });
    };

    const onEnter = () => {
      gsap.to(ring.current, { scale: 2.5, opacity: 0.4, duration: 0.3 });
    };
    const onLeave = () => {
      gsap.to(ring.current, { scale: 1, opacity: 1, duration: 0.3 });
    };

    const links = document.querySelectorAll('a, button');
    links.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      links.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Small solid dot */}
      <div ref={dot} className="fixed w-1.5 h-1.5 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 top-0 left-0"
        style={{ background: 'var(--accent)' }} />
      {/* Outer ring */}
      <div ref={ring} className="fixed w-8 h-8 rounded-full border border-white/30 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 top-0 left-0" />
    </>
  );
}
