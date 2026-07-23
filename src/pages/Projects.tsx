import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Newspaper } from "lucide-react";
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
          <article className="max-w-5xl mx-auto rounded-xl border-2 border-accent/40 bg-card p-8 md:p-12 shadow-lg">
            <div className="flex items-center gap-2 text-accent uppercase text-sm font-bold tracking-wide mb-3">
              <Newspaper className="h-4 w-4" /> Featured by the Sun Sentinel — May 2024
            </div>
            <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4">
              Sunset Point Park — Signature Red Installation
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              JMG completed the custom metal fabrication for the park's signature
              red installation in Tamarac, FL. This large-scale outdoor project
              highlights our ability to execute complex steel structures with
              precision, durability, and strong visual impact.
            </p>
            <blockquote className="border-l-4 border-accent bg-muted/50 px-5 py-4 italic text-muted-foreground mb-6">
              "Explore what's new at 4 South Florida parks: there's a beachside
              learning trail, observation pier and more" — a look at the newly
              opened Sunset Point Park in Tamarac and the fresh amenities drawing
              families back outdoors.
              <footer className="not-italic text-sm mt-2 text-foreground/70">
                — Sun Sentinel, May 14, 2024
              </footer>
            </blockquote>
            <a
              href="https://www.sun-sentinel.com/2024/05/14/explore-whats-new-at-4-south-florida-parks-theres-a-beachside-learning-trail-observation-pier-and-more/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold uppercase tracking-wide px-5 py-3 rounded-md hover:bg-accent/90 transition-colors"
            >
              Read the full article
              <ExternalLink className="h-4 w-4" />
            </a>
          </article>
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
            {portfolio.map((c) => {
              const hasGallery = c.images.length > 1;
              const inner = (
                <>
                  <div className="aspect-[4/3] bg-muted flex items-center justify-center overflow-hidden">
                    <img
                      src={c.cover}
                      alt={c.title}
                      loading="lazy"
                      className={`max-w-full max-h-full object-contain ${hasGallery ? "group-hover:scale-105 transition-transform duration-300" : ""}`}
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/95 via-primary/70 to-transparent p-5 text-primary-foreground">
                    <h3 className="text-xl font-bold uppercase mb-1">{c.title}</h3>
                    <p className="text-sm text-primary-foreground/90 mb-2">
                      {c.tagline}
                    </p>
                    {hasGallery && (
                      <span className="inline-flex items-center gap-1 text-xs text-accent font-semibold">
                        View {c.images.length} projects
                        <ArrowRight className="h-3 w-3" />
                      </span>
                    )}
                  </div>
                </>
              );
              return hasGallery ? (
                <Link
                  key={c.slug}
                  to={`/projects/${c.slug}`}
                  className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
                >
                  {inner}
                </Link>
              ) : (
                <div
                  key={c.slug}
                  className="relative overflow-hidden rounded-lg shadow-md"
                >
                  {inner}
                </div>
              );
            })}
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
