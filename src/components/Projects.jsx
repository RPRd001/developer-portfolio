import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    image: "./images/advice-generator.png", // Replace with your project image URLs
    title: "Advice Generator Site",
    description: "An advice generation site using API",
    url: "https://example.com/project-one", // Replace with your project URLs
  },
  {
    id: 2,
    image: "./images/admin-dashboard.png",
    title: "Admin Dashboard Template",
    description: "A template made with HTML & CSS",
    url: "https://example.com/project-two",
  },
  {
    id: 3,
    image: "./images/insurance-landing.png",
    title: "Insurance Landing Page",
    description: "An Insurance Landing Page made with React & TailwindCSS",
    url: "https://example.com/project-two",
  },
  {
    id: 4,
    image: "./images/stats-component.png",
    title: "Stats Component",
    description: "Website component for Statistics",
    url: "https://example.com/project-two",
  },
  // Add more projects here
];

const ProjectsSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              url={project.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
