import ServiceCard from "@/components/ServiceCard";
import { Building2, Wrench, Construction, Shield, Sparkles, Cog, Flame, HardHat } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Structural Steel Fabrication",
      description: "Certified non-load-bearing steel fabrication for commercial and industrial applications. From CAD detailing to on-site installation — precision, compliance, and durability guaranteed.",
      keywords: "structural steel South Florida, steel fabricators South Florida, steel fabrication company",
    },
    {
      icon: Wrench,
      title: "Miscellaneous Steel Fabrication",
      description: "Custom fabrication of ladders, bollards, lintels, embeds, and specialty metal components for architectural and commercial builds.",
      keywords: "miscellaneous steel fabrication, custom metal components, commercial steel shop South Florida",
    },
    {
      icon: Construction,
      title: "Custom Staircases & Walkways",
      description: "Design, fabrication, and installation of metal stair systems, catwalks, and walkways for commercial, industrial, and residential spaces. Built for strength, compliance, and style.",
      keywords: "custom stairs South Florida, metal stair fabrication, commercial walkways",
    },
    {
      icon: Shield,
      title: "Custom Railings & Handrails",
      description: "ADA-compliant, code-certified architectural railings and handrails that merge safety and style. Expertly welded and finished for long-term durability.",
      keywords: "custom railings South Florida, metal handrails, ADA compliant railings",
    },
    {
      icon: Sparkles,
      title: "Metalwork & Architectural Detailing",
      description: "Ornamental and architectural metal features — including gates, fencing, louver panels, vents, and decorative panels.",
      keywords: "decorative metalwork South Florida, architectural metal panels, custom gates and fences",
    },
    {
      icon: Cog,
      title: "CNC Forming & Cutting",
      description: "Advanced CNC forming and laser/plasma cutting for complex metal parts with precision and repeatability. Ideal for large-scale or high-detail projects.",
      keywords: "CNC metal cutting South Florida, precision metal forming, custom metal fabrication",
    },
    {
      icon: Flame,
      title: "General Welding",
      description: "Certified MIG and TIG welding for carbon steel, stainless steel, and aluminum. Services include fabrication, repair, and on-site welding.",
      keywords: "welding services South Florida, MIG TIG welding, structural welding",
    },
    {
      icon: HardHat,
      title: "Field Installation",
      description: "On-site assembly and professional installation for all fabricated components. Safety-focused, on-schedule, and code-compliant from first bolt to final inspection.",
      keywords: "metal installation South Florida, field assembly, structural installation",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 uppercase text-center">
            OUR SERVICES
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Comprehensive metal fabrication solutions from design to installation
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                keywords={service.keywords}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 uppercase">
              TECHNOLOGY & PRECISION
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our state-of-the-art facility features advanced CNC machinery, precision cutting equipment, 
              and modern welding technology. This combination of cutting-edge tools and certified expertise 
              enables us to deliver complex projects with exceptional accuracy and efficiency.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From CAD-based design and plasma cutting to certified welding and quality control inspection, 
              every step of our process is optimized for precision, safety, and lasting quality.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
