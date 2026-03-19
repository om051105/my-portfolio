export default function Credentials() {
  const skills = [
    'Python','TensorFlow','PyTorch','OpenCV','Reinforcement Learning','Computer Vision',
    'LangChain','MediaPipe','React','Docker','Deep Learning','RAG Systems','C++','Node.js',
    'Keras','SonarQube','Git','Gymnasium','Google Certified','IBM Certified',
  ];

  return (
    <div className="w-full py-5 overflow-hidden relative border-y border-white/5">
      <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, #05050F 0%, transparent 100%)' }} />
      <div className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(-90deg, #05050F 0%, transparent 100%)' }} />

      <div className="flex whitespace-nowrap w-max animate-[marquee_28s_linear_infinite]">
        {[...skills, ...skills].map((s, i) => (
          <div key={i} className="mx-8 flex items-center gap-6 text-sm font-semibold uppercase tracking-widest text-[#5A5A72]">
            {s}
            <span style={{ color: 'var(--accent)', fontSize: 8 }}>▶</span>
          </div>
        ))}
      </div>
    </div>
  );
}
