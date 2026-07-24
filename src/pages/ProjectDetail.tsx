import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ZoomIn } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { getCategory, portfolio } from "@/data/portfolio";
import NotFound from "./NotFound";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? getCategory(slug) : undefined;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!category) return <NotFound />;

  const others = portfolio.filter((c) => c.slug !== category.slug).slice(0, 3);
  const images = category.images;
  const active = lightboxIndex !== null ? images[lightboxIndex] : null;
  const showPrev = () =>
    setLightboxIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
  const showNext = () =>
    setLightboxIndex((i) => (i === null ? i : (i + 1) % images.length));

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
                className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  className="relative aspect-[4/3] w-full bg-muted flex items-center justify-center overflow-hidden cursor-zoom-in"
                  aria-label={`View larger: ${img.caption}`}
                >
                  <img
                    src={img.url}
                    alt={`${category.title} — ${img.caption}`}
                    loading="lazy"
                    className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute top-2 right-2 bg-primary/80 text-primary-foreground rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="h-4 w-4" />
                  </span>
                </button>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={lightboxIndex !== null} onOpenChange={(o) => !o && setLightboxIndex(null)}>
        <DialogContent className="max-w-6xl w-[95vw] p-0 bg-background border-border">
          {active && (
            <div className="relative">
              <div className="bg-muted flex items-center justify-center max-h-[80vh] overflow-hidden">
                <img
                  src={active.url}
                  alt={`${category.title} — ${active.caption}`}
                  className="max-w-full max-h-[80vh] object-contain"
                />
              </div>
              <div className="flex items-center justify-end gap-4 p-4 border-t border-border">
                <p className="text-xs text-muted-foreground whitespace-nowrap">
                  {(lightboxIndex ?? 0) + 1} / {images.length}
                </p>
              </div>
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={showPrev}
                    aria-label="Previous image"
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-primary-foreground rounded-full p-2"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={showNext}
                    aria-label="Next image"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-primary-foreground rounded-full p-2"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

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