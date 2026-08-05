import { motion } from 'framer-motion';

const skills = [
  { name: 'Python', icon: 'devicon-python-plain' },
  { name: 'SQL', icon: 'devicon-mysql-plain' },
  { name: 'C++', icon: 'devicon-cplusplus-plain' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain' },
  { name: 'Mobile Dev', icon: 'devicon-android-plain' },
];

const webSkills = [
  { name: 'HTML', icon: 'devicon-html5-plain' },
  { name: 'CSS', icon: 'devicon-css3-plain' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain' },
  { name: 'NodeJS', icon: 'devicon-nodejs-plain' },
  { name: 'React', icon: 'devicon-react-original' },
];

const SkillCard = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="glass"
    style={{
      padding: '1.5rem',
      borderRadius: '1rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.75rem',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'default'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-5px)';
      e.currentTarget.style.boxShadow = '0 10px 25px var(--accent-glow)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
    }}
  >
    <i className={skill.icon} style={{ fontSize: '3rem', color: 'var(--text-primary)' }}></i>
    <span style={{ fontWeight: 500, fontSize: '1rem' }}>{skill.name}</span>
  </motion.div>
);

export default function Skills() {
  return (
    <section id="skills" className="section-container">
      <div className="max-w-5xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          My Skills
        </motion.h2>

        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', textAlign: 'center', color: 'var(--text-secondary)' }}>Programming Languages</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1.5rem' }}>
            {skills.map((skill, i) => <SkillCard key={skill.name} skill={skill} index={i} />)}
          </div>
        </div>

        <div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', textAlign: 'center', color: 'var(--text-secondary)' }}>Full-Stack Development</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1.5rem' }}>
            {webSkills.map((skill, i) => <SkillCard key={skill.name} skill={skill} index={i} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
