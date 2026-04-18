import React from 'react'

interface Project {
  image: string
  title: string
  description: string
  link: string
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      image: '/project1.jpg',
      title: 'Analytics Dashboard',
      description: 'A comprehensive data visualization dashboard built with React and D3.js for real-time business analytics.',
      link: '#',
    },
    {
      image: '/project2.jpg',
      title: 'Fitness Tracker App',
      description: 'Mobile-first fitness application with workout tracking, progress charts, and personalized recommendations.',
      link: '#',
    },
    {
      image: '/project3.jpg',
      title: 'E-Commerce Platform',
      description: 'Full-featured online shopping platform with payment integration, inventory management, and user authentication.',
      link: '#',
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
