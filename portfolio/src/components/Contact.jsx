import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">
          Contact <span>Me</span>
        </h2>

        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-subtitle">Let's Work Together</h3>
            <p className="contact-text">
              Great ideas deserve great execution. If you have a vision in mind,
              let’s collaborate and turn it into something impactful.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-detail">
                  <span className="label">Email</span>
                  <span className="value">puhikarampreetkaur@gmail.com</span>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-detail">
                  <span className="label">Phone</span>
                  <span className="value">+91 9157740817</span>
                </div>
              </div>
            </div>

            <div className='social-icons'>

  <a 
    href="https://www.linkedin.com/in/karampreet-kaur-puhi-b94755314" 
    className="social-icon" 
    aria-label="LinkedIn"
    target="_blank"
  >
    <i className="fab fa-linkedin-in"></i>
  </a>

  <a 
    href="https://github.com/puhikarampreetkaur-0912" 
    className="social-icon" 
    aria-label="GitHub"
    target="_blank"
  >
    <i className="fab fa-github"></i>
  </a>

</div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Submit
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
