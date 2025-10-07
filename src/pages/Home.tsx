import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Award, Shield, Clock } from "lucide-react";
import heroImage from "@/assets/hero-metalwork.jpg";
import projectStairs from "@/assets/project-stairs.jpg";
import projectStructural from "@/assets/project-structural.jpg";
import projectRailing from "@/assets/project-railing.jpg";
import ProjectCard from "@/components/ProjectCard";

const Home = () => {
  const features = [
    { icon: Award, title: "Certified Craftsmanship", text: "OSHA compliant with certified welders" },
    { icon: Shield, title: "Safety First", text: "Rigorous safety standards on every project" },
    { icon: CheckCircle, title: "Quality Guaranteed", text: "Precision fabrication built to last" },
    { icon: Clock, title: "On-Time Delivery", text: "Reliable scheduling and installation" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 uppercase tracking-tight">
            PRECISION METAL FABRICATION
          </h1>
          <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto">
            Structural Steel | Custom Railings | Metal Staircases | CNC Cutting | Welding & Installation
          </p>
          <p className="text-lg mb-8 text-accent font-semibold">
            Serving South Florida with Certified Excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="default" className="text-lg px-8">
              <Link to="/contact">
                REQUEST A QUOTE <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/projects">VIEW OUR WORK</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 uppercase">
              South Florida's Trusted Metal Fabrication Partner
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              JMG Custom Metal Shop delivers comprehensive metal fabrication solutions with precision, 
              safety, and lasting quality. From CAD detailing to on-site installation, we combine advanced 
              technology with certified craftsmanship to exceed expectations in structural steel, 
              architectural metalwork, and custom fabrication.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-background p-6 rounded-lg text-center">
                <feature.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 uppercase">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 uppercase">FEATURED PROJECTS</h2>
            <p className="text-lg text-muted-foreground">
              Showcasing precision craftsmanship across South Florida
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              image={projectStairs}
              title="Commercial Staircase"
              description="Custom metal staircase with architectural railings"
              location="Fort Lauderdale, FL"
            />
            <ProjectCard
              image={projectStructural}
              title="Structural Steel Framework"
              description="Non-load-bearing steel fabrication for industrial facility"
              location="Miami, FL"
            />
            <ProjectCard
              image={projectRailing}
              title="Decorative Metal Railings"
              description="ADA-compliant custom railings with modern design"
              location="Hollywood, FL"
            />
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/projects">VIEW ALL PROJECTS <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 uppercase">
            READY TO START YOUR PROJECT?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a consultation with our fabrication experts and discover how JMG Custom Metal Shop 
            can bring precision and quality to your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="default">
              <Link to="/contact">REQUEST A QUOTE</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/services">EXPLORE SERVICES</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
