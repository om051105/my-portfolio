import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FutureVision() {
  const textRef = useRef();

  useEffect(() => {
    gsap.fromTo(textRef.current,
      { opacity: 0, filter: 'blur(10px)', scale: 1.1 },
      {
        opacity: 1, filter: 'blur(0px)', scale: 1,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '#future-vision',
          start: 'top center',
          end: 'center center',
          scrub: true,
        }
      }
    );
  }, []);

  return (
    <section id="future-vision" className="h-[100vh] flex justify-center items-center px-6 relative">
      <div 
        ref={textRef} 
        className="max-w-5xl text-center"
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight text-white space-y-4">
          <span className="block text-gray-400">“Building intelligent systems</span>
          <span className="block">that <span className="text-glowRed font-bold text-glow">think</span>, <span className="text-glowRed font-bold text-glow">adapt</span>,</span>
          <span className="block text-gray-500">and secure the future”</span>
        </h2>
      </div>
    </section>
  );
}
