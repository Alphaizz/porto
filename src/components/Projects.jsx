import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Global Explorer",
    description: "An interactive travel intelligence app featuring a real-time 3D globe, live weather, AI chatbot, and a full-stack admin ecosystem.",
    tags: ["React", "Vite", "Three.js", "Supabase", "LLM"],
    link: "https://github.com/Alphaizz/global_explorer",
    demo: "https://global-explorer-global-explorer-pzwmaoxau-alphaizzs-projects.vercel.app/",
    image: "/images/global-explorer.jpg"
  },
  {
    title: "The Gourmet Place",
    description: "A restaurant website with features like login, menu, and an AI assistant.",
    tags: ["React", "Supabase", "AI"],
    link: "https://github.com/Alphaizz/cloud_compute",
    image: "/images/gourme.jpg"
  },
  {
    title: "Diabetes Prediction",
    description: "Predicts diabetes and identifies key health risk factors using Machine Learning.",
    tags: ["Python", "ML"],
    link: "https://github.com/Alphaizz/Diabetes-Prediction",
    image: "/images/diabetes.jpg"
  },
  {
    title: "Web3 Donation App",
    description: "TrustFlow is a blockchain-powered charity platform for transparent ETH donations.",
    tags: ["Solidity", "Web3.js", "Ethereum"],
    link: "https://github.com/Alphaizz/Donation_PBC",
    image: "/images/PBC.JPG"
  },
  {
    title: "AI Debate Researcher",
    description: "Automated engine leveraging NLP models to summarize real-time news for debaters.",
    tags: ["FastAPI", "HuggingFace", "Python", "React"],
    link: "https://github.com/Alphaizz/Debate-information-bot",
    image: "/images/debate.JPG"
  },
  {
    title: "Vanilla JS 2D RPG",
    description: "A 2D RPG built from scratch leveraging the HTML5 Canvas API.",
    tags: ["Javascript", "HTML5 Canvas", "Game physics"],
    link: "https://github.com/Alphaizz/minigame",
    demo: "https://minigame-beige.vercel.app/",
    image: "/images/minigame.JPG"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <div className="max-w-6xl w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          My Projects
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass"
              style={{
                borderRadius: '1rem',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 40px var(--accent-glow)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ height: '200px', overflow: 'hidden' }}>
                <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1 }}>{project.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{ fontSize: '0.75rem', padding: '0.25rem 0.75rem', borderRadius: '9999px', background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-color)', textDecoration: 'none', fontWeight: 500 }}>
                      Live Demo <ExternalLink size={16} />
                    </a>
                  )}
                  <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: project.demo ? 'var(--text-secondary)' : 'var(--accent-color)', textDecoration: 'none', fontWeight: 500 }}>
                    GitHub <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
