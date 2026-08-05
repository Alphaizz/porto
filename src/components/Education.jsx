import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const educationData = [
  {
    school: "Mercu Buana University (International class)",
    location: "Jakarta, Indonesia",
    period: "Aug 2023 - Present",
    details: [
      "Current GPA: 3.80/4.00",
      "Bachelor's Degree in Informatics",
      "Data Science Concentration"
    ]
  },
  {
    school: "Universitas Gadjah Mada",
    location: "Yogyakarta, Indonesia",
    period: "Aug 2025 - Dec 2025",
    details: [
      "1-Semester Exchange Programme",
      "Worked on a variety of projects",
      "Score achieved: 3.60/4.00"
    ]
  }
];

export default function Education() {
  return (
    <section id="education" className="section-container">
      <div className="max-w-5xl w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Education
        </motion.h2>

        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          {/* Timeline Line */}
          <div style={{ position: 'absolute', left: '0.75rem', top: 0, bottom: 0, width: '2px', background: 'var(--glass-border)' }}></div>

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              style={{ position: 'relative', marginBottom: '3rem' }}
            >
              {/* Timeline Dot */}
              <div style={{ position: 'absolute', left: '-2.3rem', top: '0.25rem', width: '1.5rem', height: '1.5rem', borderRadius: '50%', background: 'var(--accent-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 10px var(--accent-glow)' }}>
                <GraduationCap size={14} color="#fff" />
              </div>

              <div className="glass" style={{ padding: '2rem', borderRadius: '1rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{edu.school}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.9rem' }}>{edu.location} | {edu.period}</p>
                <ul style={{ listStylePosition: 'inside', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {edu.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
