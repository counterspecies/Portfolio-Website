import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('languages');

  const skillCategories = {
    languages: {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "Rust", level: 95, experience: "3+ years", color: "var(--accent-orange)" },
        { name: "Python", level: 90, experience: "3+ years", color: "var(--accent-blue)" },
        { name: "JavaScript", level: 85, experience: "2+ years", color: "var(--accent-yellow)" },
        { name: "TypeScript", level: 80, experience: "2+ year", color: "var(--accent-blue)" },
        { name: "C / C++", level: 80, experience: "Custom CPU project", color: "var(--accent-red)" },
        { name: "Java", level: 75, experience: "2+ years", color: "var(--accent-orange)" },
      ]
    },
    backend: {
      title: "Back-End & Infrastructure",
      icon: "⚙️",
      skills: [
        { name: "Axum (Rust)", level: 85, experience: "Production API", color: "var(--accent-orange)" },
        { name: "PostgreSQL", level: 80, experience: "Database design", color: "var(--accent-blue)" },
        { name: "RESTful APIs", level: 85, experience: "22K+ data points", color: "var(--accent-green)" },
        { name: "NodeJS", level: 70, experience: "Containerization", color: "var(--accent-blue)" },
        { name: "AWS", level: 60, experience: "Basic deployment", color: "var(--accent-orange)" }
      ]
    },
    frontend: {
      title: "Front-End Development",
      icon: "🎨",
      skills: [
        { name: "React", level: 80, experience: "Multiple projects", color: "var(--accent-blue)" },
        { name: "HTML/CSS", level: 85, experience: "Responsive design", color: "var(--accent-orange)" },
        { name: "Leaflet.js", level: 75, experience: "Mapping application", color: "var(--accent-green)" },
        { name: "Vanilla JS", level: 80, experience: "Interactive UIs", color: "var(--accent-yellow)" },
        { name: "Netlify", level: 85, experience: "Multiple projects", color: "var(--accent-purple)" }
      ]
    },
    tools: {
      title: "Developer Tools & Platforms",
      icon: "🛠️",
      skills: [
        { name: "Git/GitHub", level: 85, experience: "Version control", color: "var(--accent-orange)" },
        { name: "VS Code", level: 90, experience: "Extension development", color: "var(--accent-blue)" },
        { name: "CI/CD", level: 75, experience: "Netlify, Shuttle-rs", color: "var(--accent-green)" },
        { name: "Linux/Unix", level: 75, experience: "Command line", color: "var(--accent-yellow)" },
      ]
    }
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="code-heading">Technical Skills</h2>
          <p className="section-subtitle">
            A comprehensive overview of my technical expertise, from systems programming 
            to modern web development.
          </p>
        </div>

        <div className="skills-content">
          <div className="category-tabs">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                className={`category-tab ${activeCategory === key ? 'active' : ''}`}
                onClick={() => setActiveCategory(key)}
              >
                <span className="category-icon">{category.icon}</span>
                <span className="category-title">{category.title}</span>
              </button>
            ))}
          </div>

          <div className="skills-display">
            <div className="skills-grid">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div key={skill.name} className="skill-card">
                  <div className="skill-header">
                    <h3 className="skill-name">{skill.name}</h3>
                    <span className="skill-experience">{skill.experience}</span>
                  </div>
                  
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{
                        width: `${skill.level}%`,
                        backgroundColor: skill.color,
                        animationDelay: `${index * 0.1}s`
                      }}
                    ></div>
                  </div>
                  
                  <div className="skill-level">{skill.level}%</div>
                </div>
              ))}
            </div>

            <div className="skills-summary">
              <div className="terminal-output">
                <div className="command-line">
                  <span className="prompt">$</span>
                  <span className="command">grep -r "expertise" skills/</span>
                </div>
                <div className="output-content">
                  <div className="output-line">
                    <span className="file-path">./backend/rust.rs:</span>
                    <span className="match-text">High-performance API development</span>
                  </div>
                  <div className="output-line">
                    <span className="file-path">./systems/cpu.asm:</span>
                    <span className="match-text">Custom architecture design</span>
                  </div>
                  <div className="output-line">
                    <span className="file-path">./frontend/react.jsx:</span>
                    <span className="match-text">Modern UI development</span>
                  </div>
                  <div className="output-line">
                    <span className="file-path">./database.csv:</span>
                    <span className="match-text">Efficient data management</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="learning-section">
          <h3 className="learning-title">Currently Learning</h3>
          <div className="learning-items">
            <div className="learning-item">
              <span className="learning-icon">📚</span>
              <div>
                <strong>Advanced Rust Patterns</strong>
                <p>Exploring async programming and advanced ownership patterns</p>
              </div>
            </div>
            <div className="learning-item">
              <span className="learning-icon">☁️</span>
              <div>
                <strong>Cloud Architecture</strong>
                <p>Deepening AWS knowledge for scalable deployments</p>
              </div>
            </div>
            <div className="learning-item">
              <span className="learning-icon">🧠</span>
              <div>
                <strong>Algorithm Optimization</strong>
                <p>Studying advanced data structures and algorithmic complexity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;