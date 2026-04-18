import React, { useState, useEffect, useRef } from 'react'

interface Skill {
  name: string
  percentage: number
}

interface CircularSkillProps {
  percentage: number
  name: string
  isVisible: boolean
}

const CircularProgress: React.FC<CircularSkillProps> = ({ percentage, name, isVisible }) => {
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
      <span className="skill-name">{name}</span>
    </div>
  )
}

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const technicalSkills: Skill[] = [
    { name: 'HTML', percentage: 90 },
    { name: 'CSS', percentage: 60 },
    { name: 'JavaScript', percentage: 85 },
    { name: 'Python', percentage: 50 },
    { name: 'React', percentage: 75 },
  ]

  const professionalSkills: Skill[] = [
    { name: 'Creativity', percentage: 90 },
    { name: 'Communication', percentage: 65 },
    { name: 'Problem Solving', percentage: 75 },
    { name: 'Teamwork', percentage: 85 },
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
                    <span className="skill-label">{skill.name}</span>
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
                  isVisible={isVisible}
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
