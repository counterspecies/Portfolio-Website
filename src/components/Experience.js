import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [

    {
      id: 1,
      title: "Computer Repair Technician",
      company: "Elite Computers",
      period: "Aug 2024 - Sep 2025",
      type: "Technical Support",
      location: "San Diego, CA",
      links: {
        website: "https://elitecocv.com/",
        google: "https://share.google/cw6gobj8LdSQbbiZ0",
        instagram: "https://www.instagram.com/elite_computers_bonita/"
      },
      description: "Systematically diagnosed and resolved complex hardware and software issues for a diverse client base, applying logical troubleshooting methodologies to identify root causes.",
      achievements: [
        "Systematically diagnosed and resolved complex hardware and software issues for a diverse client base",
        "Communicated technical solutions to non-technical clients",
        "Maintained high customer satisfaction rates"
      ],
    },
    {
      id: 2,
      title: "Detailing Professional | Founder",
      company: "Bonita Mobile Detailing",
      period: "Sep 2024 - Aug 2025",
      type: "Entrepreneurship",
      location: "Bonita, CA",
      links: {
        website: "https://bonita-mobile-detailing.square.site/",
        google: "https://share.google/0LXeCGkK7dSGlXgUo",
        instagram: "https://www.instagram.com/bonita.mobile.detailing/"
      },
      description: "Founded and operated a self-started service business, managing the entire client lifecycle from marketing, initial consultation and quoting, to final service delivery.",
      achievements: [
        "Launched and operated a self-started service business",
        "Managed complete client lifecycle from marketing to delivery",
        "Receivied dozens of 5 star reviews on Google"
      ],
    },
    {
      id: 3,
      title: "Music Tutor",
      company: "Chula Vista Middle School",
      period: "July 2021 - June  2024",
      type: "Education",
      location: "Chula Vista, CA",
      links: {
        website: "https://vapa.sweetwaterschools.org/",
        google: "https://share.google/QOnAzbHQvWZMFlqS4",
        instagram: "https://www.instagram.com/cvmasb/"
      },
      description: "Oversaw the musical development of middle school students by providing tailored lessons and feedback in both individual and group settings.",
      achievements: [
        "Led weekly music lessons with middle school musicians.",
        "Provided one on one consultation as well as group sessions.",
        "Developed structured lesson plans and provided constructive feedback to foster student growth and confidence.",
      ],
    }
  ];

  const education = {
    school: "Southwestern Community College",
    location: "Chula Vista, CA",
    degree: "Associates of Science in Computer Science",
    period: "Expected May 2026",
    courses: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming", 
      "Computer Architecture"
    ],
    achievements: [
      "Strong academic performance (3.41 GPA)",
      "Active in programming projects & group studies",
      "Self-directed learning focus"
    ]
  };

  const achievements = [
    {
      title: "Open Source Impact",
      bulletPoints: [
        "Built mapping application serving 38,500+ data points to thousands of global users worldwide",
        "Engineered high-performance RESTful API in Rust using Axum framework, with a Vanilla JS and Leaflet.js front-end",
        "Collaborated with dozens of activists, researchers, and developers to create impactful open-source software"
      ],
      icon: "🗺️",
      year: ""
    },
    {
      title: "The Pollination Project Grant Recipient",
      bulletPoints: [
        "Recived a competitive $1,000 seed grant from The Pollination Project to support development of open-source animal advocacy software",
        "Mastered communtiy outreach and crowdsourced development",
        "Recognized for real-world impact and innovation in animal advocacy"
      ],
      icon: "🐝",
      year: ""
    },
    {
      title: "Highly Awarded Musician",
      bulletPoints: [
        "Selected for top regional, audition-only ensemble for six consecutive years, landing leadership roles",
        "Started a school Jazz Band, performed concerts and solos as lead trumpet",
        "Recognized as 'Most Outstanding Musician' and received various accolades in local and regional competitions"
      ],
      icon: "🎵",
      year: ""
    },
    {
      title: "Social Media Impact for Animal Advocacy",
      bulletPoints: [
        "Launched YouTube channel and Instagram focused on animal welfare, reaching over 100k views",
        "Created engaging content that educated audiences about animal care and advocacy",
        "Built active community of animal lovers, developers, and advocates through consistent, impactful messaging"
      ],
      icon: "📱",
      year: ""
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="code-heading">Experience & Education</h2>
        </div>

        <div className="experience-content">
          {/* Professional Experience */}
          <div className="experience-section">
            <h3 className="subsection-title">
              <span className="subsection-icon">💼</span>
              Professional Experience
            </h3>
            
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="timeline-item">
                  <div className="timeline-marker">
                    <div className="timeline-dot"></div>
                    {index < experiences.length - 1 && <div className="timeline-line"></div>}
                  </div>
                  
                  <div className="experience-card">
                    <div className="experience-header">
                      <div className="experience-title-section">
                        <h4 className="experience-title">{exp.title}</h4>
                        <div className="experience-company">
                          {exp.company}
                          {exp.links && (
                            <span className="experience-links">
                              {' | '}
                              <a 
                                href={exp.links.website} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="company-link"
                              >
                                Website
                              </a>
                              {' | '}
                              <a 
                                href={exp.links.google} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="company-link"
                              >
                                Google
                              </a>
                              {' | '}
                              <a 
                                href={exp.links.instagram} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="company-link"
                              >
                                Instagram
                              </a>
                            </span>
                          )}
                        </div>
                        <div className="experience-meta">
                          <span className="experience-period">{exp.period}</span>
                          <span className="experience-location">{exp.location}</span>
                          <span className={`experience-type ${exp.type.toLowerCase().replace(' ', '-')}`}>
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="experience-description">{exp.description}</p>

                    <div className="experience-achievements">
                      <h5>Key Achievements:</h5>
                      <ul>
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="education-section">
            <h3 className="subsection-title">
              <span className="subsection-icon">🎓</span>
              Education
            </h3>
            
            <div className="education-card">
              <div className="education-header">
                <h4 className="education-school">{education.school}</h4>
                <div className="education-location">{education.location}</div>
              </div>
              
              <div className="education-details">
                <div className="education-degree">{education.degree}</div>
                <div className="education-period">{education.period}</div>
              </div>

              <div className="education-courses">
                <h5>Relevant Coursework:</h5>
                <div className="courses-grid">
                  {education.courses.map((course) => (
                    <div key={course} className="course-item">{course}</div>
                  ))}
                </div>
              </div>

              <div className="education-achievements">
                <h5>Academic Highlights:</h5>
                <ul>
                  {education.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Awards & Achievements */}
          <div className="achievements-section">
            <h3 className="subsection-title">
              <span className="subsection-icon">🏆</span>
              Awards & Achievements
            </h3>
            
            <div className="achievements-grid">
              {achievements.map((achievement) => (
                <div key={achievement.title} className="achievement-card">
                  <div className="achievement-icon">{achievement.icon}</div>
                  <div className="achievement-content">
                    <h4 className="achievement-title">{achievement.title}</h4>
                    <ul className="achievement-bullets">
                      {achievement.bulletPoints.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                    <div className="achievement-year">{achievement.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;