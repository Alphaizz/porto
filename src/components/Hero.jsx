import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, TorusKnot, Float, Sparkles } from '@react-three/drei';

export default function Hero() {
  return (
    <section id="home" className="section-container" style={{ padding: 0 }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.4 }}>
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
          <pointLight position={[-10, -10, -5]} intensity={3} color="#3b82f6" />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.2} />
          
          <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <TorusKnot args={[1.5, 0.4, 128, 32]} scale={1.2}>
              <meshStandardMaterial 
                color="#60a5fa" 
                wireframe 
                roughness={0.2}
                metalness={0.8}
                emissive="#60a5fa"
                emissiveIntensity={0.2}
              />
            </TorusKnot>
          </Float>
          <Sparkles count={80} scale={12} size={2} speed={0.4} opacity={0.3} color="#60a5fa" />
        </Canvas>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ textAlign: 'center', zIndex: 10, pointerEvents: 'none' }}
      >
        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: 800, marginBottom: '0.5rem', textShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>Hi! I am Alfaizz</h1>
        <p style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', color: 'var(--text-secondary)' }}>You can call me Alfa</p>
      </motion.div>
    </section>
  );
}
