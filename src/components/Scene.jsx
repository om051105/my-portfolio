import { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Particle System
function ParticleBackground() {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(5000), { radius: 10 });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ff1a1a"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

// Interactive Box (Placeholder for Avatar)
function AvatarPlaceholder() {
  const mesh = useRef();

  useFrame((state) => {
    // Rotation & anti-gravity effect
    mesh.current.rotation.y += 0.003;
    mesh.current.position.y = Math.sin(Date.now() * 0.001) * 0.5;
  });

  return (
    <mesh ref={mesh} position={[0, 0, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#8b0000" emissive="#ff1a1a" emissiveIntensity={0.5} wireframe />
    </mesh>
  );
}

// Scene controls camera based on scroll
export default function Scene() {
  const { camera } = useThree();

  useEffect(() => {
    // Camera scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".container-scroll", // entire scroll container
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      }
    });

    tl.to(camera.position, { z: -10, y: 2, ease: 'none' }, 0)
      .to(camera.rotation, { x: -0.2, ease: 'none' }, 0);
  }, [camera]);

  return (
    <>
      <ParticleBackground />
      <AvatarPlaceholder />
    </>
  );
}
