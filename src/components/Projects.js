import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Until Every Cage is Empty",
      subtitle: "Open-Source Mapping Application",
      description: "Engineered a high-performance RESTful API in Rust using the Axum framework to serve over 22,000 data points to a global user base of activists and researchers. Developed a dynamic front-end with Vanilla JavaScript and Leaflet.js.",
      technologies: ["Rust", "Axum", "JavaScript", "Leaflet.js", "PostgreSQL", "Python"],
      features: [
        "RESTful API serving 30,000+ data points",
        "Interactive map visualization",
        "Global user base of activists and researchers",
        "Open-source community contributions",
        "Python data processing pipeline"
      ],
      links: {
        live: "https://untileverycage.org",
        github: "https://github.com/eliPerez12/UntilEveryCage"
      },
      media: {
        type: "video",
        src: "/videos/cage-demo.mp4", 
        placeholder: "UECE.png",
        alt: "Until Every Cage is Empty demo",
        content: "🗺️ Mapping Application"
      },
      codeSnippet: {
        language: "rust",
        title: "Data Processing Pipeline",
        code: `// Rust data processing for location mapping
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
struct Location {
    id: i32,
    name: String,
    coordinates: (f64, f64),
    active: bool,
}

fn process_locations(raw_data: Vec<RawLocation>) -> Vec<Location> {
    raw_data.into_iter()
        .filter(|loc| loc.is_valid())
        .map(|loc| loc.into_location())
        .collect()
}`
      }
    },
    {
      id: 2,
      title: "Electron CPU",
      subtitle: "8-Bit Computer, Assembler, and Emulator",
      description: "Designed and built a custom 8-bit CPU from the ground up using logic gates in an electronics simulator, complete with a custom instruction set and architecture. Developed a corresponding assembler and emulator in Rust.",
      technologies: ["Rust", "Assembly", "VS Code Extension", "Logic Design", "Computer Architecture"],
      features: [
        "Custom 8-bit CPU architecture",
        "Complete instruction set design",
        "Rust-based assembler and emulator",
        "VS Code extension for syntax highlighting",
        "Low-level systems programming"
      ],
      links: {
        github: "https://github.com/eliPerez12/electron"
      },
      media: {
        type: "video",
        src: "/videos/cpu-demo.mp4",
        placeholder: "/images/cpu-placeholder.jpg",
        alt: "Electron CPU emulator demo",
        content: "🖥️ Custom CPU Design"
      },
      codeSnippet: {
        language: "rust",
        title: "CPU Instruction Execution",
        code: `// CPU instruction execution cycle
impl CPU {
    fn execute_instruction(&mut self, instruction: u8) {
        match instruction {
            0x01 => self.load_immediate(),
            0x02 => self.add_registers(),
            0x03 => self.store_memory(),
            0x04 => self.jump_if_zero(),
            _ => panic!("Unknown instruction: {:#x}", instruction)
        }
        self.program_counter += 1;
    }
}`
      }
    },
    {
      id: 3,
      title: "Portfolio Website",
      subtitle: "This Site - React & Modern Design",
      description: "A modern, responsive portfolio website built with React, featuring terminal-inspired design, smooth animations, and multimedia project showcases. Designed to highlight technical skills and project demonstrations.",
      technologies: ["React", "CSS3", "JavaScript", "Responsive Design", "Animation"],
      features: [
        "Terminal-inspired dark theme",
        "Smooth animations and transitions",
        "Multimedia project showcases",
        "Responsive design for all devices",
        "Code aesthetic with syntax highlighting"
      ],
      links: {
        github: "https://github.com/eliPerez12/Portfolio-Website"
      },
      media: {
        type: "video",
        src: "/videos/portfolio-demo.mp4",
        placeholder: "/images/portfolio-placeholder.jpg",
        alt: "Portfolio website demo",
        content: "💻 React Portfolio Site"
      },
      codeSnippet: {
        language: "javascript",
        title: "Terminal Typing Animation",
        code: `// Animated typing effect for terminal
useEffect(() => {
  if (currentIndex < fullText.length) {
    const timeout = setTimeout(() => {
      setDisplayText(fullText.slice(0, currentIndex + 1));
      setCurrentIndex(currentIndex + 1);
    }, 100);
    return () => clearTimeout(timeout);
  }
}, [currentIndex, fullText]);`
      }
    }
  ];



  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="code-heading">Featured Projects</h2>
          <p className="section-subtitle">
            Here are some of my favorite projects that showcase my skills in 
            systems programming, web development, and problem-solving.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card ${activeProject === index ? 'active' : ''}`}
              onClick={() => setActiveProject(index)}
            >
              <div className="project-media">
                {project.media.type === 'video' && project.media.src ? (
                  <video 
                    className="project-video"
                    autoPlay
                    loop
                    muted 
                    playsInline
                    preload="auto"
                    onLoadStart={() => console.log(`Loading video: ${project.media.src}`)}
                    onCanPlay={() => console.log(`Video can play: ${project.media.src}`)}
                    onError={(e) => {
                      console.log(`Video error: ${project.media.src}`, e);
                    }}
                  >
                    <source src={project.media.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : project.media.type === 'image' && project.media.src ? (
                  <img 
                    className="project-image"
                    src={project.media.src}
                    alt={project.media.alt}
                    onError={(e) => {
                      console.log(`Image failed to load: ${project.media.src}`);
                    }}
                  />
                ) : (
                  <div className="placeholder-container">
                    <div className="placeholder-content">
                      <span className="placeholder-text">
                        {project.media.content || "🚀 Project Demo"}
                      </span>
                      <small className="placeholder-note">
                        Media coming soon
                      </small>
                    </div>
                  </div>
                )}
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.links.live && (
                    <a 
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      Live Demo
                    </a>
                  )}
                  <a 
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;