'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    color: '#00e5ff',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'HTML / CSS', level: 95 },
      { name: 'Framer Motion', level: 85 },
      { name: 'Three.js / GSAP', level: 75 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    title: 'Backend',
    color: '#7c4dff',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Python', level: 80 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'REST APIs', level: 92 },
      { name: 'Drizzle ORM', level: 80 },
      { name: 'GraphQL', level: 70 },
    ],
  },
  {
    title: 'DevOps & Tools',
    color: '#ff4081',
    skills: [
      { name: 'Git / GitHub', level: 92 },
      { name: 'Docker', level: 78 },
      { name: 'Vercel / Cloudflare', level: 90 },
      { name: 'CI/CD', level: 75 },
      { name: 'Linux', level: 80 },
      { name: 'Figma', level: 72 },
    ],
  },
];

const techStack = [
  'Next.js', 'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL',
  'Vercel', 'Cloudflare', 'Docker', 'Tailwind CSS', 'Framer Motion',
  'Three.js', 'GSAP', 'Drizzle', 'Git', 'Linux', 'Figma', 'REST',
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="section" ref={ref} style={{
      background: 'var(--bg-secondary)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '-200px',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0, 229, 255, 0.05) 0%, transparent 70%)',
        filter: 'blur(80px)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <span className="section-label" style={{ justifyContent: 'center' }}>Skills & Technologies</span>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            My Tech <span className="gradient-text-accent">Arsenal</span>
          </h2>
          <p className="section-description" style={{ margin: '0 auto' }}>
            A comprehensive toolkit built through years of hands-on experience with modern technologies.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: '48px',
            flexWrap: 'wrap',
          }}
        >
          {skillCategories.map((cat, i) => (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(i)}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                fontWeight: 600,
                padding: '10px 20px',
                borderRadius: '10px',
                border: `1px solid ${activeCategory === i ? cat.color : 'var(--border-subtle)'}`,
                background: activeCategory === i ? `${cat.color}15` : 'transparent',
                color: activeCategory === i ? cat.color : 'var(--text-muted)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                letterSpacing: '0.04em',
              }}
            >
              {cat.title}
            </button>
          ))}
        </motion.div>

        {/* Skills bars */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            maxWidth: '700px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
          }}
        >
          {skillCategories[activeCategory].skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)' }}>
                  {skill.name}
                </span>
                <span style={{ fontSize: '13px', fontFamily: 'var(--font-mono)', color: skillCategories[activeCategory].color }}>
                  {skill.level}%
                </span>
              </div>
              <div style={{
                height: '6px',
                background: 'var(--bg-tertiary)',
                borderRadius: '3px',
                overflow: 'hidden',
                border: '1px solid var(--border-subtle)',
              }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    height: '100%',
                    background: `linear-gradient(90deg, ${skillCategories[activeCategory].color}, ${skillCategories[activeCategory].color}88)`,
                    borderRadius: '3px',
                    boxShadow: `0 0 10px ${skillCategories[activeCategory].color}40`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech stack cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            marginTop: '60px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px',
          }}
        >
          {techStack.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7 + i * 0.03, duration: 0.3 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="tag"
              style={{ cursor: 'default' }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
