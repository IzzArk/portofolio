import { projects } from "./Data/ListProjects";

const Projects = () => {
    return (
        <section id="projects" className="fade-in">
            <div className="max-w-custom mx-auto px-4 sm:px-6 md:px-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-indigo-500">Projects</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={`Screenshot of ${project.title} project`}
                                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-300 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech) => (
                                        <span key={tech} className="px-3 py-1 bg-indigo-900/50 text-indigo-300 rounded-full text-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg w-full transition-colors duration-300">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

