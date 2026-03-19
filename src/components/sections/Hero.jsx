import Typewriter from 'typewriter-effect';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const lineA = useRef(); const lineB = useRef(); const lineC = useRef();
  const sub = useRef(); const cta = useRef(); const scrollHint = useRef();

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });
    tl.fromTo(lineA.current,    { yPercent: 110, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1.1, ease: 'expo.out' })
      .fromTo(lineB.current,    { yPercent: 110, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1.1, ease: 'expo.out' }, '-=0.8')
      .fromTo(lineC.current,    { yPercent: 110, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1.1, ease: 'expo.out' }, '-=0.8')
      .fromTo(sub.current,      { opacity: 0, y: 20 },         { opacity: 1, y: 0, duration: 0.8 }, '-=0.3')
      .fromTo(cta.current,      { opacity: 0, y: 20 },         { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
      .fromTo(scrollHint.current,{ opacity: 0 },               { opacity: 1, duration: 1 },          '-=0.3');
  }, []);

  return (
    <section id="hero" className="relative h-screen flex flex-col justify-end pb-20 px-6 md:px-20 overflow-hidden">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(232,228,218,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(232,228,218,0.03) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Top-left badge */}
      <div className="absolute top-20 left-6 md:left-20 flex items-center gap-3">
        <span className="accent-line" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#5A5A72] font-medium">
          Portfolio — 2025
        </span>
      </div>

      {/* Top-right descriptor */}
      <div className="absolute top-20 right-6 md:right-20 text-right hidden md:block">
        <p className="text-[10px] uppercase tracking-widest text-[#5A5A72]">Haridwar, India</p>
        <p className="text-[10px] uppercase tracking-widest text-[#5A5A72] mt-1">BCA @ LPU</p>
      </div>

      {/* Main headline */}
      <div className="relative z-10 mb-12">
        <div className="overflow-hidden">
          <h1 ref={lineA} className="font-display text-[18vw] md:text-[13vw] font-bold leading-[0.82] tracking-tighter text-[#E8E4DA] uppercase">
            Hello,
          </h1>
        </div>
        <div className="overflow-hidden">
          <h1 ref={lineB} className="font-display text-[18vw] md:text-[13vw] font-bold leading-[0.82] tracking-tighter uppercase"
            style={{ color: 'var(--accent)' }}>
            I'm Om
          </h1>
        </div>
        <div className="overflow-hidden">
          <h1 ref={lineC} className="font-display text-[5vw] md:text-[3.5vw] font-bold leading-[1] tracking-tight text-[#5A5A72] uppercase mt-4">
            Machine Learning Engineer
          </h1>
        </div>
      </div>

      {/* Bottom row */}
      <div ref={cta} className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-t border-white/6 pt-8">
        <div ref={sub} className="max-w-xs">
          <div className="text-sm font-medium mb-1" style={{ color: 'var(--accent)' }}>
            <Typewriter options={{
              strings: ['Deep Learning Architect', 'Computer Vision Expert', 'Reinforcement Learning Dev', 'NLP & RAG Systems'],
              autoStart: true, loop: true, delay: 55, deleteSpeed: 25,
            }} />
          </div>
          <p className="text-xs text-[#5A5A72] leading-relaxed">
            Building intelligent systems — from raw sensor data to deployed AI at scale.
          </p>
        </div>

        <div className="flex gap-4 flex-wrap">
          <a href="#about"
            onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth'}); }}
            className="px-7 py-3 text-xs uppercase tracking-widest font-bold text-white rounded-full transition-all duration-300"
            style={{ background: 'var(--accent)' }}>
            Read Story
          </a>
          <a href="https://github.com/om051105" target="_blank" rel="noreferrer"
            className="px-7 py-3 text-xs uppercase tracking-widest font-bold text-[#E8E4DA] border border-white/10 rounded-full hover:bg-white/5 transition-all duration-300">
            GitHub →
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div ref={scrollHint} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-px h-14 bg-gradient-to-b from-[#E8E4DA] to-transparent animate-[float_2s_ease-in-out_infinite]" />
        <span className="text-[9px] uppercase tracking-[0.3em] text-[#5A5A72]">scroll</span>
      </div>
    </section>
  );
}
