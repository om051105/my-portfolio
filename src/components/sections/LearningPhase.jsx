import storyData from '../../data/storyData.json';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function LearningPhase() {
  const containerRef = useRef();

  useEffect(() => {
    const items = gsap.utils.toArray('.timeline-item');
    items.forEach((item, index) => {
      gsap.fromTo(item, 
        { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
        {
          opacity: 1, x: 0, 
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            end: 'center center',
            scrub: true,
          }
        }
      );
    });
  }, []);

  return (
    <section className="min-h-screen py-24 flex flex-col justify-center items-center px-4" ref={containerRef}>
      <h2 className="text-4xl text-glowRed mb-16 uppercase tracking-widest font-bold">The Journey</h2>
      
      <div className="relative border-l-2 border-darkRed w-full max-w-4xl mx-auto space-y-12">
        {storyData.map((data, idx) => (
          <div key={idx} className="timeline-item relative pl-8 md:pl-0 w-full flex md:justify-between items-center">
            {/* Desktop timeline marker */}
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-glowRed shadow-[0_0_10px_#ff1a1a]" />
            
            {/* Context Box */}
            <div className={`md:w-5/12 bg-black/50 backdrop-blur-md p-6 border border-darkRed rounded-lg shadow-[0_0_15px_rgba(139,0,0,0.5)] transition-transform hover:scale-105 ${idx % 2 === 0 ? 'md:text-right' : 'md:ml-auto'}`}>
              <span className="text-glowRed font-bold text-xl">{data.year}</span>
              <h3 className="text-2xl font-semibold mt-2">{data.title}</h3>
              <p className="text-gray-400 mt-2">{data.desc}</p>
            </div>
            
            {/* Empty space filler for layout */}
            <div className="hidden md:block md:w-5/12" />
          </div>
        ))}
      </div>
    </section>
  );
}
