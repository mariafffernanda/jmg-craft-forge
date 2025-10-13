import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  keywords?: string;
}

const ServiceCard = ({ icon: Icon, title, description, keywords }: ServiceCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow border-2 hover:border-accent">
      <CardHeader>
        <div className="flex items-center gap-4 mb-2">
          <div className="p-3 bg-accent/10 rounded-lg">
            <Icon className="h-8 w-8 text-accent" />
          </div>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        {keywords && (
          <p className="text-xs text-muted-foreground mt-1">{keywords}</p>
        )}
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base mb-4">{description}</CardDescription>
        <Button asChild variant="outline" className="w-full">
          <Link to="/contact">Get a Quote</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
