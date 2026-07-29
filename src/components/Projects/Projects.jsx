import "./Projects.css";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Weather App",
      image: "/hello.webp",
      description:
        "A responsive weather application that displays real-time weather information using the OpenWeather API.",
      technologies: ["React", "API", "CSS"],
      github: "https://github.com/yourusername/weather-app",
      demo: "https://your-weather-app.vercel.app",
    },
    {
      id: 2,
      title: "Task Manager",
      image: "/taskmanager copy.webp",
      description:
        "A task management application to organize daily activities with add, edit, and delete functionality.",
      technologies: ["React", "JavaScript", "CSS"],
      github: "https://github.com/yourusername/task-manager",
      demo: "https://your-task-manager.vercel.app",
    },
    {
      id: 3,
      title: "Stock Market Dashboard",
      image: "/tradingapp.avif",
      description:
        "A stock market dashboard that displays live stock prices using financial APIs.",
      technologies: ["React", "API", "Chart.js"],
      github: "https://github.com/yourusername/stock-dashboard",
      demo: "https://your-stock-dashboard.vercel.app",
    },
  ];

  return (
    <section className="projects-section" id="Projects">
      <div className="projects-container">
        <h2>My Projects</h2>

        <p className="projects-subtitle">
          Here are some of the projects I've built while learning and
          improving my web development skills.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tags">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-buttons">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn demo-btn"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn github-btn"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;