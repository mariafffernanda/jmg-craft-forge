import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    // In a real application, this would submit to a backend
    toast.success("Thank you! We'll contact you soon.");
    
    // Reset form
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 uppercase text-center">
            CONTACT US
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Get a quote today and discover how JMG can bring precision to your project
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 uppercase">GET IN TOUCH</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">PHONE</h3>
                    <a href="tel:3052185311" className="text-muted-foreground hover:text-accent transition-colors">
                      (305) 218-5311
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">EMAIL</h3>
                    <a href="mailto:info@jmgcustommetalshop.com" className="text-muted-foreground hover:text-accent transition-colors">
                      info@jmgcustommetalshop.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">ADDRESS</h3>
                    <p className="text-muted-foreground">
                      7318 N.W. 79th Ter.<br />
                      Miami, FL 33166
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">BUSINESS HOURS</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 7:00 AM - 5:00 PM<br />
                      Saturday: By Appointment<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-muted rounded-lg p-4 h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-accent mx-auto mb-2" />
                  <p className="text-muted-foreground">
                    <a 
                      href="https://maps.google.com/?q=7318+N.W.+79th+Ter.+Miami+FL+33166" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-accent transition-colors"
                    >
                      View on Google Maps
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 uppercase">REQUEST A QUOTE</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name (optional)"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(305) 123-4567"
                  />
                </div>

                <div>
                  <Label htmlFor="service">Service Needed</Label>
                  <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="structural-steel">Structural Steel Fabrication</SelectItem>
                      <SelectItem value="misc-steel">Miscellaneous Steel Fabrication</SelectItem>
                      <SelectItem value="staircases">Custom Staircases & Walkways</SelectItem>
                      <SelectItem value="railings">Custom Railings & Handrails</SelectItem>
                      <SelectItem value="metalwork">Metalwork & Architectural Detailing</SelectItem>
                      <SelectItem value="cnc">CNC Forming & Cutting</SelectItem>
                      <SelectItem value="welding">General Welding</SelectItem>
                      <SelectItem value="installation">Field Installation</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Project Details *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  SEND MESSAGE
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area CTA */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 uppercase">
            SERVING ALL OF SOUTH FLORIDA
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From Miami to Palm Beach, JMG Custom Metal Shop provides precision metal fabrication 
            services throughout South Florida. Contact us today to discuss your project.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
