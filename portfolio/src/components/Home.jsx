import React, { useState, useEffect } from "react";

const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = [
    "Building Modern Web Apps",
    "Creating Responsive Designs",
    "Crafting User Experiences",
    "Developing Interactive UI",
    "Turning Ideas into Reality",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      if (isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setTypingSpeed(75);
      } else {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="home-content">
          <div className="home-image">
            <div className="image-wrapper">
              <div className="profile-image">
                <div className="image-border"></div>
                <img src="/Photo 1.jpg" alt="Karampreet Kaur Puhi" />
                <div className="image-glow"></div>
              </div>
            </div>
          </div>

          <div className="home-text">
            <h3 className="greeting">Hello, It's Me</h3>
            <h1 className="name">Karampreet Kaur Puhi </h1>
            <h2 className="profession">
              And I'm <span className="typing-text">{displayText}</span>
              <span className="cursor">|</span>
            </h2>
            <p className="description">
              I am a Frontend Developer focused on building modern, responsive,
              and user-centric web applications using React, JavaScript, and
              CSS. I enjoy transforming ideas into clean and functional digital
              experiences with efficient and maintainable code. Currently, I am
              exploring backend development and have a basic understanding of
              SQL for database management, aiming to strengthen my foundation
              and grow into a full-stack developer. I am driven by continuous
              learning and a passion for creating impactful web solutions.
            </p>

            <div className="social-icons">
              {/* <a href="#" className="social-icon" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon" aria-label="WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </a> */}
              <a href="https://www.linkedin.com/in/karampreet-kaur-puhi-b94755314" className="social-icon" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="http://github.com/puhikarampreetkaur-0912" className="social-icon" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
            </div>

            <button
              className="cta-button"
              onClick={() => scrollToSection("about")}
            >
              More About Me
            </button>
          </div>
        </div>
      </div>

      <div className="background-glow"></div>
    </section>
  );
};

export default Home;
