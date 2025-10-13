import { CheckCircle, Target, Award, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Precision & Quality",
      description: "Every project meets the highest standards of accuracy and durability.",
    },
    {
      icon: CheckCircle,
      title: "Safety & Compliance",
      description: "OSHA-compliant operations with strict adherence to building codes.",
    },
    {
      icon: Award,
      title: "Expert Craftsmanship",
      description: "Our team brings decades of experience and commitment to excellence.",
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "Collaborative approach from design through final installation.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 uppercase text-center">
            ABOUT JMG CUSTOM METAL SHOP
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Building the Future | Serving Today
          </p>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 uppercase">ABOUT US</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              JMG Custom Metal Shop is a full-service metal fabrication company located in Miami, Florida. 
              With decades of combined experience, we've built our reputation on delivering high-quality 
              metalwork for contractors, architects, developers, and property owners across South Florida.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our team specializes in structural steel fabrication, custom railings, metal staircases, 
              CNC cutting, welding, and professional field installation. We pride ourselves on attention 
              to detail, safety, and our commitment to bringing your vision to life with precision and care.
            </p>
            
            <h2 className="text-4xl font-bold mb-8 uppercase mt-12">OUR MISSION</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              To be South Florida's premier provider of comprehensive metal fabrication solutions, 
              delivering precision, safety, and lasting quality in every project. JMG combines advanced 
              technology with expert craftsmanship to exceed expectations in structural steel, 
              architectural metalwork, and on-site installation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Located in Miami, Florida, we serve contractors, architects, developers, and property 
              owners throughout Miami-Dade, Broward, and Palm Beach Counties. Our comprehensive services 
              span from initial CAD detailing through precision fabrication to professional field installation.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 uppercase text-center">CORE VALUES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-background p-6 rounded-lg">
                <value.icon className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-3 uppercase">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 uppercase text-center">OUR PROCESS</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xl font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 uppercase">Design & Planning</h3>
                  <p className="text-muted-foreground">
                    Collaborative consultation and precision CAD detailing to ensure your vision becomes reality.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xl font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 uppercase">Fabrication</h3>
                  <p className="text-muted-foreground">
                    Advanced CNC technology and expert welding in our state-of-the-art facility.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xl font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 uppercase">Installation</h3>
                  <p className="text-muted-foreground">
                    Professional on-site assembly with safety-focused, code-compliant installation from first bolt to final inspection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 uppercase">LEADERSHIP & EXPERTISE</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Led by Jackson Suarez and a team of experienced fabricators, JMG Custom Metal Shop brings 
              decades of combined experience in precision metal fabrication. Our commitment to continuous 
              training and investment in cutting-edge technology ensures we deliver industry-leading results 
              on every project.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
