import React from 'react'

const Services = () => {
  const services = [
    {
      icon: 'fa-paint-brush',
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually appealing user interfaces that enhance user experience. I focus on user-centered design principles to deliver engaging and accessible digital products.',
    },
    {
      icon: 'fa-code',
      title: 'Web Design',
      description: 'Building responsive and modern websites using the latest technologies. From landing pages to complex web applications, I create solutions that meet your business needs.',
    },
    {
      icon: 'fa-mobile-alt',
      title: 'App Design',
      description: 'Designing mobile applications with seamless user experiences. I create intuitive interfaces that work beautifully across all devices and platforms.',
    },
  ]

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <h2 className="section-title">My <span>Services</span></h2>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <button className="learn-more-btn">
                Learn More
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
