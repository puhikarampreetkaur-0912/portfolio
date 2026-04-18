import React from 'react'

const About: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <div className="image-wrapper">
            <div className="glow-ring outer"></div>
            <div className="glow-ring inner"></div>
            <div className="profile-image">
              <img src="/profile.jpg" alt="Havindu Hemal" />
            </div>
          </div>
        </div>

        <div className="about-content">
          <h2 className="section-title">About <span>Me</span></h2>
          <h3 className="subtitle">Full Stack Developer!</h3>
          <p className="about-text">
            I am a dedicated and passionate Full Stack Developer with over 3 years of experience 
            in creating dynamic and responsive web applications. My journey in web development 
            started with a curiosity about how websites work, which quickly evolved into a 
            deep passion for coding and problem-solving.
          </p>
          <p className="about-text">
            I have expertise in both frontend and backend technologies, allowing me to build 
            complete solutions from concept to deployment. My frontend skills include React, 
            JavaScript, HTML5, CSS3, and modern frameworks, while my backend experience covers 
            Node.js, Python, and database management.
          </p>
          <p className="about-text">
            I believe in writing clean, maintainable code and staying up-to-date with the latest 
            industry trends. My goal is to create user-centric applications that not only look 
            great but also provide exceptional performance and usability.
          </p>
          
          <button 
            className="about-btn"
            onClick={() => scrollToSection('contact')}
          >
            More About Me
          </button>
        </div>
      </div>
    </section>
  )
}

export default About
