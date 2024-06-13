import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './routes/Home';
import JavaScriptProjects from './routes/JavaScriptProjects';
import PythonProjects from './routes/PythonProjects';
import JupyterProjects from './routes/JupyterProjects';
import KotlinProjects from './routes/KotlinProjects';

function Nav() {
  const location = useLocation();

  const navColors = {
    '/': 'bg-black',
    '/javascript': 'bg-yellow-500',
    '/python': 'bg-blue-600',
    '/jupyter': 'bg-orange-500',
    '/kotlin': 'bg-purple-500',
  };

  return (
    <nav className={`p-4 ${navColors[location.pathname] || 'bg-blue-600'}`}>
      <ul className="flex space-x-4 justify-center">
        <li>
          <Link className={`text-white ${location.pathname === '/' && 'font-bold'}`} to="/">Home</Link>
        </li>
        <li>
          <Link className={`text-white ${location.pathname === '/javascript' && 'font-bold'}`} to="/javascript">JavaScript</Link>
        </li>
        <li>
          <Link className={`text-white ${location.pathname === '/python' && 'font-bold'}`} to="/python">Python</Link>
        </li>
        <li>
          <Link className={`text-white ${location.pathname === '/jupyter' && 'font-bold'}`} to="/jupyter">Jupyter Notebook</Link>
        </li>
        <li>
          <Link className={`text-white ${location.pathname === '/kotlin' && 'font-bold'}`} to="/kotlin">Kotlin</Link>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  const location = useLocation();

  const backgroundColors = {
    '/': '',
    '/javascript': 'bg-yellow-100',
    '/python': 'bg-blue-100',
    '/jupyter': 'bg-orange-100',
    '/kotlin': 'bg-purple-100',
  };

  return (
    <div className={`min-h-screen flex flex-col ${backgroundColors[location.pathname] || ''} text-gray-900`}>
      <Nav />
      <div className="flex-grow container p-4 flex flex-wrap">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/javascript" element={<JavaScriptProjects />} />
          <Route path="/python" element={<PythonProjects />} />
          <Route path="/jupyter" element={<JupyterProjects />} />
          <Route path="/kotlin" element={<KotlinProjects />} />
        </Routes>
      </div>
    </div>
  );
}

function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default WrappedApp;
