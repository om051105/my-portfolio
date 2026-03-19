import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '50+', label: 'GitHub Repositories' },
  { value: '4+',  label: 'Deployed AI Systems' },
  { value: '2',   label: 'Google & IBM Certified' },
  { value: '1+',  label: 'Startup Contribution' },
];

export default function About() {
  const sec = useRef();

  useEffect(() => {
    gsap.fromTo('.about-line',
      { yPercent: 100, opacity: 0 },
      { yPercent: 0, opacity: 1, stagger: 0.12, duration: 1, ease: 'expo.out',
        scrollTrigger: { trigger: sec.current, start: 'top 75%' } }
    );
    gsap.fromTo('.about-stat',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.8,
        scrollTrigger: { trigger: sec.current, start: 'top 60%' } }
    );
  }, []);

  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 py-32 border-t border-white/5" ref={sec}>
      {/* Chapter label */}
      <span className="chapter-number">01</span>

      <div className="relative z-10 grid md:grid-cols-2 gap-20 items-center">
        {/* Left */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <span className="accent-line" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold" style={{ color: 'var(--accent)' }}>
              Chapter One — About
            </span>
          </div>

          <div className="overflow-hidden mb-2">
            <h2 className="about-line font-display text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-[#E8E4DA] uppercase">
              Building
            </h2>
          </div>
          <div className="overflow-hidden mb-2">
            <h2 className="about-line font-display text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] uppercase"
              style={{ color: 'var(--accent)' }}>
              Minds
            </h2>
          </div>
          <div className="overflow-hidden mb-10">
            <h2 className="about-line font-display text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-[#E8E4DA] uppercase">
              in Code
            </h2>
          </div>

          <p className="text-sm text-[#5A5A72] leading-relaxed max-w-sm mb-6">
            I'm Om — a BCA student at LPU with <span className="text-[#E8E4DA]">real startup experience</span>, building AI solutions
            that are already being used in production at
            <span style={{ color: 'var(--accent)' }}> KabadiVaala</span> — a sustainability startup
            disrupting India's scrap & recycling industry.
          </p>
          <p className="text-sm text-[#5A5A72] leading-relaxed max-w-sm mb-6">
            Certified by <span style={{ color: 'var(--accent)' }}>Google</span> and <span style={{ color: 'var(--purple)' }}>IBM</span>.
            Active open-source contributor on <a href='https://github.com/om051105' target='_blank' rel='noreferrer'
              className='text-[#E8E4DA] underline decoration-dotted underline-offset-2 hover:text-[var(--accent)] transition-colors'>GitHub (50+ repos)</a>.
            Fluent in English, Hindi & German.
          </p>
          <p className="text-sm text-[#5A5A72] leading-relaxed max-w-sm">
            Currently architecting Real-Time Attention Mechanisms and exploring
            <span className="text-[#E8E4DA]"> Advanced GAN & Transformer architectures</span> for next-gen perception systems.
          </p>
        </div>

        {/* Right — Stats */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map(({ value, label }, i) => (
            <div key={i} className="about-stat card-glass rounded-2xl p-8 group hover:border-[var(--accent)] transition-all duration-500">
              <div className="font-display text-5xl font-bold text-[#E8F0FF] group-hover:text-[var(--accent)] transition-colors duration-300 mb-2">
                {value}
              </div>
              <div className="text-[10px] uppercase tracking-widest text-[#5A5A72] font-semibold">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
