import { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../supabaseClient';
import { Send } from 'lucide-react';
import { FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const { error } = await supabase
        .from('messages')
        .insert([{
          name: formData.name,
          email: formData.email,
          messages: formData.message
        }]);

      if (error) throw error;
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMessage(err.message || 'An error occurred.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="section-container">
      <div className="max-w-5xl w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Get In Touch
        </motion.h2>

        <div className="grid-2" style={{ gap: '4rem' }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            <div>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: 700 }}>Let's talk about everything!</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="https://www.linkedin.com/in/alfaizzda/" target="_blank" rel="noopener noreferrer" className="glass" style={{ padding: '1rem', borderRadius: '50%', color: 'var(--text-primary)', transition: 'transform 0.3s' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                <FiLinkedin size={24} />
              </a>
              <a href="https://www.instagram.com/alphaizz_?igsh=aDUycWo0bWx0ZjNr&utm_source=qr" target="_blank" rel="noopener noreferrer" className="glass" style={{ padding: '1rem', borderRadius: '50%', color: 'var(--text-primary)', transition: 'transform 0.3s' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                <FiInstagram size={24} />
              </a>
              <a href="mailto:aerozsr70@gmail.com" className="glass" style={{ padding: '1rem', borderRadius: '50%', color: 'var(--text-primary)', transition: 'transform 0.3s' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                <FiMail size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass"
            style={{ padding: '2rem', borderRadius: '1.5rem' }}
          >
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--text-secondary)' }}>Full Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required className="input-field" placeholder="John Doe" />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--text-secondary)' }}>Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="input-field" placeholder="john@example.com" />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--text-secondary)' }}>Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows={4} className="input-field" placeholder="How can I help you?"></textarea>
              </div>
              <button type="submit" disabled={status === 'submitting'} className="btn-primary" style={{ width: '100%', gap: '0.5rem' }}>
                {status === 'submitting' ? 'Sending...' : <>Send Message <Send size={18} /></>}
              </button>
              
              {status === 'success' && <p style={{ color: '#10b981', textAlign: 'center', marginTop: '1rem' }}>Message sent successfully!</p>}
              {status === 'error' && <p style={{ color: '#ef4444', textAlign: 'center', marginTop: '1rem' }}>Error: {errorMessage}</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
