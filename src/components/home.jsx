import React from 'react';

export default function Home() {
  return (
    <>
      {/* Home Section */}
      <section id="home" className="home">
        <div className="home-content">
          <p>Hello!</p>
          <h2>
            I'm <span className="highlight">Varun Khandelwal</span>
          </h2>
          <h3> Web Developer</h3>
          <div className="buttons">
            <a href="/contact" className="btn">Hire Me</a>
            <a href="#projects" className="btn-outline">My Works</a>
            <a href="https://github.com/Varun9548" target="_blank" rel="noopener noreferrer" className="btn-outline">
              GitHub
            </a>
          </div>
        </div>
        <div className="home-img">
          <img src="/Varun.jpg" alt="Varun Khandelwal" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          Passionate Frontend Developer crafting interactive, scalable web experiences.
        </p>
        <ul className="about-info">
          <li><strong>Name:</strong> Varun Khandelwal</li>
          <li><strong>Date of Birth:</strong> January 06, 2003</li>
          <li><strong>Address:</strong> Agra, UttarPradesh, India</li>
          <li><strong>Email:</strong> varunkhandelwal505050@gmail.com</li>
          <li><strong>Phone:</strong> +91 9548594326</li>
        </ul>
        <a href="/Resume.pdf" download className="btn">Download CV</a>
      </section>

      {/* Projects */}
      <section id="projects" className="projects">
        <h2>My Projects</h2>
        <div className="project-container">
          <div className="project-card">
            <h3><a href="https://github.com/Varun9548/Web-Development" target="_blank" rel="noopener">Web Development Projects</a></h3>
            <p>
              A collection of frontend and full-stack web projects built with HTML, CSS, and JavaScript.
            </p>
            <p><strong>Tech:</strong> HTML • CSS • JavaScript</p>
          </div>

          <div className="project-card">
            <h3><a href="https://github.com/Varun9548/LendnLearn" target="_blank" rel="noopener">LendnLearn</a></h3>
            <p>
              Full-stack e-library platform with user auth, search, digital book rentals.
            </p>
            <p><strong>Tech:</strong> HTML/CSS/JS • MySQL • Authentication</p>
          </div>

          <div className="project-card">
            <h3><a href="https://github.com/Varun9548/Multiple-Project-using-Python" target="_blank" rel="noopener">Python Games</a></h3>
            <p>
              Snake, Tic Tac Toe, Connect Four games with collision detection & scoring.
            </p>
            <p><strong>Tech:</strong> Python • Pygame</p>
          </div>

          <div className="project-card">
            <h3><a href="https://github.com/Varun9548/Golf-Charity-Subscription-Platform" target="_blank" rel="noopener">Golf Charity Platform</a></h3>
            <p>
              Subscription platform connecting golf fans with charities - user dashboard & donations.
            </p>
            <p><strong>Tech:</strong> Full-Stack Web</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="skills">
        <h2>My Skills</h2>
        <div className="skill">
          <p>JavaScript</p>
          <div className="progress"><span style={{ width: '100%' }}></span></div>
        </div>
        <div className="skill">
          <p>HTML5</p>
          <div className="progress"><span style={{ width: '90%' }}></span></div>
        </div>
        <div className="skill">
          <p>CSS3</p>
          <div className="progress"><span style={{ width: '90%' }}></span></div>
        </div>
        <div className="skill">
          <p>MySQL</p>
          <div className="progress"><span style={{ width: '90%' }}></span></div>
        </div>
        <div className="skill">
          <p>Python</p>
          <div className="progress"><span style={{ width: '80%' }}></span></div>
        </div>
        <div className="skill">
          <p>Java</p>
          <div className="progress"><span style={{ width: '80%' }}></span></div>
        </div>
      </section>
    </>
  );
}

