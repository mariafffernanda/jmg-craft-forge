import { Shield, Award, CheckCircle, HardHat, FileCheck, Users } from "lucide-react";

const Safety = () => {
  const certifications = [
    {
      icon: Shield,
      title: "OSHA Compliance",
      description: "Full compliance with OSHA safety standards and regulations for metal fabrication and construction work.",
    },
    {
      icon: Award,
      title: "Certified Welders",
      description: "All welding performed by certified professionals with expertise in MIG, TIG, and structural welding.",
    },
    {
      icon: FileCheck,
      title: "Code Compliance",
      description: "All work meets or exceeds Florida building codes and ADA accessibility requirements.",
    },
    {
      icon: HardHat,
      title: "Safety Training",
      description: "Ongoing safety training and certification programs for all team members.",
    },
    {
      icon: CheckCircle,
      title: "Quality Control",
      description: "Rigorous inspection processes at every stage from fabrication through installation.",
    },
    {
      icon: Users,
      title: "Liability Insurance",
      description: "Fully insured with comprehensive general liability and workers' compensation coverage.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 uppercase text-center">
            SAFETY & CERTIFICATIONS
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Safety and Precision at Every Step
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 uppercase">
              COMMITMENT TO SAFETY
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At JMG Custom Metal Shop, safety is not just a priority — it's the foundation of everything 
              we do. From our fabrication facility to on-site installation, we maintain the highest standards 
              of safety compliance, quality control, and professional certification. Our commitment ensures 
              that every project is completed safely, on schedule, and to exact specifications.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 uppercase text-center">
            CERTIFICATIONS & COMPLIANCE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-background p-6 rounded-lg">
                <cert.icon className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-3 uppercase">{cert.title}</h3>
                <p className="text-muted-foreground">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 uppercase text-center">
              OUR SAFETY PROCESS
            </h2>
            <div className="space-y-8">
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-2xl font-bold mb-2 uppercase">Pre-Project Planning</h3>
                <p className="text-muted-foreground">
                  Comprehensive safety assessment and planning before work begins, including site evaluation, 
                  risk analysis, and safety protocol development.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-2xl font-bold mb-2 uppercase">Fabrication Safety</h3>
                <p className="text-muted-foreground">
                  State-of-the-art facility with proper ventilation, equipment guarding, and personal protective 
                  equipment (PPE) requirements for all personnel.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-2xl font-bold mb-2 uppercase">Installation Protocols</h3>
                <p className="text-muted-foreground">
                  On-site safety measures including fall protection, equipment inspection, and coordination with 
                  general contractors to maintain a safe work environment.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-2xl font-bold mb-2 uppercase">Quality Inspection</h3>
                <p className="text-muted-foreground">
                  Multi-point inspection process ensuring all work meets specifications, building codes, and 
                  safety standards before project completion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 uppercase text-center">
              INDUSTRY STANDARDS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 uppercase">Welding Standards</h3>
                <p className="text-muted-foreground">
                  All welding performed to AWS (American Welding Society) standards by certified welders.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 uppercase">Material Quality</h3>
                <p className="text-muted-foreground">
                  Use of certified materials meeting ASTM specifications for strength and durability.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 uppercase">Building Codes</h3>
                <p className="text-muted-foreground">
                  Full compliance with Florida Building Code and local jurisdiction requirements.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 uppercase">ADA Compliance</h3>
                <p className="text-muted-foreground">
                  Railings and handrails fabricated to meet ADA accessibility guidelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Safety;
