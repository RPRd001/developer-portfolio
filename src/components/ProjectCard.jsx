const ProjectCard = ({ image, title, description, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block overflow-hidden rounded-lg shadow-lg bg-gray-200 hover:bg-gray-300 transition"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-[250px] object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
        <div className="text-center text-white px-4 py-2">
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
