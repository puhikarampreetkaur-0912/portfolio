import React, { useState, useEffect, useRef } from 'react'

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const technicalSkills = [
    { name: 'HTML', percentage: 100, icon: 'fab fa-html5' },
    { name: 'CSS', percentage: 95, icon: 'fab fa-css3' },
    { name: 'JavaScript', percentage: 90, icon: 'fab fa-js' },
    { name: 'SQL', percentage: 85, icon: 'fas fa-database' },
    { name: 'Bootstrap', percentage: 100, icon: 'fab fa-bootstrap' },
    { name: 'React', percentage: 75, icon: 'fab fa-react' },
  ]

  const professionalSkills = [
    { name: 'Creativity', percentage: 90, icon: 'fas fa-lightbulb' },
    { name: 'Communication', percentage: 65, icon: 'fas fa-comments' },
    { name: 'Problem Solving', percentage: 75, icon: 'fas fa-puzzle-piece' },
    { name: 'Teamwork', percentage: 85, icon: 'fas fa-users' },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const CircularProgress = ({ percentage, name, icon }) => {
    const radius = 50
    const circumference = 2 * Math.PI * radius
    const strokeDashoffset = circumference - (percentage / 100) * circumference

    return (
      <div className="circular-skill">
        <div className="circular-progress">
          <svg className="progress-ring" width="120" height="120">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0ef" />
                <stop offset="100%" stopColor="#b936ee" />
              </linearGradient>
            </defs>
            <circle
              className="progress-ring-circle bg"
              cx="60"
              cy="60"
              r={radius}
            />
            <circle
              className="progress-ring-circle progress"
              cx="60"
              cy="60"
              r={radius}
              style={{
                strokeDasharray: circumference,
                strokeDashoffset: isVisible ? strokeDashoffset : circumference,
              }}
            />
          </svg>
          <div className="percentage-text">{percentage}%</div>
        </div>
        <span className="skill-name"><i className={icon}></i> {name}</span>
      </div>
    )
  }

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="skills-container">
        <h2 className="section-title">My <span>Skills</span></h2>
        
        <div className="skills-content">
          <div className="technical-skills">
            <h3 className="skills-category-title">Technical Skills</h3>
            <div className="linear-skills">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="linear-skill">
                  <div className="skill-header">
                    <span className="skill-label">
                      <i className={skill.icon}></i> {skill.name}
                    </span>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{
                        width: isVisible ? `${skill.percentage}%` : '0%',
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="professional-skills">
            <h3 className="skills-category-title">Professional Skills</h3>
            <div className="circular-skills-grid">
              {professionalSkills.map((skill, index) => (
                <CircularProgress 
                  key={index} 
                  percentage={skill.percentage} 
                  name={skill.name}
                  icon={skill.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
