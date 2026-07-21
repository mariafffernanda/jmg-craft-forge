import { Link } from "react-router-dom";
import { ArrowRight, Newspaper } from "lucide-react";
import { portfolio } from "@/data/portfolio";

const Projects = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 uppercase text-center">
            OUR PROJECTS
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            A portfolio of structural steel, custom staircases, architectural
            metalwork, and specialty fabrication delivered across South Florida.
          </p>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto rounded-xl border-2 border-accent/40 bg-card p-8 md:p-12 shadow-lg">
            <div className="flex items-center gap-2 text-accent uppercase text-sm font-bold tracking-wide mb-3">
              <Newspaper className="h-4 w-4" /> Featured by the Sun Sentinel — May 2024
            </div>
            <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4">
              Sunset Point Park — Signature Red Installation
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              JMG completed the custom metal fabrication for the park's signature
              red installation in Tamarac, FL. This large-scale outdoor project
              highlights our ability to execute complex steel structures with
              precision, durability, and strong visual impact.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Categories */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold uppercase mb-3">Portfolio</h2>
            <p className="text-lg text-muted-foreground">
              Browse by category to see our completed work and in-progress fabrication.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((c) => (
              <Link
                key={c.slug}
                to={`/projects/${c.slug}`}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={c.cover}
                    alt={c.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/95 via-primary/70 to-transparent p-5 text-primary-foreground">
                  <h3 className="text-xl font-bold uppercase mb-1">{c.title}</h3>
                  <p className="text-sm text-primary-foreground/90 mb-2">
                    {c.tagline}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs text-accent font-semibold">
                    View {c.images.length} project{c.images.length > 1 ? "s" : ""}
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
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
