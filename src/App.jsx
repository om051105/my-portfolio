import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Scene from './components/Scene';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import LearningPhase from './components/sections/LearningPhase';
import Credentials from './components/sections/Credentials';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import AiEvolution from './components/sections/AiEvolution';
import FutureVision from './components/sections/FutureVision';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <div className="relative w-full" style={{ background: '#05050F', color: '#E8E4DA' }}>
      <Cursor />
      <Navbar />

      {/* 3D Canvas — right half on desktop, full-bleed on mobile (always behind text) */}
      <div className="fixed z-0 pointer-events-none top-0 right-0 h-screen" style={{ width: 'min(60vw, 100vw)', left: 'unset' }}>
        <Canvas
          camera={{ position: [0, 0, 7], fov: 50 }}
          gl={{ antialias: true, powerPreference: 'high-performance' }}
          dpr={[1, 2]}
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* Chapter story scroll */}
      <main className="relative z-10 container-scroll">
        <Hero />
        <About />
        <LearningPhase />
        <Credentials />
        <Skills />
        <Projects />
        <AiEvolution />
        <FutureVision />
        <Contact />
      </main>
    </div>
  );
}
