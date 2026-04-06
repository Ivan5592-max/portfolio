import { useState, useEffect } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark')
      document.body.classList.remove('light')
    } else {
      document.body.classList.add('light')
      document.body.classList.remove('dark')
    }
  }, [darkMode])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app">
      {/* Custom cursor glow */}
      <div 
        className="cursor-glow" 
        style={{ 
          left: mousePos.x - 150, 
          top: mousePos.y - 150 
        }} 
      />

      {/* Floating shapes */}
      <div className="floating-shape shape-1"></div>
      <div className="floating-shape shape-2"></div>
      <div className="floating-shape shape-3"></div>
      {/* Profile Section */}
<section id="profile" className="section profile-section">
  <div className="profile-wrapper">
    <div className="profile-image">
      <img src="van.jpg" alt="Ivan Profile" />
    </div>
    <h2 className="profile-name">Hi, I'm Ivan</h2>
    <p className="profile-role">Frontend Developer | Web Enthusiast</p>
  </div>
</section>

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#" className="logo" onClick={(e) => { e.preventDefault(); scrollTo('home') }}>
            <span className="logo-icon">◆</span>
            <span className="logo-text">creativ.</span>
          </a>
          <div className="nav-links">
            <button onClick={() => scrollTo('work')}>Work</button>
            <button onClick={() => scrollTo('skills')}>Skills</button>
            <button onClick={() => scrollTo('contact')}>Contact</button>
          </div>
          <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="hero-badge">
            <span className="pulse-dot"></span>
            Available for work
          </div>
          <h1 className="hero-title">
            Creating digital<br />
            <span className="gradient-text">exceptional experiences</span>
          </h1>
          <p className="hero-subtitle">
            I'm a developer focused on building beautiful, performant web applications
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => scrollTo('work')}>
              View Work
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <button className="btn-secondary" onClick={() => scrollTo('contact')}>
              Let's Talk
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat"><h3>20+</h3><p>Projects</p></div>
            <div className="stat"><h3>3+</h3><p>Years</p></div>
            <div className="stat"><h3>15+</h3><p>Clients</p></div>
          </div>
        </section>

        {/* Work Section - Projects with Image Placeholders */}
        <section id="work" className="section">
          <div className="section-header">
            <span className="badge">Selected Work</span>
            <h2>Featured Projects</h2>
            <p className="section-desc">Some of my best work</p>
          </div>
          <div className="projects-grid">
            {/* Project 1 */}
            <div className="project-card featured">
              <div className="project-image-wrapper">
                <div className="image-placeholder">
                  <div className="image-overlay">
                    <div className="image-icon">🎨</div>
                    <span>Project Preview</span>
                  </div>
                </div>
                <div className="featured-badge">✨ Featured</div>
              </div>
              <div className="project-content">
                <div className="project-year">2025</div>
                <h3>Audio</h3>
                <p>Figma desig.</p>
                <div className="project-tags">
                  <span>UX Design</span>
                  <span>UI Design</span>
                </div>
                <div className="project-links">
                  <button className="project-link">Live Demo →</button>
                  <button className="project-link">GitHub →</button>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card">
              <div className="project-image-wrapper">
                <div className="image-placeholder">
                  <div className="image-overlay">
                    <div className="image-icon">🏦</div>
                    <span>Project Preview</span>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <div className="project-year">2026</div>
                <h3>Rapel</h3>
                <p>Alarm noitfy your friends in one tap.</p>
                <div className="project-tags">
                  <span>MongoDB</span>
                  <span>React</span>
                  <span>Node</span>
                  <span>Node</span>
                </div>
                <div className="project-links">
                  <button className="project-link">Live Demo →</button>
                  <button className="project-link">GitHub →</button>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card">
              <div className="project-image-wrapper">
                <div className="image-placeholder">
                  <div className="image-overlay">
                    <div className="image-icon">'/'</div>
                    <span>Project Preview</span>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <div className="project-year">2025</div>
                <h3>Notion</h3>
                <p>Todos task App</p>
                <div className="project-tags">
                  <span>MongoDB</span>
                  <span>Express</span>
                  <span>React</span>
                  <span>Node</span>
                </div>
                <div className="project-links">
                  <button className="project-link">Live Demo →</button>
                  <button className="project-link">GitHub →</button>
                </div>
              </div>
            </div>

           
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section">
          <div className="section-header">
            <span className="badge">Expertise</span>
            <h2>Tech Stack</h2>
            <p className="section-desc">Technologies I work with</p>
          </div>
          <div className="skills-wrapper">
            <div className="skills-container">
              {[
                { name: 'React / Next.js', level: 92, icon: '⚛️' },
                { name: 'TypeScript', level: 88, icon: '📘' },
                { name: 'Node.js', level: 85, icon: '🟢' },
                { name: 'Tailwind CSS', level: 90, icon: '🎨' },
                { name: 'Python', level: 78, icon: '🐍' },
                { name: 'UI/UX Design', level: 75, icon: '🎯' }
              ].map((skill, i) => (
                <div key={i} className="skill-item">
                  <div className="skill-info">
                    <span><span className="skill-icon">{skill.icon}</span> {skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.level}%` }}>
                      <div className="skill-glow"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="tools-cloud">
              {['Git', 'Figma', 'VSCode', 'Docker', 'Vite', 'Jest', 'MongoDB', 'Redis'].map((tool, i) => (
                <span key={i} className="tool-chip">{tool}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section">
          <div className="section-header">
            <span className="badge">Get in Touch</span>
            <h2>Let's Connect</h2>
            <p className="section-desc">Have a project? Let's talk</p>
          </div>
          <div className="contact-wrapper">
            <div className="contact-info">
              <div className="contact-card">
                <div className="contact-icon">📧</div>
                <h4>Email</h4>
                <a href="mailto:hello@creativ.dev">ivanemolaga47@gamil.com</a>
              </div>
              <div className="contact-card">
                <div className="contact-icon">📍</div>
                <h4>Location</h4>
                <p>ILoilo, PH</p>
              </div>
              <div className="contact-card">
                <div className="contact-icon">💼</div>
                <h4>Student Worker</h4>
                <p>Available for work</p>
              </div>
              <div className="social-links">
                <a href="#" className="social-link">GitHub</a>
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">Twitter</a>
              </div>
            </div>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input type="text" placeholder="Your name" />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your email" />
              </div>
              <div className="form-group">
                <textarea rows="4" placeholder="Tell me about your project"></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                </svg>
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>© 2026 creativ. All rights reserved.</p>
        </footer>
      </main>
    </div>
  )
}

export default App
