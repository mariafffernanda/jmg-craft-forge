import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">CONTACT</h3>
            <div className="space-y-3">
              <a
                href="tel:3052185311"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Phone size={18} />
                <span>(305) 218-5311</span>
              </a>
              <a
                href="mailto:info@jmgcustommetalshop.com"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Mail size={18} />
                <span>info@jmgcustommetalshop.com</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>7318 N.W. 79th Ter.<br />Miami, FL 33166</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">QUICK LINKS</h3>
            <div className="space-y-2">
              <Link to="/" className="block hover:text-accent transition-colors">Home</Link>
              <Link to="/about" className="block hover:text-accent transition-colors">About</Link>
              <Link to="/services" className="block hover:text-accent transition-colors">Services</Link>
              <Link to="/projects" className="block hover:text-accent transition-colors">Projects</Link>
              <Link to="/contact" className="block hover:text-accent transition-colors">Contact</Link>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">FOLLOW US</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/jmgcustom"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://instagram.com/jmgcustom"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://linkedin.com/company/jmg-custom"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
            <p className="mt-6 text-sm italic">
              "Building the Future | Serving Today."
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm">
          <p>© 2025 JMG Custom Metal Shop. All rights reserved.</p>
          <p className="mt-2">Serving South Florida | Miami-Dade, Broward & Palm Beach Counties</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
