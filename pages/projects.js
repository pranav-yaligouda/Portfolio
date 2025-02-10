export default function Projects() {
    const projects = [
      { title: "Farm Finance Assistant", link: "#" },
      { title: "Task Manager", link: "#" },
      { title: "Notes App", link: "#" },
    ];
  
    return (
      <div className="min-h-screen p-10 bg-gray-900 text-white">
        <h1 className="text-4xl font-bold">My Projects</h1>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a key={index} href={project.link} className="p-6 bg-gray-800 rounded-lg hover:bg-primary transition">
              <h2 className="text-xl font-semibold">{project.title}</h2>
            </a>
          ))}
        </div>
      </div>
    );
  }
  