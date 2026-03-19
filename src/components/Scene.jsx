import { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ─── Dense Starfield ──────────────────────────────────────── */
function Starfield() {
  const ref = useRef();
  const positions = random.inSphere(new Float32Array(12000), { radius: 20 });

  useFrame((_, delta) => {
    ref.current.rotation.x += delta * 0.01;
    ref.current.rotation.y += delta * 0.02;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#E8F0FF" size={0.018} sizeAttenuation depthWrite={false} opacity={0.6} />
    </Points>
  );
}

/* ─── Nebula Planet ─────────────────────────────────────────── */
function NebulaCore() {
  const planet  = useRef();
  const ring1   = useRef();
  const ring2   = useRef();
  const ring3   = useRef();
  const nebula  = useRef();
  const mouse   = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouse = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth  - 0.5);
      mouse.current.y = (e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener('mousemove', onMouse);
    return () => window.removeEventListener('mousemove', onMouse);
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    const fy = Math.sin(t * 0.5) * 0.2;

    /* Planet slow rotation + parallax tilt */
    if (planet.current) {
      planet.current.rotation.y += delta * 0.12;
      planet.current.position.y  = fy;
      planet.current.rotation.z += (mouse.current.x * 0.2 - planet.current.rotation.z) * 0.03;
    }

    /* Pulsing nebula glow */
    if (nebula.current) {
      nebula.current.scale.setScalar(1 + Math.sin(t * 1.5) * 0.06);
      nebula.current.position.y = fy;
    }

    /* Rings orbit at different speeds */
    if (ring1.current) { ring1.current.rotation.z += delta * 0.25; ring1.current.position.y = fy; }
    if (ring2.current) { ring2.current.rotation.z -= delta * 0.18; ring2.current.rotation.x = Math.sin(t * 0.3) * 0.4; ring2.current.position.y = fy; }
    if (ring3.current) { ring3.current.rotation.z += delta * 0.08; ring3.current.rotation.y += delta * 0.15; ring3.current.position.y = fy; }
  });

  return (
    <group position={[0, 0, 0]}>

      {/* ── Deep nebula glow — large soft sphere ── */}
      <mesh ref={nebula} position={[0, 0, -4]}>
        <sphereGeometry args={[4.5, 32, 32]} />
        <meshBasicMaterial color="#0A0030" transparent opacity={0.9} />
      </mesh>

      {/* ── Nebula accent glow (purple outer) ── */}
      <mesh position={[0, 0, -4.5]}>
        <sphereGeometry args={[5.5, 32, 32]} />
        <meshBasicMaterial color="#3B0080" transparent opacity={0.3} />
      </mesh>

      {/* ── Planet core — deep dark with cyan emissive edge ── */}
      <mesh ref={planet}>
        <icosahedronGeometry args={[1.5, 4]} />
        <meshStandardMaterial
          color="#050525"
          emissive="#00D4FF"
          emissiveIntensity={0.15}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* ── Cyan planetary ring ── */}
      <mesh ref={ring1} rotation={[Math.PI / 2.5, 0.2, 0]}>
        <torusGeometry args={[2.4, 0.035, 16, 200]} />
        <meshBasicMaterial color="#00D4FF" />
      </mesh>

      {/* ── Purple tilted ring ── */}
      <mesh ref={ring2} rotation={[Math.PI / 3, 0.5, 0]}>
        <torusGeometry args={[3.0, 0.02, 16, 200]} />
        <meshBasicMaterial color="#9B4DFF" transparent opacity={0.7} />
      </mesh>

      {/* ── Wide faint outer ring ── */}
      <mesh ref={ring3} rotation={[Math.PI / 1.8, 0.1, 0]}>
        <torusGeometry args={[3.7, 0.008, 16, 200]} />
        <meshBasicMaterial color="#E8F0FF" transparent opacity={0.15} />
      </mesh>

      {/* ── Atmospheric rim light ── */}
      <pointLight position={[3,  2,  2]} color="#00D4FF" intensity={4} distance={15} />
      <pointLight position={[-2, -2, -3]} color="#9B4DFF" intensity={3} distance={12} />
      <ambientLight intensity={1.5} />
      <directionalLight position={[-5, 6, 4]} intensity={3} color="#E8F0FF" />
    </group>
  );
}

/* ─── Scene root ──────────────────────────────────────────── */
export default function Scene() {
  const { camera } = useThree();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.container-scroll',
        start: 'top top',
        end:   'bottom bottom',
        scrub: 2,
      }
    });
    tl.to(camera.position, { z: -5, y: -1, x: -0.5, ease: 'none' }, 0)
      .to(camera.rotation,  { y: 0.1, ease: 'none' }, 0);
  }, [camera]);

  return (
    <>
      <Starfield />
      <NebulaCore />
    </>
  );
}
