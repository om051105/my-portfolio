import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Scene from './components/Scene';
import Cursor from './components/Cursor';
import Hero from './components/sections/Hero';
import Origin from './components/sections/Origin';
import LearningPhase from './components/sections/LearningPhase';
import Projects from './components/sections/Projects';
import AiEvolution from './components/sections/AiEvolution';
import FutureVision from './components/sections/FutureVision';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="relative w-full bg-black text-white selection:bg-glowRed selection:text-white">
      <Cursor />
      
      {/* 3D Background Canvas */}
      <div className="fixed inset-0 z-0 h-screen w-full pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* HTML Content Overlay */}
      <div className="relative z-10 container-scroll">
        <Hero />
        <Origin />
        <LearningPhase />
        <Projects />
        <AiEvolution />
        <FutureVision />
        <Contact />
      </div>
    </div>
  );
}

export default App;
