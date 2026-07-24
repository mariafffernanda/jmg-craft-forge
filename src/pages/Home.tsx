import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Award, Shield, Clock, Newspaper, ExternalLink } from "lucide-react";
import heroImage from "@/assets/portfolio/struct-jmg-site.jpg.asset.json";
import { portfolio } from "@/data/portfolio";

const Home = () => {
  const features = [
    { icon: Award, title: "Expert Craftsmanship", text: "OSHA compliant with experienced professionals" },
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
          style={{ backgroundImage: `url(${heroImage.url})` }}
        >
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 uppercase tracking-tight">
            BUILT IN THE SHOP. INSTALLED ON SITE.
          </h1>
          <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto">
            Structural steel, custom staircases, architectural metalwork, and specialty fabrication — designed, welded, and installed by the JMG crew across South Florida.
          </p>
          <p className="text-lg mb-8 text-accent font-semibold">
            Family-run. Miami-based. Trusted by contractors and architects since day one.
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
              A South Florida Metal Shop That Actually Answers the Phone
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              JMG Custom Metal Shop is a hands-on fabrication team based in Miami. We read the drawings,
              build in our own shop, and show up to install — from a single custom staircase to a full
              structural steel package. No middlemen, no runaround: talk directly to the people cutting,
              welding, and installing your project.
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
            {portfolio.slice(0, 3).map((c) => (
              <Link
                key={c.slug}
                to={`/projects/${c.slug}`}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={c.cover}
                    alt={c.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/95 to-transparent p-5 text-primary-foreground">
                  <h3 className="text-xl font-bold uppercase mb-1">{c.title}</h3>
                  <p className="text-sm text-primary-foreground/90">{c.tagline}</p>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs text-accent font-semibold">
                    View gallery <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/projects">VIEW ALL PROJECTS <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Press */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-accent uppercase text-sm font-bold tracking-wide mb-3">
              <Newspaper className="h-4 w-4" /> Featured by the Sun Sentinel — May 2024
            </div>
            <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4">
              Sunset Point Park — Signature Red Installation
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              JMG completed the custom metal fabrication for the park's signature
              red installation in Tamarac, FL — a large-scale outdoor project
              showcasing complex steel structures with precision, durability, and
              strong visual impact.
            </p>
            <blockquote className="border-l-4 border-accent bg-background/60 px-5 py-4 italic text-muted-foreground text-left mb-6">
              "Explore what's new at 4 South Florida parks: there's a beachside
              learning trail, observation pier and more" — featuring Tamarac's
              newly opened Sunset Point Park.
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
          </div>
        </div>
      </section>

      {/* Trusted By / Past Project Partners */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold uppercase mb-3">
              Trusted by Contractors &amp; Architects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              JMG partners with general contractors, architects, developers,
              construction managers, manufacturers, property managers, and
              municipalities on projects of every scale across South Florida.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              "General Contractors",
              "Architects & Designers",
              "Municipalities",
              "Cruise Line Projects",
              "Commercial Developers",
              "Aerospace & Industrial",
              "Property Managers",
              "Construction Managers",
            ].map((label) => (
              <div
                key={label}
                className="border border-border rounded-lg p-4 text-center bg-card text-sm font-semibold uppercase tracking-wide"
              >
                {label}
              </div>
            ))}
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
