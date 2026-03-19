import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AiEvolution() {
  const containerRef = useRef();
  
  useEffect(() => {
    // Reveal text elements as user scrolls
    const elements = gsap.utils.toArray('.evolution-reveal');
    
    elements.forEach((el, index) => {
      gsap.fromTo(el,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          }
        }
      );
    });
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-darkRed/10 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl w-full text-center z-10" ref={containerRef}>
        <h2 className="evolution-reveal text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-glowRed to-darkRed mb-12 drop-shadow-lg">
          AI Evolution
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 mt-16 text-left">
          <div className="evolution-reveal p-8 rounded-2xl bg-gradient-to-br from-darkRed/20 to-black border border-darkRed/50 shadow-2xl backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-4">Detection AI</h3>
            <p className="text-gray-400 leading-relaxed">
              Engineered highly accurate detection systems capable of identifying and analyzing complex patterns in real-time, bridging the gap between raw data and actionable intelligence.
            </p>
          </div>
          
          <div className="evolution-reveal p-8 rounded-2xl bg-gradient-to-br from-darkRed/20 to-black border border-darkRed/50 shadow-2xl backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-4">Resume Screener</h3>
            <p className="text-gray-400 leading-relaxed">
              Developed intuitive ML-driven tools to automate standard workflows. Utilizing advanced NLP to parse and categorize thousands of data points instantaneously.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
