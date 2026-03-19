import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const featured = [
  { tag: 'Reinforcement Learning', name: 'AlphaForge FX RL System',
    desc: 'Autonomous AI trading bot using PPO to navigate and trade in a custom-built simulated Forex market environment.',
    stack: ['Python','Stable Baselines 3','Gymnasium','Docker','TensorBoard'],
    link: 'https://github.com/om051105' },
  { tag: 'Computer Vision', name: 'Concentration Tracker',
    desc: 'Real-time facial landmark detection & eye-blink analysis using MediaPipe to measure user focus levels live via webcam.',
    stack: ['Python','OpenCV','MediaPipe','NumPy','Multithreading'],
    link: 'https://github.com/om051105/Real-Time-Concentration-Tracker' },
  { tag: 'Deep Learning', name: 'Tomato Leaf Disease Detection',
    desc: 'Industrial-grade MobileNetV2 architecture for real-time plant disease diagnosis with browser-based TensorFlow.js inference.',
    stack: ['TensorFlow','Keras','MobileNetV2','JavaScript','Python'],
    link: 'https://github.com/om051105' },
  { tag: 'NLP / RAG', name: 'DocuMind RAG Chatbot',
    desc: 'Retrieval Augmented Generation system for chatting with documents — built on LangChain, ChromaDB, and Llama.',
    stack: ['LangChain','ChromaDB','OpenAI','Llama','Python'],
    link: 'https://github.com/om051105/AI-Document-Search--RAG-Chatbot' },
  { tag: 'AR / Computer Vision', name: 'Sudoku Vision AR',
    desc: 'Augmented Reality solver that reads physical Sudoku grids via camera using OCR and solves using backtracking algorithms.',
    stack: ['Python','OpenCV','OCR','Backtracking'],
    link: 'https://github.com/om051105/Sudoku-Vision' },
];

export default function AiEvolution() {
  const sec = useRef();

  useEffect(() => {
    gsap.fromTo('.feat-card',
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, stagger: 0.14, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: sec.current, start: 'top 70%' } }
    );
  }, []);

  return (
    <section id="ai-lab" className="relative min-h-screen px-6 md:px-20 py-32 border-t border-white/5" ref={sec}>
      <span className="chapter-number">05</span>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-10">
          <span className="accent-line" />
          <span className="text-[11px] uppercase tracking-[0.25em] font-semibold" style={{ color: 'var(--accent)' }}>
            Chapter Five — AI Lab
          </span>
        </div>

        <div className="overflow-hidden mb-16">
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-[#E8E4DA] uppercase">
            Featured<br />Systems
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {featured.map((p, i) => (
            <a key={i} href={p.link} target="_blank" rel="noreferrer"
              className="feat-card group relative card-glass rounded-2xl p-7 flex flex-col justify-between overflow-hidden hover:border-[var(--accent)] transition-all duration-500 min-h-[280px]">
              {/* Glow */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                style={{ background: 'var(--accent)' }} />

              <div>
                <div className="flex items-start justify-between mb-5">
                  <span className="text-[9px] uppercase tracking-[0.2em] font-bold px-2.5 py-1 rounded-full border"
                    style={{ color: 'var(--accent)', borderColor: 'var(--accent)', background: 'rgba(0,212,255,0.06)' }}>
                    {p.tag}
                  </span>
                  <svg className="w-4 h-4 text-[#5A5A72] group-hover:text-[#E8E4DA] transition-colors rotate-45"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-bold uppercase tracking-tight text-[#E8F0FF] mb-3 group-hover:text-[var(--accent)] transition-colors duration-300">
                  {p.name}
                </h3>
                <p className="text-xs text-[#5A5A72] leading-relaxed">{p.desc}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-5">
                {p.stack.map((s) => (
                  <span key={s} className="text-[9px] uppercase tracking-wider border border-white/8 px-2 py-1 rounded text-[#5A5A72] font-medium">
                    {s}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
