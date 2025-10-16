import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import { MessageCircle } from "lucide-react";
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
                href="mailto:jsuarezlig@gmail.com"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Mail size={18} />
                <span>jsuarezlig@gmail.com</span>
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
              <Link to="/faq" className="block hover:text-accent transition-colors">FAQ</Link>
              <Link to="/social" className="block hover:text-accent transition-colors">Social</Link>
              <Link to="/contact" className="block hover:text-accent transition-colors">Contact</Link>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">CONNECT WITH US</h3>
            <div className="flex gap-4 mb-6">
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
              <a
                href="https://wa.me/13052185311"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-accent transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={24} />
              </a>
            </div>
            <a
              href="https://wa.me/13052185311"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-[#25D366] text-white rounded-lg hover:opacity-90 transition-opacity font-bold"
            >
              <MessageCircle size={24} />
              <span>Chat on WhatsApp</span>
            </a>
            <p className="mt-6 text-sm italic">
              "Building the Future | Serving Today."
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm">
          <p>© 2025 JMG Custom Metal Shop. All rights reserved.</p>
          <p className="mt-2">Serving South Florida | Miami-Dade, Broward & Palm Beach Counties</p>
          <div className="mt-4">
            <Link 
              to="/auth" 
              className="inline-flex items-center gap-2 px-6 py-2 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors font-medium text-sm"
            >
              Admin Access
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
