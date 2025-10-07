import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";

const Social = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 uppercase text-center">
            FOLLOW US ON SOCIAL
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Stay connected with JMG Custom Metal Shop on our social media channels
          </p>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a
              href="https://facebook.com/jmgcustom"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-[#1877F2] text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              <Facebook size={32} />
              <span className="font-bold text-lg">Follow on Facebook</span>
            </a>
            <a
              href="https://instagram.com/jmgcustom"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              <Instagram size={32} />
              <span className="font-bold text-lg">Follow on Instagram</span>
            </a>
            <a
              href="https://linkedin.com/company/jmg-custom"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-[#0A66C2] text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              <Linkedin size={32} />
              <span className="font-bold text-lg">Follow on LinkedIn</span>
            </a>
            <a
              href="https://wa.me/13052185311"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={32} />
              <span className="font-bold text-lg">Chat on WhatsApp</span>
            </a>
            <a
              href="https://www.tiktok.com/@jmgcustom"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-black text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              <span className="font-bold text-lg">Follow on TikTok</span>
            </a>
          </div>
        </div>
      </section>

      {/* Instagram Embed */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 uppercase text-center">LATEST FROM INSTAGRAM</h2>
          <div className="max-w-xl mx-auto bg-background rounded-lg p-8 text-center">
            <Instagram size={64} className="mx-auto mb-4 text-accent" />
            <p className="text-muted-foreground mb-6">
              Follow us on Instagram @jmgcustom to see our latest projects, behind-the-scenes content, and metal fabrication inspiration.
            </p>
            <a
              href="https://instagram.com/jmgcustom"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white rounded-md hover:opacity-90 transition-opacity font-bold"
            >
              View on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* LinkedIn Embed */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 uppercase text-center">LATEST FROM LINKEDIN</h2>
          <div className="max-w-xl mx-auto bg-muted rounded-lg p-8 text-center">
            <Linkedin size={64} className="mx-auto mb-4 text-accent" />
            <p className="text-muted-foreground mb-6">
              Connect with us on LinkedIn for industry insights, project updates, and professional networking.
            </p>
            <a
              href="https://linkedin.com/company/jmg-custom"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#0A66C2] text-white rounded-md hover:opacity-90 transition-opacity font-bold"
            >
              View on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Facebook Embed */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 uppercase text-center">LATEST FROM FACEBOOK</h2>
          <div className="max-w-xl mx-auto bg-background rounded-lg p-8 text-center">
            <Facebook size={64} className="mx-auto mb-4 text-accent" />
            <p className="text-muted-foreground mb-6">
              Like our Facebook page for updates, customer testimonials, and community engagement.
            </p>
            <a
              href="https://facebook.com/jmgcustom"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#1877F2] text-white rounded-md hover:opacity-90 transition-opacity font-bold"
            >
              View on Facebook
            </a>
          </div>
        </div>
      </section>

      {/* TikTok Section */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 uppercase text-center">LATEST FROM TIKTOK</h2>
          <div className="max-w-xl mx-auto bg-muted rounded-lg p-8 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="currentColor" className="mx-auto mb-4 text-accent">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
            <p className="text-muted-foreground mb-6">
              Follow us on TikTok @jmgcustom for short videos of our metalworking projects, shop tours, and fabrication tips.
            </p>
            <a
              href="https://www.tiktok.com/@jmgcustom"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-black text-white rounded-md hover:opacity-90 transition-opacity font-bold"
            >
              View on TikTok
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 uppercase">
            CONNECT WITH US TODAY
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay up to date with our latest projects, industry insights, and special offers by following us on social media.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Social;
