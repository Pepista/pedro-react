// ProjectsPage.js
import React from 'react';
import Header from './Header';
import './ProjectsPage.css'; // Import CSS stylů

const ProjectsPage = () => {
  const projects = [
    {
      title: 'Projekt 1',
      description: 'Popis projektu 1, co všechno dělá a jak je zajímavý.',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Projekt 2',
      description: 'Popis projektu 2, stručně o jeho funkcionalitě.',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Projekt 3',
      description: 'Popis projektu 3, proč je důležitý a čím vyniká.',
      image: 'https://via.placeholder.com/150'
    }
  ];

  return (
    <div>
      <Header />
      <h1 className="page-title">Moje Projekty</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-box" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
