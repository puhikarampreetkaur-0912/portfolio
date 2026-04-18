import React from "react";

const About = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">
            About <span>Me</span>
          </h2>
          <h3 className="subtitle">Front End Developer!</h3>
          <p className="about-text">
            I am a motivated and detail-oriented Frontend Developer with a
            strong foundation in HTML, CSS, JavaScript, Bootstrap, React, and
            SQL. As a fresher, I have developed a solid understanding of
            building responsive, user-friendly, and visually engaging web
            applications. I enjoy transforming ideas into interactive digital
            experiences while focusing on clean, maintainable, and efficient
            code. Through hands-on projects, I have strengthened my
            problem-solving abilities and gained practical experience in
            designing and developing modern web interfaces. 
          </p>
          <p className="about-text">
            I am passionate about continuously learning new technologies and staying aligned
            with the latest trends in web development. Along with frontend
            development, I have also learned SQL to enhance my understanding of
            data handling and backend integration. My goal is to grow as a
            developer, gain real-world experience, and evolve into a full-stack
            professional while contributing effectively to impactful and
            scalable digital solutions.
          </p>
          <p className="about-text"></p>

          <button
            className="about-btn"
            onClick={() => scrollToSection("contact")}
          >
            More About Me
          </button>
        </div>

        <div className="about-image">
          <div className="image-wrapper">
            <div className="glow-ring outer"></div>
            <div className="glow-ring inner"></div>
            <div className="profile-image">
              <img src="/Photo 1.jpg" alt="Karampreet kaur" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
