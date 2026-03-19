import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function FutureVision() {
  const sec = useRef();

  useEffect(() => {
    gsap.fromTo('.vision-line',
      { yPercent: 100, opacity: 0 },
      { yPercent: 0, opacity: 1, stagger: 0.15, duration: 1.1, ease: 'expo.out',
        scrollTrigger: { trigger: sec.current, start: 'top 75%' } }
    );
  }, []);

  return (
    <section id="future-vision" className="relative min-h-screen flex items-center px-6 md:px-20 py-32 border-t border-white/5" ref={sec}>
      <span className="chapter-number">END</span>

      <div className="relative z-10 w-full max-w-4xl">
        <div className="flex items-center gap-3 mb-14">
          <span className="accent-line" />
          <span className="text-[11px] uppercase tracking-[0.25em] font-semibold" style={{ color: 'var(--accent)' }}>
            Epilogue — Vision
          </span>
        </div>

        <div className="overflow-hidden mb-3">
          <div className="vision-line font-display text-4xl md:text-6xl xl:text-7xl font-bold tracking-tighter leading-[0.9] text-[#5A5A72] uppercase">
            "Building
          </div>
        </div>
        <div className="overflow-hidden mb-3">
          <div className="vision-line font-display text-4xl md:text-6xl xl:text-7xl font-bold tracking-tighter leading-[0.9] text-[#E8E4DA] uppercase">
            intelligent
          </div>
        </div>
        <div className="overflow-hidden mb-3">
          <div className="vision-line font-display text-4xl md:text-6xl xl:text-7xl font-bold tracking-tighter leading-[0.9] uppercase"
            style={{ color: 'var(--accent)' }}>
            systems that
          </div>
        </div>
        <div className="overflow-hidden mb-3">
          <div className="vision-line font-display text-4xl md:text-6xl xl:text-7xl font-bold tracking-tighter leading-[0.9] text-[#E8E4DA] uppercase">
            think, adapt
          </div>
        </div>
        <div className="overflow-hidden mb-16">
          <div className="vision-line font-display text-4xl md:text-6xl xl:text-7xl font-bold tracking-tighter leading-[0.9] text-[#5A5A72] uppercase">
            and secure the future"
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <a href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="px-8 py-3.5 text-xs uppercase tracking-widest font-bold text-white rounded-full transition-all duration-300"
            style={{ background: 'var(--accent)' }}>
            Start a conversation
          </a>
          <a href="https://linkedin.com/in/om051105" target="_blank" rel="noreferrer"
            className="px-8 py-3.5 text-xs uppercase tracking-widest font-bold text-[#E8E4DA] border border-white/10 rounded-full hover:bg-white/5 transition-all duration-300">
            Connect on LinkedIn →
          </a>
        </div>
      </div>
    </section>
  );
}
