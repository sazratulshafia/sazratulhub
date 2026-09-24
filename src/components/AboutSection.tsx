'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Briefcase, GraduationCap, Zap, Coffee, Globe } from 'lucide-react';

const stats = [
  { icon: <Code2 size={20} />, value: '3+', label: 'Years Experience' },
  { icon: <Briefcase size={20} />, value: '15+', label: 'Projects Completed' },
  { icon: <Coffee size={20} />, value: '1000+', label: 'Cups of Coffee' },
  { icon: <Globe size={20} />, value: '5+', label: 'Happy Clients' },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section" ref={ref} style={{ position: 'relative' }}>
      {/* Background accent */}
      <div style={{
        position: 'absolute',
        top: '50%',
        right: '-200px',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124, 77, 255, 0.06) 0%, transparent 70%)',
        filter: 'blur(80px)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Crafting Digital<br />
            <span className="gradient-text-accent">Experiences</span>
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '48px',
          marginTop: '48px',
          alignItems: 'start',
        }}>
          {/* About text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
              I&apos;m a passionate full-stack developer based in <strong style={{ color: 'var(--text-primary)' }}>Dhaka, Bangladesh</strong>. 
              I specialize in building modern, performant web applications using cutting-edge technologies.
            </p>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
              My journey in tech started with curiosity and has evolved into a career building 
              real-world solutions that make an impact. I love working at the intersection of 
              design and engineering, creating experiences that are both beautiful and functional.
            </p>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '28px' }}>
              When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to 
              open source, or sharing knowledge with the developer community.
            </p>

            {/* Quick info */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px',
            }}>
              {[
                { label: 'Location', value: 'Dhaka, BD 🇧🇩' },
                { label: 'Status', value: 'Open to work' },
                { label: 'Education', value: 'CSE Graduate' },
                { label: 'Languages', value: 'BN, EN' },
              ].map((item) => (
                <div key={item.label} style={{
                  padding: '14px 16px',
                  background: 'var(--bg-tertiary)',
                  borderRadius: '10px',
                  border: '1px solid var(--border-subtle)',
                }}>
                  <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats + Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Terminal card */}
            <div style={{
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '16px',
              overflow: 'hidden',
              marginBottom: '28px',
            }}>
              {/* Terminal header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 16px',
                borderBottom: '1px solid var(--border-subtle)',
                background: 'rgba(0,0,0,0.3)',
              }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f57' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#febc2e' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#28c840' }} />
                <span style={{ marginLeft: '8px', fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  ~/sazratulhub
                </span>
              </div>
              {/* Terminal content */}
              <div style={{ padding: '20px', fontFamily: 'var(--font-mono)', fontSize: '13px', lineHeight: 1.8 }}>
                <div><span style={{ color: 'var(--accent)' }}>$</span> <span style={{ color: 'var(--text-muted)' }}>whoami</span></div>
                <div style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>Sazratul Islam</div>
                <div><span style={{ color: 'var(--accent)' }}>$</span> <span style={{ color: 'var(--text-muted)' }}>cat skills.txt</span></div>
                <div style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>React, Next.js, TypeScript, Node.js, Python</div>
                <div><span style={{ color: 'var(--accent)' }}>$</span> <span style={{ color: 'var(--text-muted)' }}>echo $PASSION</span></div>
                <div style={{ color: 'var(--accent)', marginBottom: '8px' }}>Building amazing web experiences ✨</div>
                <div><span style={{ color: 'var(--accent)' }}>$</span> <span style={{ color: 'var(--text-muted)', borderRight: '2px solid var(--accent)', animation: 'blink 1s infinite', paddingRight: '2px' }}>_</span></div>
              </div>
            </div>

            {/* Stats grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '12px',
            }}>
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                  className="glass-card"
                  style={{
                    padding: '20px',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ color: 'var(--accent)', marginBottom: '8px', display: 'flex', justifyContent: 'center' }}>
                    {stat.icon}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '28px',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                    marginBottom: '4px',
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.04em',
                  }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
