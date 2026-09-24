'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, Star, ExternalLink, Code, Globe, Layers } from 'lucide-react';
import { GithubIcon as Github } from './BrandIcons';

const projects = [
  {
    title: 'Act Development',
    description: 'Luxury real estate platform for premium property listings in Dhaka, featuring 3D animations, EMI calculator, construction tracker, and seamless contact systems.',
    tags: ['Next.js', 'TypeScript', 'Three.js', 'GSAP', 'PostgreSQL', 'Vercel'],
    link: '#',
    github: '#',
    featured: true,
    icon: <Globe size={20} />,
    gradient: 'linear-gradient(135deg, #00e5ff 0%, #7c4dff 100%)',
  },
  {
    title: 'Portfolio Website',
    description: 'This very portfolio — a modern, responsive personal site built with Next.js 16, Framer Motion, and custom animations. Deployed on Vercel with Cloudflare DNS.',
    tags: ['Next.js 16', 'React 19', 'Framer Motion', 'TypeScript', 'Lenis'],
    link: 'https://sazratulhub.com',
    github: 'https://github.com/sazratulhub/sazratulhub',
    featured: true,
    icon: <Code size={20} />,
    gradient: 'linear-gradient(135deg, #7c4dff 0%, #ff4081 100%)',
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Managed cloud deployments with Cloudflare for DNS, R2 storage, and edge caching. Vercel for serverless hosting with CI/CD pipelines.',
    tags: ['Cloudflare', 'Vercel', 'R2 Storage', 'DNS', 'CI/CD'],
    link: '#',
    github: '#',
    featured: false,
    icon: <Layers size={20} />,
    gradient: 'linear-gradient(135deg, #ff4081 0%, #ff9100 100%)',
  },
  {
    title: 'Coming Soon — E-Commerce',
    description: 'A full-featured e-commerce platform with payments, inventory management, and beautiful UI. Currently in development.',
    tags: ['Next.js', 'Stripe', 'PostgreSQL', 'TypeScript'],
    link: '#',
    github: '#',
    featured: false,
    icon: <Star size={20} />,
    gradient: 'linear-gradient(135deg, #00e676 0%, #00e5ff 100%)',
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section" ref={ref} style={{ position: 'relative' }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        bottom: '0',
        right: '-100px',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255, 64, 129, 0.04) 0%, transparent 70%)',
        filter: 'blur(80px)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '60px' }}
        >
          <span className="section-label">Selected Projects</span>
          <h2 className="section-title">
            Things I&apos;ve <span className="gradient-text-accent">Built</span>
          </h2>
          <p className="section-description">
            A showcase of my recent work — from luxury real estate platforms to cloud infrastructure.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '24px',
        }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
              className="glass-card"
              style={{
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Top gradient bar */}
              <div style={{
                height: '3px',
                background: project.gradient,
                borderRadius: '16px 16px 0 0',
              }} />

              {/* Content */}
              <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: project.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0a0a0f',
                  }}>
                    {project.icon}
                  </div>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    {project.github !== '#' && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '8px',
                        border: '1px solid var(--border-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--text-muted)',
                        transition: 'all 0.2s ease',
                      }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--border-accent)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border-subtle)'; }}
                      >
                        <Github size={15} />
                      </a>
                    )}
                    {project.link !== '#' && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '8px',
                        border: '1px solid var(--border-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--text-muted)',
                        transition: 'all 0.2s ease',
                      }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--border-accent)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border-subtle)'; }}
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Featured badge */}
                {project.featured && (
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    width: 'fit-content',
                    padding: '3px 10px',
                    borderRadius: '4px',
                    background: 'rgba(0, 230, 118, 0.1)',
                    color: '#00e676',
                    fontSize: '10px',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: '12px',
                  }}>
                    <Star size={10} />
                    Featured
                  </div>
                )}

                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '20px',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '10px',
                }}>
                  {project.title}
                </h3>

                <p style={{
                  fontSize: '14px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                  marginBottom: '20px',
                  flex: 1,
                }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          style={{ textAlign: 'center', marginTop: '48px' }}
        >
          <a
            href="https://github.com/sazratulhub"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <Github size={16} />
            View All on GitHub
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
