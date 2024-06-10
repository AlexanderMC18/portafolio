import React, { useState, useEffect } from 'react';

function KotlinProjects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/AlexanderMC18/repos')
        .then(response => response.json())
        .then(data => {
            const filteredProjects = data.filter(project => project.language === 'Kotlin');
            setProjects(filteredProjects);
        });
    }, []);

    return (
        <div className="container mx-auto p-4">
        <h2 className="text-4xl font-bold mb-8 text-center flex items-center justify-center">
            Proyectos en Kotlin <img src="https://play-lh.googleusercontent.com/P5yBHwKAwbMBf8kfYukYlAmFpIqwVW-X2kUpZjgsdH674k7KHvaYXG6bjqUjXr5i4NI" alt="Kotlin Logo" className="ml-24 h-48 w-auto" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-start">
                <h3 className="text-3xl font-semibold mb-4 flex items-center">
                {project.name} <img src="https://play-lh.googleusercontent.com/P5yBHwKAwbMBf8kfYukYlAmFpIqwVW-X2kUpZjgsdH674k7KHvaYXG6bjqUjXr5i4NI" alt="Kotlin Logo" className="ml-2 h-6 w-auto" />
                </h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-700"
                >
                Ver en GitHub
                </a>
            </div>
            ))}
        </div>
        </div>
    );
}

export default KotlinProjects;
