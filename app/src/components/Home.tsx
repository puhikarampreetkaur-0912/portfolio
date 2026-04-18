import React, { useState, useEffect } from 'react'

const Home: React.FC = () => {
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const words = ['Frontend Developer', 'Web Designer', 'UI/UX Designer']

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length
      const fullText = words[i]

      if (isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length - 1))
        setTypingSpeed(75)
      } else {
        setDisplayText(fullText.substring(0, displayText.length + 1))
        setTypingSpeed(150)
      }

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [displayText, isDeleting, loopNum, typingSpeed])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="home-content">
          <div className="home-text">
            <h3 className="greeting">Hello, It&apos;s Me</h3>
            <h1 className="name">Havindu Hemal</h1>
            <h2 className="profession">
              And I&apos;m a <span className="typing-text">{displayText}</span>
              <span className="cursor">|</span>
            </h2>
            <p className="description">
              I&apos;m a passionate frontend developer with expertise in creating beautiful and functional websites. 
              I specialize in building responsive web applications using modern technologies like React, 
              JavaScript, and CSS. With a keen eye for design and a commitment to clean code, I bring 
              ideas to life through immersive digital experiences.
            </p>
            
            <div className="social-icons">
              <a href="#" className="social-icon" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon" aria-label="WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="social-icon" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
            </div>

            <button 
              className="cta-button"
              onClick={() => scrollToSection('about')}
            >
              More About Me
            </button>
          </div>

          <div className="home-image">
            <div className="image-wrapper">
              <div className="glow-ring outer"></div>
              <div className="glow-ring inner"></div>
              <div className="profile-image">
                <img src="/profile.jpg" alt="Havindu Hemal" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="background-glow"></div>
    </section>
  )
}

export default Home
