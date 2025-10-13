import ProjectCard from "@/components/ProjectCard";
import projectStairs from "@/assets/project-stairs.jpg";
import projectStructural from "@/assets/project-structural.jpg";
import projectRailing from "@/assets/project-railing.jpg";
import cncCutting from "@/assets/cnc-cutting.jpg";
import weldingWork from "@/assets/welding-work.jpg";
import heroMetalwork from "@/assets/hero-metalwork.jpg";

const Projects = () => {
  const projects = [
    {
      image: projectStairs,
      title: "Commercial Staircase System",
      description: "Custom metal staircase with architectural railings and industrial mesh panels",
      location: "Fort Lauderdale, FL",
    },
    {
      image: projectStructural,
      title: "Structural Steel Framework",
      description: "Non-load-bearing steel fabrication for large-scale industrial facility",
      location: "Miami, FL",
    },
    {
      image: projectRailing,
      title: "Decorative Metal Railings",
      description: "ADA-compliant custom railings with ornamental design",
      location: "Hollywood, FL",
    },
    {
      image: cncCutting,
      title: "CNC Precision Components",
      description: "Complex metal parts fabricated with advanced CNC plasma cutting",
      location: "Hialeah, FL",
    },
    {
      image: weldingWork,
      title: "Certified Welding Services",
      description: "Professional TIG welding on stainless steel structural components",
      location: "Coral Gables, FL",
    },
    {
      image: heroMetalwork,
      title: "Custom Metal Fabrication",
      description: "Precision CNC cutting and forming for architectural metalwork",
      location: "Miami, FL",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 uppercase text-center">
            OUR PROJECTS
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Showcasing precision craftsmanship and certified excellence across South Florida
          </p>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                image={project.image}
                title={project.title}
                description={project.description}
                location={project.location}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 uppercase">SERVICE AREAS</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              JMG Custom Metal Shop proudly serves contractors, architects, developers, and property owners 
              throughout South Florida, including Miami-Dade, Broward, and Palm Beach Counties.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left">
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Miami-Dade County</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>Miami</li>
                  <li>Hialeah</li>
                  <li>Coral Gables</li>
                  <li>Kendall</li>
                </ul>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Broward County</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>Fort Lauderdale</li>
                  <li>Hollywood</li>
                  <li>Pembroke Pines</li>
                  <li>Miramar</li>
                </ul>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Palm Beach County</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>West Palm Beach</li>
                  <li>Boca Raton</li>
                  <li>Delray Beach</li>
                  <li>Boynton Beach</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
