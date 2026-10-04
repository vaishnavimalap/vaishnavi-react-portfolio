

import React, { useState } from "react";
import profile from "./assets/profile.jpg";

const skills = [
  ["HTML", "▣"], ["CSS", "◈"], ["JavaScript", "JS"], ["React", "⚛"],
  ["Node.js", "⬡"], ["Express", "EX"], ["Firebase", "●"], ["MySQL", "◆"],
  ["Python", "🐍"], ["Git & GitHub", "◆"], ["Tailwind CSS", "≈"], ["VS Code", "⌘"]
];

const projects = [
  {
    title: "QR Code Generator",
    text: "A full-stack QR code generator with a React frontend and Python Flask backend.",
    tags: ["React", "Python", "Flask"],
    icon: "▣",
    live: "https://quickqrcreater.netlify.app",
    // github: "https://github.com/yourusername/qr-code-generator"
  },

  // {
  //   title: "Scratch & Win",
  //   text: "Interactive scratch-card experience with payment flow, Firebase storage and reward logic.",
  //   tags: ["React", "Firebase", "Razorpay"],
  //   icon: "✦",
  //   live: "https://your-scratch-win.netlify.app",
  //   github: "https://github.com/yourusername/scratch-win"
  // },





  {
  title: "GlowNest Candles",
  text: "A beautiful e-commerce website for exploring and purchasing handmade candles, featuring an attractive UI and a smooth shopping experience.",
  tags: ["React", "JavaScript", "CSS"],
  icon: "🕯️",
  live: "https://glownestcandles.netlify.app",
  // github: "https://github.com/yourusername/glownest-candles"
},


  {
    title: "Tic Tac Toe",
    text: "Responsive game with player mode and computer mode using JavaScript logic.",
    tags: ["HTML", "CSS", "JavaScript"],
    icon: "×",
    live: "https://tictactoe-app-26.netlify.app/",
    // github: "https://github.com/yourusername/tic-tac-toe"
  }
];

function App() {
  const [menu, setMenu] = useState(false);

  const closeMenu = () => setMenu(false);

  return (
    <div className="site">
      <header className="navbar">
        <a className="logo" href="#home" onClick={closeMenu}>
          <span>&lt;/&gt;</span> Vaishnavi Malap
        </a>

        <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Toggle menu">
          ☰
        </button>

        <nav className={menu ? "nav-links open" : "nav-links"}>
          {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
          <a className="resume-btn" href="#contact" onClick={closeMenu}>↓ Download Resume</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="orb orb1"></div>
          <div className="orb orb2"></div>

          <div className="hero-copy reveal">
            <div className="availability"><span></span> Available for Opportunities</div>
            <p className="eyebrow">HELLO, I'M</p>
            <h1>Vaishnavi <span>Malap</span></h1>
            <h2>Full Stack Developer</h2>
            <p className="hero-text">
              I build responsive and interactive web applications using React,
              JavaScript and modern web technologies. I’m passionate about
              creating clean code and great user experiences.
            </p>

            <div className="hero-actions">
              <a className="primary-btn" href="#projects">View My Projects <b>→</b></a>
              <a className="secondary-btn" href="#contact">✉ Contact Me</a>
            </div>

            <div className="socials">
              <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">GH</a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">◎</a>
              <a href="mailto:malapvaishnavi177@gmail.com" aria-label="Email">✉</a>
            </div>
          </div>

          <div className="hero-photo-wrap reveal">
            <div className="photo-glow"></div>
            <div className="photo-card">
              <img src={profile} alt="Vaishnavi Malap" />
            </div>
            <div className="code-note">Code<br/>Create<br/>Build <small>♡</small></div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="section-grid">
            <div>
              <div className="section-label">ABOUT ME</div>
              <h2 className="section-title">Who I Am</h2>
              <p className="muted">
                I’m Vaishnavi Malap, a BScIT graduate. I’m a full stack developer
                with a strong interest in web technologies, problem solving and
                continuous learning. I enjoy building projects that are useful,
                creative and user-friendly.
              </p>
              <div className="facts">
                <div><b>🎓</b><span>Education<small>BScIT Graduate</small></span></div>
                <div><b>⌖</b><span>Location<small>Mumbai, Maharashtra</small></span></div>
                <div><b>♡</b><span>Interests<small>Travel · Painting · Technology</small></span></div>
              </div>
            </div>

            <div id="skills">
              <div className="section-label">TECH STACK</div>
              <h2 className="section-title">My Skills</h2>
              <div className="skills-grid">
                {skills.map(([name, icon]) => (
                  <div className="skill" key={name}><span>{icon}</span>{name}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section projects">
          <div className="section-heading">
            <div>
              <div className="section-label">MY WORK</div>
              <h2 className="section-title">Featured Projects</h2>
            </div>
            <a href="#contact" className="text-link">Have a project in mind? →</a>
          </div>

          <div className="project-grid">
            {projects.map(project => (
              <article className="project-card" key={project.title}>
                <div className="project-icon">{project.icon}</div>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                 {/* <div className="project-links">
                  <a href="#contact">Live Demo ↗</a>
                  <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a>
                </div>   */}


                <div className="project-links">
  <a
    href={project.live}
    target="_blank"
    rel="noreferrer"
  >
    Live Demo ↗
  </a>

  <a
    href={project.github}
    target="_blank"
    rel="noreferrer"
  >
    GitHub ↗
  </a>
</div>


              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section experience">
          <div className="section-label">MY JOURNEY</div>
          <h2 className="section-title">Experience & Learning</h2>
          <div className="timeline">
            <div className="timeline-item">
              <span className="dot"></span>
              <div><span className="date">FULL STACK DEVELOPMENT</span><h3>Web Development & Projects</h3>
              <p>Built responsive React applications, REST API integrations and full-stack projects using modern web technologies.</p></div>
            </div>
            <div className="timeline-item">
              <span className="dot"></span>
              <div><span className="date">EDUCATION</span><h3>BScIT Graduate</h3>
              <p>Developed a strong foundation in programming, databases, web development and software concepts.</p></div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="contact-box">
            <div>
              <div className="section-label">LET'S CONNECT</div>
              <h2 className="section-title">Let’s Build Something Great.</h2>
              <p className="muted">I’m open to developer opportunities, collaborations and interesting projects.</p>
            </div>
            <div className="contact-actions">
              <a className="primary-btn" href="mailto:malapvaishnavi177@gmail.com">✉ Email Me</a>
              <a className="secondary-btn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Vaishnavi Malap</span>
        <span>Built with React · Designed with ❤️</span>
      </footer>
    </div>
  );
}

export default App;