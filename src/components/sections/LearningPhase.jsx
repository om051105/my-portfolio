import storyData from '../../data/storyData.json';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const education = [
  { degree: 'BCA (Bachelor of Computer Applications)',   school: 'Lovely Professional University', period: 'Aug 2023 – Present', note: 'Specialization: AI & ML Systems Design' },
  { degree: 'Intermediate 80%', school: 'Kendriya Vidyalaya, Haridwar', period: 'Apr 2022 – Mar 2023', note: 'Physics · Chemistry · Maths · CS' },
  { degree: 'Matriculation 85%', school: 'Kendriya Vidyalaya, Haridwar', period: 'Apr 2020 – Mar 2021', note: 'Science & Mathematics' },
  { degree: 'Google & IBM Certified', school: 'Data Science & Security Standards', period: '2024', note: 'Cloud, Data, Security certifications' },
];

export default function LearningPhase() {
  const sec = useRef();

  useEffect(() => {
    const items = gsap.utils.toArray('.tl-item');
    items.forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 82%' } }
      );
    });
  }, []);

  return (
    <section id="journey" className="relative min-h-screen px-6 md:px-20 py-32 border-t border-white/5" ref={sec}>
      <span className="chapter-number">02</span>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-10">
          <span className="accent-line" />
          <span className="text-[11px] uppercase tracking-[0.25em] font-semibold" style={{ color: 'var(--accent)' }}>
            Chapter Two — Journey
          </span>
        </div>

        <div className="overflow-hidden mb-14">
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-[#E8E4DA] uppercase">
            The Story<br />So Far
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Career Timeline */}
          <div>
            <h3 className="text-[10px] uppercase tracking-widest text-[#5A5A72] font-bold mb-8">Career Milestones</h3>
            <div className="relative border-l border-white/6 space-y-10 pl-8">
              {/* Startup highlight — pinned at top */}
              <div className="tl-item relative">
                <div className="absolute -left-[2.3rem] top-1.5 w-3 h-3 rounded-full" style={{ background: 'var(--gold)' }} />
                <span className="text-[10px] uppercase tracking-widest font-bold" style={{ color: 'var(--gold)' }}>2024–25 · Ongoing</span>
                <h4 className="font-display text-lg font-bold uppercase tracking-tight text-[#E8E4DA] my-1">AI/ML Engineer — KabadiVaala</h4>
                <p className="text-[10px] font-semibold mb-2" style={{ color: 'var(--gold)' }}>Startup · Sustainability · Recycling Industry</p>
                <p className="text-xs text-[#5A5A72] leading-relaxed">
                  Building intelligent pricing & classification models for real-time scrap valuation.
                  Architected data pipelines handling live waste-stream ingestion, category detection,
                  and dynamic price estimation — shipped directly to production.
                </p>
              </div>

              {storyData.map((item, i) => (
                <div key={i} className="tl-item relative">
                  <div className="absolute -left-[2.3rem] top-1.5 w-3 h-3 rounded-full" style={{ background: 'var(--accent)' }} />
                  <span className="text-[10px] uppercase tracking-widest font-bold" style={{ color: 'var(--accent)' }}>{item.year}</span>
                  <h4 className="font-display text-lg font-bold uppercase tracking-tight text-[#E8E4DA] my-1">{item.title}</h4>
                  <p className="text-xs text-[#5A5A72] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-[10px] uppercase tracking-widest text-[#5A5A72] font-bold mb-8">Education</h3>
            <div className="relative border-l border-white/6 space-y-10 pl-8">
              {education.map((edu, i) => (
                <div key={i} className="tl-item relative">
                  <div className="absolute -left-[2.3rem] top-1.5 w-3 h-3 rounded-full border border-white/20" />
                  <span className="text-[10px] uppercase tracking-widest text-[#5A5A72] font-bold">{edu.period}</span>
                  <h4 className="font-display text-lg font-bold uppercase tracking-tight text-[#E8E4DA] my-1">{edu.degree}</h4>
                  <p className="text-xs font-semibold mb-1" style={{ color: 'var(--accent)' }}>{edu.school}</p>
                  <p className="text-[10px] text-[#5A5A72]">{edu.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
