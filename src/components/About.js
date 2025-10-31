import React from 'react';
import './About.css';
import profileImage from '../pfp.jpeg';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Me</h2>
            <div className="about-description">
              <p>
                I'm a <span className="education-highlight">Sophomore at Southwestern College</span> studying Computer Science. I started programming at 15 and fell in love with systems design—now I build full-stack applications in Rust, Python, and JavaScript.
              </p>
              
              <p>
                I'm most interested in <span className="rust-highlight">systems programming and Rust</span>. I've built RESTful APIs, custom CPU emulators, and embedded sensor drivers. I like working at all levels of the stack, from low-level assembly to high-level web frameworks.
              </p>

              <p>
                My biggest project is <span className="organization-highlight">Until Every Cage is Empty</span>—a full-stack geospatial platform with a backend built in <span className="rust-highlight">Axum (Rust)</span> deployed on <span className="rust-highlight">Shuttle</span>, and a frontend in <span className="rust-highlight">JavaScript</span>. It serves <span className="stats-highlight">38,500+</span> facilities to <span className="stats-highlight">3,000+</span> monthly users globally and has reached <span className="stats-highlight">100,000+</span> people through social media. The project has been recognized by major animal advocacy organizations and established itself as a critical resource for activists and researchers.
              </p>
                
              <p> 
                Right now I'm working as a Software Engineer Intern at Fish Defender, building serverless mapping applications. I'm looking for <span className="career-highlight">Summer 2026 internships</span> where I can work on challenging technical problems—whether that's environmental tech, social impact, or core infrastructure.
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
            <div className="profile-card">
              <img src={profileImage} alt="Eli Perez" className="profile-image" />
            </div>

            <div className="highlights"> 
              <div className="highlight-item">
                <div className="highlight-number">38.5K+</div>
                <div className="highlight-label">Data Points Served</div>
              </div>
              <div className="highlight-item">
                <div className="highlight-number">3K+</div>
                <div className="highlight-label">Monthly Users</div>
              </div>
              <div className="highlight-item">
                <div className="highlight-number">100K+</div>
                <div className="highlight-label">People Reached</div>
              </div>
              <div className="highlight-item">
                <div className="highlight-number">4+</div>
                <div className="highlight-label">Years Programming</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;