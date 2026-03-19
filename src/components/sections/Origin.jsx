import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Origin() {
  const textRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: '#origin-section',
          start: 'top center',
          end: 'center center',
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <section id="origin-section" className="h-[100vh] flex flex-col justify-center items-center px-4">
      <div className="max-w-3xl text-center" ref={textRef}>
        <p className="text-3xl md:text-5xl font-light text-gray-400">
          “Started with curiosity…”
        </p>
      </div>
    </section>
  );
}
