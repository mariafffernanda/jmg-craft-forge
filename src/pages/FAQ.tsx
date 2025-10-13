import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What types of metal fabrication services do you offer?",
      answer: "We offer comprehensive metal fabrication services including structural steel fabrication, custom railings and handrails, metal staircases and walkways, miscellaneous steel fabrication, CNC forming and cutting, welding (MIG/TIG), architectural metalwork, and field installation services."
    },
    {
      question: "What areas do you serve in South Florida?",
      answer: "We proudly serve all of South Florida, including Miami-Dade, Broward, and Palm Beach Counties. This includes Miami, Fort Lauderdale, Hollywood, Hialeah, Coral Gables, West Palm Beach, Boca Raton, and surrounding areas."
    },
    {
      question: "How do I get a quote for my project?",
      answer: "You can request a quote by filling out our contact form, calling us at (305) 218-5311, or emailing us at jsuarezlig@gmail.com. Please provide details about your project including dimensions, materials, and any specific requirements."
    },
    {
      question: "What is the typical turnaround time for a project?",
      answer: "Project timelines vary depending on the scope and complexity. Simple fabrication jobs may take 1-2 weeks, while larger structural projects can take several weeks. We'll provide a detailed timeline estimate when we quote your project."
    },
    {
      question: "Do you provide installation services?",
      answer: "Yes! We offer professional field installation services for all fabricated components. Our team handles on-site assembly and installation, ensuring everything is completed safely, on schedule, and to code."
    },
    {
      question: "Who performs the welding work?",
      answer: "All our welding is performed by experienced professionals with expertise in MIG, TIG, and structural welding techniques."
    },
    {
      question: "Do you work with architects and contractors?",
      answer: "Absolutely! We work closely with general contractors, architects, engineers, and developers on commercial, industrial, and residential projects throughout South Florida."
    },
    {
      question: "Can you fabricate custom designs?",
      answer: "Yes, we specialize in custom metal fabrication. We can work from your drawings, CAD files, or collaborate with you to design and fabricate unique metal components for your project."
    },
    {
      question: "What materials do you work with?",
      answer: "We work with a wide range of materials including carbon steel, stainless steel, aluminum, and other specialty metals depending on your project requirements."
    },
    {
      question: "Do you meet building code requirements?",
      answer: "Yes, all our work meets or exceeds Florida building codes and ADA accessibility requirements where applicable. We ensure full compliance with all relevant standards and regulations."
    },
    {
      question: "Can I visit your shop to see work in progress?",
      answer: "Yes, we welcome shop visits! Please call ahead at (305) 218-5311 to schedule an appointment so we can give you our full attention."
    },
    {
      question: "Do you offer CNC cutting services?",
      answer: "Yes, we have advanced CNC forming and laser/plasma cutting capabilities for complex metal parts requiring precision and repeatability."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 uppercase text-center">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Get answers to common questions about our metal fabrication services
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-bold hover:text-accent">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 uppercase">
            STILL HAVE QUESTIONS?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Our team is here to help. Contact us today to discuss your metal fabrication needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:3052185311"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-bold"
            >
              CALL (305) 218-5311
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary rounded-md hover:bg-primary hover:text-primary-foreground transition-colors font-bold"
            >
              REQUEST A QUOTE
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
