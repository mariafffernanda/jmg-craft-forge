import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCategory, portfolio } from "@/data/portfolio";
import NotFound from "./NotFound";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? getCategory(slug) : undefined;

  if (!category) return <NotFound />;

  const others = portfolio.filter((c) => c.slug !== category.slug).slice(0, 3);

  return (
    <div className="min-h-screen">
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-accent hover:underline mb-6"
          >
            <ArrowLeft className="h-4 w-4" /> All Projects
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold uppercase mb-4">
            {category.title}
          </h1>
          <p className="text-lg text-accent font-semibold mb-4">{category.tagline}</p>
          <p className="max-w-3xl text-primary-foreground/90 leading-relaxed">
            {category.description}
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.images.map((img, i) => (
              <figure
                key={i}
                className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={img.url}
                    alt={`${category.title} — ${img.caption}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <figcaption className="p-4 text-sm text-muted-foreground">
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-3xl font-bold uppercase">Explore Other Work</h2>
            <Button asChild variant="outline">
              <Link to="/projects">All Categories</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {others.map((c) => (
              <Link
                key={c.slug}
                to={`/projects/${c.slug}`}
                className="group relative block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={c.cover}
                    alt={c.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/95 to-transparent p-4 text-primary-foreground">
                  <h3 className="font-bold">{c.title}</h3>
                  <p className="text-xs text-accent inline-flex items-center gap-1">
                    View gallery <ArrowRight className="h-3 w-3" />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold uppercase mb-4">Have a similar project?</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Send us your drawings or a quick description and we'll walk you through
            fabrication, timeline, and installation.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Request a Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;