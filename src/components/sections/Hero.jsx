import Typewriter from 'typewriter-effect';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const heroRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' }
    );
  }, []);

  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4" ref={heroRef}>
      <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wider">
        Hi, I'm <span className="text-glowRed">Om</span>
      </h1>
      <div className="text-xl md:text-3xl text-gray-300 h-16">
        <Typewriter
          options={{
            strings: ['I build intelligence into systems', 'Full Stack Developer', 'AI Explorer'],
            autoStart: true,
            loop: true,
            delay: 50,
            deleteSpeed: 30,
          }}
        />
      </div>
    </section>
  );
}
