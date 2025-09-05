import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [

    {
      id: 1,
      title: "Computer Repair Technician",
      company: "Elite Computers",
      period: "Aug 2024 - Present",
      type: "Technical Support",
      location: "San Diego, CA",
      description: "Systematically diagnosed and resolved complex hardware and software issues for a diverse client base, applying logical troubleshooting methodologies to identify root causes.",
      achievements: [
        "Diagnosed complex hardware and software issues",
        "Applied logical troubleshooting methodologies",
        "Identified root causes efficiently",
        "Communicated technical solutions to non-technical clients",
        "Maintained high customer satisfaction rates"
      ],
      skills: ["Hardware Troubleshooting", "Software Diagnostics", "Client Communication", "Problem Solving", "Technical Support"]
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
        "Applied meticulous attention to detail in multi-step processes",
        "Ensured flawless, high-quality results for every client",
        "Developed strong client communication and management skills"
      ],
      skills: ["Project Management", "Client Relations", "Quality Assurance", "Business Operations", "Marketing"]
    },
    {
      id: 3,
      title: "Music Tutor",
      company: "Chula Vista Middle School",
      period: "Aug 2021 - June  2024",
      type: "Education",
      location: "Chula Vista, CA",
      description: "Oversaw the musical development of middle school students by providing tailored lessons and feedback in both individual and group settings.",
      achievements: [
        "Led weekly music lessons with middle school musicians.",
        "Provided one on one consultation as well as group sessions.",
        "Deconstructed complex musical concepts into simple, understandable lessons for middle school students.",
        "Developed structured lesson plans and provided constructive feedback to foster student growth and confidence.",
      ],
      skills: ["Education", "Communication", "Music Theory"]
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
      "Computer Architecture",
      "Discrete Mathematics"
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
        "Built mapping application serving 22,000+ data points to thousands of global users worldwide",
        "Engineered high-performance RESTful API in Rust using Axum framework, with a Vanilla JS and Leaflet.js front-end",
        "Collaborated with dozens of activists and researchers to create impactful open-source software"
      ],
      icon: "🗺️",
      year: "2025"
    },
    {
      title: "AP Computer Science Exam",
      bulletPoints: [
        "Achieved highest possible score (5) through dedicated self-study",
        "Mastered advanced programming concepts, algorithms, and problem-solving skills independently",
        "Completed 5 AP exams total during senior year"
      ],
      icon: "🏆",
      year: "2024"
    },
    {
      title: "Music Achievements",
      bulletPoints: [
        "Selected for highly competitive, audition-only ensemble for six consecutive years; earned Principal Chair Trumpet for two years",
        "Started a school Jazz Band, performed concerts and solos as lead trumpet",
        "Recognized as 'Most Outstanding Musician' and received various accolades in local and regional competitions"
      ],
      icon: "🎵",
      year: "Highly Awarded Musician | 6 Years in Top Regional Ensemble"
    },
    {
      title: "Social Media Impact for Animal Advocacy",
      bulletPoints: [
        "Launched YouTube channel and Instagram focused on animal welfare, reaching over 100k views",
        "Created engaging content that educated audiences about animal care and advocacy",
        "Built active community of animal lovers and advocates through consistent, impactful messaging"
      ],
      icon: "📱",
      year: "2025"
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="code-heading">Experience & Education</h2>
          <p className="section-subtitle">
            My professional journey combining technical expertise with entrepreneurial spirit 
            and strong academic foundation.
          </p>
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

                    <div className="experience-skills">
                      <h5>Skills Applied:</h5>
                      <div className="skills-tags">
                        {exp.skills.map((skill) => (
                          <span key={skill} className="skill-tag">{skill}</span>
                        ))}
                      </div>
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