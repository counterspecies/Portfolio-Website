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
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-header">
              <h3>Let's Connect</h3>
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
                <span>Available for Jobs / Internships</span>
              </div>
              <div className="status-details">
                <p>
                  <strong>Seeking:</strong> Software Engineering Jobs, Summer 2026 Software Engineering Internships<br/>
                  <strong>Interests:</strong> Full-stack development, Data visualization, Systems programming<br/>
                  <strong>Location:</strong> San Diego, CA (Open to remote/relocation)
                </p>
              </div>
            </div>

          </div>

          <div className="contact-form-section">
            <div className="form-header">
              <h3>Send a Message</h3>
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
              <p>© 2025 Eli Perez</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;