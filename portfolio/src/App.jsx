import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Code, Brain, Database, Sparkles, ChevronDown, ExternalLink, Award, Target, Zap, Cpu, BookOpen, Facebook, Instagram } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);

      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const skills = {
    'AI & ML': ['TensorFlow', 'PyTorch', 'scikit-learn', 'Keras', 'LangChain', 'OpenCV'],
    'Programming': ['Python', 'JavaScript', 'C Programming', 'Assembly', 'SQL'],
    'Web Dev': ['React.js', 'Node.js', 'Flask', 'FastAPI', 'MongoDB', 'PostgreSQL'],
    'Data Science': ['Pandas', 'NumPy', 'Matplotlib', 'Plotly', 'Power BI']
  };

  const projects = [
    {
      title: 'Caption Generation using Vision Transformer',
      description: 'Advanced AI project using state-of-the-art Vision Transformers for automated image captioning',
      tech: ['PyTorch', 'Transformers', 'Computer Vision'],
      icon: <Brain className="icon" />
    },
    {
      title: 'ResearchNexus',
      description: 'Full-stack web application for academic research collaboration and knowledge sharing',
      tech: ['React', 'Node.js', 'MongoDB Atlas', "Express"],
      icon: <Code className="icon" />
    },
    {
      title: 'Obesity Analysis Dashboard',
      description: 'Comprehensive ML analysis with interactive Power BI dashboard and Flask API integration',
      tech: ['Python', 'MySQL', 'Power BI', 'Flask'],
      icon: <Database className="icon" />
    }
  ];

  const focusAreas = [
    { icon: <Brain />, title: 'Deep Learning', desc: 'Neural networks & architectures' },
    { icon: <Cpu />, title: 'Computer Vision', desc: 'OpenCV, YOLO, object detection' },
    { icon: <Sparkles />, title: 'NLP & LLMs', desc: 'RAG, chatbots, transformers' },
    { icon: <Zap />, title: 'Model Optimization', desc: 'Deployment & performance' }
  ];

  return (
    <div className="portfolio">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: #0a0a0f;
          color: #fff;
          overflow-x: hidden;
        }

        .portfolio {
          position: relative;
          min-height: 100vh;
        }

        .progress-bar {
          position: fixed;
          top: 0;
          left: 0;
          height: 3px;
          background: linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899);
          z-index: 1000;
          transition: width 0.1s ease;
        }

        .cursor-glow {
          position: fixed;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.15), transparent 70%);
          pointer-events: none;
          transform: translate(-50%, -50%);
          transition: opacity 0.3s;
          z-index: 0;
        }

        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          padding: 1.5rem 3rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(10, 10, 15, 0.8);
          backdrop-filter: blur(10px);
          z-index: 100;
          border-bottom: 1px solid rgba(99, 102, 241, 0.1);
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #6366f1, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
        }

        .nav-link {
          color: #a1a1aa;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s;
          position: relative;
          padding: 0.5rem 0;
        }

        .nav-link:hover, .nav-link.active {
          color: #6366f1;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: #6366f1;
          transition: width 0.3s;
        }

        .nav-link:hover::after, .nav-link.active::after {
          width: 100%;
        }

        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(236, 72, 153, 0.1) 0%, transparent 50%);
        }

        .grid-bg {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(99, 102, 241, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        .hero-content {
          position: relative;
          z-index: 1;
          text-align: center;
          max-width: 900px;
          padding: 2rem;
        }

        .hero-badge {
          display: inline-block;
          padding: 0.5rem 1.5rem;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-radius: 50px;
          font-size: 0.9rem;
          margin-bottom: 2rem;
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .hero h1 {
          font-size: 5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #fff, #6366f1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.2;
        }

        .hero h2 {
          font-size: 2rem;
          color: #a1a1aa;
          margin-bottom: 1.5rem;
          font-weight: 300;
        }

        .hero p {
          font-size: 1.2rem;
          color: #71717a;
          margin-bottom: 3rem;
          line-height: 1.8;
        }

        .hero-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn {
          padding: 1rem 2.5rem;
          border-radius: 12px;
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s;
          border: none;
          cursor: pointer;
          font-size: 1rem;
        }

        .btn-primary {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(99, 102, 241, 0.4);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(10px); }
        }

        .section {
          padding: 8rem 3rem;
          position: relative;
        }

        .section-title {
          font-size: 3rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #fff, #6366f1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          text-align: center;
          color: #71717a;
          font-size: 1.2rem;
          margin-bottom: 4rem;
        }

        .focus-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto 4rem;
        }

        .focus-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(99, 102, 241, 0.1);
          border-radius: 16px;
          padding: 2rem;
          transition: all 0.3s;
          cursor: pointer;
        }

        .focus-card:hover {
          background: rgba(99, 102, 241, 0.05);
          border-color: rgba(99, 102, 241, 0.3);
          transform: translateY(-5px);
        }

        .focus-card svg {
          width: 40px;
          height: 40px;
          color: #6366f1;
          margin-bottom: 1rem;
        }

        .focus-card h3 {
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
        }

        .focus-card p {
          color: #71717a;
          font-size: 0.95rem;
        }

        .skills-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .skill-category-advanced {
          margin-bottom: 4rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(99, 102, 241, 0.1);
          border-radius: 20px;
          padding: 2.5rem;
          backdrop-filter: blur(10px);
          transition: all 0.4s;
        }

        .skill-category-advanced:hover {
          background: rgba(99, 102, 241, 0.05);
          border-color: rgba(99, 102, 241, 0.3);
          transform: translateY(-5px);
          box-shadow: 0 20px 60px rgba(99, 102, 241, 0.2);
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .category-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2));
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6366f1;
        }

        .category-header h3 {
          font-size: 1.8rem;
          background: linear-gradient(135deg, #fff, #6366f1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .skill-tags-advanced {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .skill-tag-advanced {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(99, 102, 241, 0.15);
          border-radius: 12px;
          padding: 1.2rem;
          transition: all 0.3s;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .skill-tag-advanced::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.1), transparent);
          transition: left 0.5s;
        }

        .skill-tag-advanced:hover::before {
          left: 100%;
        }

        .skill-tag-advanced:hover {
          background: rgba(99, 102, 241, 0.08);
          border-color: rgba(99, 102, 241, 0.4);
          transform: translateX(5px);
        }

        .skill-name {
          display: block;
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.8rem;
          color: #fff;
        }

        .skill-bar {
          width: 100%;
          height: 6px;
          background: rgba(99, 102, 241, 0.1);
          border-radius: 10px;
          overflow: hidden;
          position: relative;
        }

        .skill-progress {
          height: 100%;
          background: linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899);
          border-radius: 10px;
          animation: fillBar 1.5s ease-out forwards;
          box-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
          position: relative;
        }

        .skill-progress::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          animation: shimmer 2s infinite;
        }

        @keyframes fillBar {
          from {
            width: 0 !important;
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .project-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(99, 102, 241, 0.1);
          border-radius: 16px;
          padding: 2.5rem;
          transition: all 0.3s;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899);
          transform: scaleX(0);
          transition: transform 0.3s;
        }

        .project-card:hover::before {
          transform: scaleX(1);
        }

        .project-card:hover {
          background: rgba(99, 102, 241, 0.05);
          border-color: rgba(99, 102, 241, 0.3);
          transform: translateY(-10px);
        }

        .project-icon {
          width: 60px;
          height: 60px;
          background: rgba(99, 102, 241, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .project-icon svg {
          width: 30px;
          height: 30px;
          color: #6366f1;
        }

        .project-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .project-card p {
          color: #a1a1aa;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-badge {
          padding: 0.4rem 0.8rem;
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 6px;
          font-size: 0.85rem;
          color: #8b5cf6;
        }

        .contact-section {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .contact-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-top: 3rem;
        }

        .contact-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(99, 102, 241, 0.1);
          border-radius: 12px;
          padding: 2rem;
          text-decoration: none;
          color: white;
          transition: all 0.3s;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .contact-card:hover {
          background: rgba(99, 102, 241, 0.1);
          border-color: rgba(99, 102, 241, 0.3);
          transform: translateY(-5px);
        }

        .contact-card svg {
          width: 30px;
          height: 30px;
          color: #6366f1;
        }

        .footer {
          text-align: center;
          padding: 3rem;
          border-top: 1px solid rgba(99, 102, 241, 0.1);
          color: #71717a;
        }

        @media (max-width: 768px) {
          .hero h1 { font-size: 3rem; }
          .hero h2 { font-size: 1.5rem; }
          .nav { padding: 1rem; }
          .nav-links { gap: 1rem; }
          .section { padding: 4rem 1.5rem; }
          .section-title { font-size: 2rem; }
        }
      `}</style>

      <div
        className="progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />

      <div
        className="cursor-glow"
        style={{
          left: mousePosition.x,
          top: mousePosition.y
        }}
      />

      <nav className="nav">
        <div className="logo">Amir Sakib Saad</div>
        <ul className="nav-links">
          {['About', 'Skills', 'Projects', 'Contact'].map(item => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section id="hero" className="hero" ref={heroRef}>
        <div className="hero-bg" />
        <div className="grid-bg" />
        <div className="hero-content">
          <div className="hero-badge">🚀 Available for exciting opportunities</div>
          <h1>Amir Sakib Saad</h1>
          <h2>Interest in Language Models & Data Science</h2>
          <p>
            Building intelligent, scalable systems with Machine Learning, Deep Learning,
            and cutting-edge AI technologies. Passionate about solving real-world problems
            through innovation.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              <Sparkles size={20} />
              View Projects
            </a>
            <a href="#contact" className="btn btn-secondary">
              <Mail size={20} />
              Get in Touch
            </a>
          </div>
        </div>
        <div className="scroll-indicator">
          <ChevronDown size={32} color="#6366f1" />
        </div>
      </section>

      <section id="about" className="section">
        <h2 className="section-title">Current Focus</h2>
        <p className="section-subtitle">What I'm building and learning</p>
        <div className="focus-grid">
          {focusAreas.map((area, i) => (
            <div key={i} className="focus-card">
              {area.icon}
              <h3>{area.title}</h3>
              <p>{area.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <div className="hero-bg" />
        <div className="grid-bg" />
        <h2 className="section-title">Technology Stack</h2>
        <p className="section-subtitle">Tools and frameworks I work with</p>
        <div className="skills-container">
          {Object.entries(skills).map(([category, items], catIndex) => (
            <div key={category} className="skill-category-advanced">
              <div className="category-header">
                <div className="category-icon">
                  {catIndex === 0 ? <Brain size={24} /> :
                    catIndex === 1 ? <Code size={24} /> :
                      catIndex === 2 ? <Zap size={24} /> :
                        catIndex === 3 ? <Database size={24} /> :
                          <Cpu size={24} />}
                </div>
                <h3>{category}</h3>
              </div>
              <div className="skill-tags-advanced">
                {items.map((skill, i) => (
                  <div key={i} className="skill-tag-advanced">
                    <span className="skill-name">{skill}</span>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{
                          width: `${85 + Math.random() * 15}%`,
                          animationDelay: `${i * 0.1}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Building the future, one project at a time</p>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <div key={i} className="project-card">
              <div className="project-icon">
                {project.icon}
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, j) => (
                  <span key={j} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section">
        <div className="contact-section">
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Always open to discussing new projects, creative ideas, or opportunities
          </p>
          <div className="contact-cards">
            <a href="https://github.com/amirsakib16" className="contact-card" target="_blank" rel="noopener noreferrer">
              <Github />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/amir-sakib-saad-2410282a7/" className="contact-card" target="_blank" rel="noopener noreferrer">
              <Linkedin />
              <span>LinkedIn</span>
            </a>
            <a href="mailto:amirsakib16@gmail.com" className="contact-card">
              <Mail />
              <span>Email</span>
            </a>
            <a href="https://leetcode.com/u/amirsakib16/" className="contact-card" target="_blank" rel="noopener noreferrer">
              <Code />
              <span>LeetCode</span>
            </a>
            <a href="https://www.facebook.com/amir.sakib.92/" className="contact-card" target="_blank" rel="noopener noreferrer">
              <Facebook />
              <span>Facebook</span>
            </a>
            <a href="https://www.instagram.com/amir.sakib.92?igsh=MWw4bHR6ZzhwMzJ4MQ%3D%3D&utm_source=qr" className="contact-card" target="_blank" rel="noopener noreferrer">
              <Instagram />
              <span>Instagram Account</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Amir Sakib. Building the future with AI ✨</p>
      </footer>
    </div>
  );
};

export default Portfolio;