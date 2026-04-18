import React from 'react'

const Projects = () => {
  const projects = [
    {
      image: '/Weather Photo.jpeg',
      title: 'Weather App',
      description: 'Built a React-based weather app with real-time data fetching using Axios, city search functionality, efficient state management, and a clean, responsive interface.',
      link: 'https://github.com/puhikarampreetkaur-0912/Weather',
    },
    {
      image: '/News Photo.jpeg',
      title: 'News App',
      description: 'Developed a responsive live news web application with real-time API integration, dynamic filtering, multi-language support, dark/light mode, and robust error handling.',
      link: 'https://github.com/puhikarampreetkaur-0912/News.git',
    },
    {
      image: '/Task Photo.jpeg',
      title: 'Student Task Manager',
      description: 'Developed a Smart Task Manager using React with full CRUD operations, task prioritization, search and filtering, persistent storage via localStorage, and a responsive, user-friendly UI.',
      link: 'https://github.com/puhikarampreetkaur-0912/Student_Task_Manager.git',
    },
  ]

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">Latest <span>Project</span></h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="overlay-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <a href={project.link} className="project-link">
                      <i className="fas fa-external-link-alt"></i>
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
