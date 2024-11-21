// ProjectsPage.js
import React, { useState } from 'react';
import Header from './Header';
import './ProjectsPage.css'; // Import CSS stylů

const ProjectsPage = () => {
  const [modalData, setModalData] = useState(null); // Stav pro data modálního okna

  const projects = [
    {
      title: 'Movie poster',
      description: 'Film o mé oblíbené postavě.',
      image: 'https://cloud-1.edupage.org/cloud?z%3AkEM%2BECDJX7Pu5ZHMEWJu5zOrqsoL%2F69Kjj8v6RcWfgy3FiOOyPflqSBJFhb%2BFztB'
    },
    {
      title: 'Domek v horách',
      description: 'Low poly projekt v Blenderu (hodnocen 2/3 btw).',
      image: 'https://cloud-8.edupage.org/cloud?z%3ANeiUeSFXzcxLrHDk2sYEwiQGzDnvU1P1ydw4oKCLTozA4VzIP%2BurUdFvp%2FUGM%2FxB'
    },
    {
      title: 'Dny v týdnu',
      description: 'Tento projekt obsadil výherní příčku ve školní soutěži.',
      image: 'https://cloud-b.edupage.org/cloud?z%3AgqxtMoTDHuq55kPe%2BPjf4Pr%2Fy2JSxk3kQU4MUoapRGAFsjvVNGNssIIeRwtIIvfI'
    }
  ];

  const openModal = (project) => {
    setModalData(project);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <div>
      <Header />
      <h1 className="page-title">Moje Projekty</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-box" key={index} onClick={() => openModal(project)}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modální okno */}
      {modalData && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <img src={modalData.image} alt={modalData.title} className="modal-image" />
            <h2 className="modal-title">{modalData.title}</h2>
            <p className="modal-description">{modalData.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
