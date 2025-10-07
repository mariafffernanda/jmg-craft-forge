interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  location: string;
}

const ProjectCard = ({ image, title, description, location }: ProjectCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={`${title} - ${description}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/95 to-transparent p-6 text-primary-foreground">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-sm mb-1">{description}</p>
        <p className="text-xs text-accent">{location}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
