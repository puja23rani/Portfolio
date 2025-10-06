const projects = [
  {
    title: "Halcyon Theme",
    description: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.",
    tech: ["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"],
    github: "#",
    demo: "#"
  },
  {
    title: "Spotify Profile",
    description: "A web app for visualizing personalized Spotify data.",
    tech: ["React", "Styled Components", "Express", "Spotify API"],
    github: "#",
    demo: "#"
  },
  {
    title: "Buildbox",
    description: "A web application that allows users to build custom PC configurations.",
    tech: ["Vue.js", "Firebase", "Stripe", "Vuex"],
    github: "#",
    demo: "#"
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-heading">Some Things I've Built</h2>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div className="project" key={idx}>
              <div className="project-header">
                <div className="folder">
                  <i className="fa-regular fa-folder"></i>
                </div>
                <div className="project-links">
                  <a href={project.github} className="project-link"><i className="fa-brands fa-github"></i></a>
                  <a href={project.demo} className="project-link"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="project-tech-list">
                {project.tech.map((tech, idx) => <li key={idx}>{tech}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
