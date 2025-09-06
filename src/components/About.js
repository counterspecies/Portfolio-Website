import React from 'react';
import './About.css';
import profileImage from '../pfp.jpeg';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="code-heading">About Me</h2>
            <div className="about-description">
              <p>
                I'm a driven Computer Science student at <span className="highlight">Southwestern Community College </span> 
                 with a passion for building impactful software. My journey in programming started with self-studying 
                for the AP Computer Science exam, where I achieved the highest possible score (5).
              </p>
              
              <p>
                What sets me apart is my deep love for <span className="rust-highlight">systems programming</span> and 
                <span className="rust-highlight"> Rust</span>. I've built everything from RESTful APIs serving thousands 
                of users to custom 8-bit CPUs with complete instruction sets. I enjoy working at all levels of the stack, 
                from low-level assembly to modern web frameworks.
              </p>

              <p>
                Beyond coding, I bring <span className="highlight">entrepreneurial experience</span> from founding 
                and operating my own mobile detailing business, where I developed strong marketing, client management, and 
                attention-to-detail skills. I am also a musician, and have over 9 years of experience playing the trumpet,
                and many other instruments like the bass guitar.
              </p>

              <p>
                I'm actively seeking <span className="highlight">software engineering internship opportunities </span> 
                where I can contribute to meaningful projects while continuing to grow as a developer.
              </p>
            </div>

            {/* <div className="achievements">
              <h3>Recent Achievements</h3>
              <ul>
                <li>
                  <span className="achievement-icon">🚀</span>
                  <div>
                    <strong>Open Source Impact</strong>
                    <p>Built mapping application serving 22,000+ data points to global users</p>
                  </div>
                </li>
                <li>
                  <span className="achievement-icon">🏆</span>
                  <div>
                    <strong>AP Computer Science Exam</strong>
                    <p>Achieved highest possible score (5) -- self studied</p>
                  </div>
                </li>
                <li>
                  <span className="achievement-icon">🎺</span>
                  <div>
                    <strong>Sweetwater District Honors Band</strong>
                    <p>First Chair Trumpet for 2 years, 6 years total participation</p>
                  </div>
                </li>
              </ul>
            </div> */}
          </div>

          <div className="about-visual">
            <div className="stats-card">
              <div className="terminal-header">
                <div className="terminal-buttons">
                  <span className="btn-red"></span>
                  <span className="btn-yellow"></span>
                  <span className="btn-green"></span>
                </div>
                <div className="terminal-title">me.jpeg</div>
              </div>
              <div className="stats-content">
                <img src={profileImage} alt="Eli Perez" className="profile-image" />
              </div>
            </div>

            <div className="quick-facts">
              <div className="fact-item">
                <div className="fact-number">30K+</div>
                <div className="fact-label">Data Points Served</div>
              </div>
              <div className="fact-item">
                <div className="fact-number">4+</div>
                <div className="fact-label">Years Programming</div>
              </div>
              <div className="fact-item">
                <div className="fact-number">1.5k+</div>
                <div className="fact-label">Monthly users</div>
              </div>
              <div className="fact-item">
                <div className="fact-number">High-Impact</div>
                <div className="fact-label">Crowd Sourced Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;