import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const groups = [
  { cat: 'Machine Learning', skills: [
    { n: 'TensorFlow / Keras',        v: 90 },
    { n: 'PyTorch',                   v: 82 },
    { n: 'Scikit-Learn',              v: 88 },
    { n: 'Reinforcement Learning (PPO)', v: 78 },
  ]},
  { cat: 'Computer Vision', skills: [
    { n: 'OpenCV',                    v: 92 },
    { n: 'MediaPipe',                 v: 85 },
    { n: 'MobileNetV2 / Transfer Learning', v: 80 },
    { n: 'Real-Time Detection',       v: 87 },
  ]},
  { cat: 'Languages & Stack', skills: [
    { n: 'Python',                    v: 95 },
    { n: 'JavaScript / React',        v: 85 },
    { n: 'C++ / C',                   v: 72 },
    { n: 'Docker / Git',              v: 80 },
  ]},
  { cat: 'NLP & Data', skills: [
    { n: 'LangChain / RAG',           v: 76 },
    { n: 'ChromaDB / Vector Stores',  v: 74 },
    { n: 'NumPy / Pandas',            v: 90 },
    { n: 'SQL / NoSQL',               v: 78 },
  ]},
];

const badges = ['Python','TensorFlow','PyTorch','OpenCV','React','Node.js','C++','Docker','LangChain','MediaPipe','Gymnasium','SonarQube','Linux','Git','Keras','Stable Baselines 3'];

export default function Skills() {
  const sec = useRef();

  useEffect(() => {
    gsap.fromTo('.skill-group',
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, stagger: 0.18, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: sec.current, start: 'top 70%' } }
    );

    gsap.utils.toArray('.bar-fill').forEach((bar) => {
      gsap.fromTo(bar,
        { width: '0%' },
        { width: bar.dataset.v + '%', duration: 1.6, ease: 'power3.out',
          scrollTrigger: { trigger: bar, start: 'top 90%' } }
      );
    });
  }, []);

  return (
    <section id="skills" className="relative min-h-screen px-6 md:px-20 py-32 border-t border-white/5" ref={sec}>
      <span className="chapter-number">03</span>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-10">
          <span className="accent-line" />
          <span className="text-[11px] uppercase tracking-[0.25em] font-semibold" style={{ color: 'var(--accent)' }}>
            Chapter Three — Expertise
          </span>
        </div>

        <div className="overflow-hidden mb-16">
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-[#E8E4DA] uppercase">
            Technical<br />Arsenal
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {groups.map((g, gi) => (
            <div key={gi} className="skill-group">
              <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6 pb-3 border-b border-white/5"
                style={{ color: 'var(--accent)' }}>{g.cat}</h3>
              <div className="space-y-5">
                {g.skills.map((sk, si) => (
                  <div key={si}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-[#E8E4DA]/70 font-medium">{sk.n}</span>
                      <span className="text-[10px] text-[#5A5A72] font-mono">{sk.v}%</span>
                    </div>
                    <div className="h-[2px] bg-white/5 rounded-full overflow-hidden">
                      <div className="bar-fill h-full rounded-full" data-v={sk.v}
                        style={{ width: '0%', background: 'linear-gradient(90deg, var(--accent), var(--purple))' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Badge cloud */}
        <div className="flex flex-wrap gap-2">
          {badges.map((b) => (
            <span key={b} className="px-3 py-1.5 text-[10px] uppercase tracking-widest border border-white/8 rounded-full text-[#4A5070] hover:border-[var(--accent)] hover:text-[#E8F0FF] transition-all duration-200 cursor-default font-medium">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
