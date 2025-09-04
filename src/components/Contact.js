import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend service
    // For now, we'll create a mailto link
    const subject = encodeURIComponent(formData.subject || 'Portfolio Contact');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:eliperez0024@gmail.com?subject=${subject}&body=${body}`;
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'eliperez0024@gmail.com',
      link: 'mailto:eliperez0024@gmail.com'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'San Diego, CA',
      link: null
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/eli-perez',
      link: 'https://www.linkedin.com/in/eli-perez-782714315/'
    },
    {
      icon: '🔗',
      label: 'GitHub',
      value: 'github.com/eliPerez12',
      link: 'https://github.com/eliPerez12'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="code-heading">Get In Touch</h2>
          <p className="section-subtitle">
            I'm actively seeking software engineering internship opportunities. 
            Let's connect and discuss how I can contribute to your team!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-header">
              <h3>Let's Connect</h3>
              <p>
                Whether you have an internship opportunity, want to discuss a project, 
                or just want to chat about technology, I'd love to hear from you.
              </p>
            </div>

            <div className="contact-methods">
              {contactInfo.map((info) => (
                <div key={info.label} className="contact-method">
                  <div className="method-icon">{info.icon}</div>
                  <div className="method-content">
                    <div className="method-label">{info.label}</div>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="method-value link"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="method-value">{info.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="availability-status">
              <div className="status-indicator">
                <div className="status-dot available"></div>
                <span>Available for internships</span>
              </div>
              <div className="status-details">
                <p>
                  <strong>Seeking:</strong> Summer 2025 Software Engineering Internships, Software Engineering Jobs<br/>
                  <strong>Interests:</strong> Systems Programming, Web Development, DevOps<br/>
                  <strong>Location:</strong> San Diego, CA (Open to remote/relocation)
                </p>
              </div>
            </div>

            <div className="quick-actions">
              <a 
                href="/PerezEli_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary"
              >
                📄 Download Resume
              </a>
              <a 
                href="https://www.linkedin.com/in/eli-perez-782714315/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                💼 LinkedIn Profile
              </a>
            </div>
          </div>

          <div className="contact-form-section">
            <div className="form-header">
              <h3>Send a Message</h3>
              <p>Use the form below or reach out directly via email.</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="Job Opportunity">Job Opportunity</option>
                  <option value="Internship Opportunity">Internship Opportunity</option>
                  <option value="Project Collaboration">Project Collaboration</option>
                  <option value="Technical Discussion">Technical Discussion</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell me about the opportunity, project, or what you'd like to discuss..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary submit-btn">
                <span>Send Message</span>
                <span className="send-icon">→</span>
              </button>
            </form>

            <div className="form-note">
              <p>
                💡 <strong>Note:</strong> This form will open your default email client. 
                You can also reach me directly at{' '}
                <a href="mailto:eliperez0024@gmail.com">eliperez0024@gmail.com</a>
              </p>
            </div>
          </div>
        </div>

        <div className="terminal-footer">
          <div className="terminal-content">
            <div className="command-line">
              <span className="prompt">$</span>
              <span className="command">echo "Thanks for visiting my portfolio!"</span>
            </div>
            <div className="output">
              <p>Thanks for visiting my portfolio!</p>
              <p>© 2025 Eli Perez | Built with React & passion for code</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;