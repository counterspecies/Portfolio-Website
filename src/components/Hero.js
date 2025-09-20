import React, { useState, useEffect } from 'react';
import './Hero.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Hello, I'm Eli Perez";
  const subtitle = "Software Engineer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="btn-red"></span>
                <span className="btn-yellow"></span>
                <span className="btn-green"></span>
              </div>
              <div className="terminal-title">eli@portfolio:~$</div>
            </div>
            <div className="terminal-body">
              <div className="command-line">
                <span className="prompt">$</span>
                <span className="command">whoami</span>
              </div>
              <div className="output">
                <h1 className="name-display">
                  {displayText}
                  <span className="cursor">|</span>
                </h1>
                <h2 className="subtitle">{subtitle}</h2>
                <p className="description">
                  I'm dedicated to creating high-performance,
                  open-source tools that drive social change.
                  I specialize in <span className="rust-highlight">full-stack</span> development, 
                  <span className="rust-highlight"> data visualization</span>, and <span className="rust-highlight">systems programming</span>,
                  focused on bringing data-driven solutions to complex social problems.
                </p>
              </div>

            </div>
          </div>
          
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-secondary">
              Get In Touch
            </a>
            <a 
              href="/PerezEli_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Download Resume
            </a>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="code-snippet">
            <div className="code-header">
              <span className="file-name">Editing: main.rs</span>
            </div>
            <SyntaxHighlighter
              language="rust"
              style={vscDarkPlus}
              className="code-content"
              showLineNumbers={true}
              wrapLines={true}
              customStyle={{
                background: 'transparent',
                padding: '20px',
                margin: '0',
                fontSize: '0.9rem',
                fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                borderRadius: '0 0 12px 12px'
              }}
            >
              {`fn main() {
    let eli = Developer {
        name: "Eli Perez",
        skills: vec![
            Rust, Javascript,
            DataVisualization, 
            Python, SystemsProgramming
        ],
        loves: "Animals",
        mission: "Create impactful software"
    };
    
    eli.create_amazing_things();
}`}
            </SyntaxHighlighter>
          </div>
          
          <div className="terminal-output">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="btn-red"></span>
                <span className="btn-yellow"></span>
                <span className="btn-green"></span>
              </div>
              <div className="terminal-title">eli@portfolio:~/cowsay-project$</div>
            </div>
            <div className="terminal-body">
              <div className="command-line">
                <span className="prompt">$</span>
                <span className="command">cargo run -- -cowsay</span>
              </div>
              <div className="ascii-output">
                <pre>{`    ________________________________
   / Mooo! Welcome to Eli's Portfolio \\
   \\ Website!                         /
    --------------------------------
         \\   ^__^ 
          \\  (oo)\\_______
             (__)\\       )\\/\\
                 ||----w |
                 ||     ||`}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;