import React, { useState, useEffect } from 'react';

function JupyterProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/AlexanderMC18/repos')
      .then(response => response.json())
      .then(data => {
        const filteredProjects = data.filter(project => project.language === 'Jupyter Notebook');
        setProjects(filteredProjects);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-4xl font-bold mb-8 text-center">Proyectos en Jupyter Notebook <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJD4OaD4vy7uRYaren_VTQQlDsw47UWp0WOg&s" alt="Jupyter Logo" className=" w-auto" />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <div key={project.id} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-start">
            <h3 className="text-3xl font-semibold mb-4">
              {project.name} <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJD4OaD4vy7uRYaren_VTQQlDsw47UWp0WOg&s" alt="Jupyter Logo" className="ml-2 h-6 w-auto" />
            </h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a 
              href={project.html_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-auto bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-700"
            >
              Ver en GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JupyterProjects;
