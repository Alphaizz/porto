import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-container">
      <div className="max-w-5xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          About Me
        </motion.h2>

        <div className="grid-2" style={{ alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}
          >
            <img src="/images/prof.jpg" alt="Alfaizz Profile" style={{ width: '100%', height: '100%', objectFit: 'cover', aspectRatio: '1/1' }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <p style={{ fontSize: '1.125rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
              Hello! I'm Alfaizz, a Computer Science undergrad at Mercu Buana University specializing in AI and full-stack development. I build impactful applications, from an AI chatbot to predictive health models. I merge deep technical skill with strong communication and leadership. I'm looking for an opportunity to solve complex problems—let's connect!
            </p>
            <div>
              <a href="/cvport.pdf" download="Alfaizz_CV.pdf" className="btn-primary" style={{ display: 'inline-flex', gap: '0.5rem' }}>
                <Download size={20} />
                My CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
