import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const AdminButton = () => {
  return (
    <Link
      to="/admin"
      className="fixed bottom-4 right-4 bg-accent hover:bg-accent/90 text-accent-foreground px-3 py-2 rounded-full shadow-lg flex items-center gap-2 transition-all hover:scale-105 text-sm font-medium z-50"
    >
      <Shield className="h-4 w-4" />
      Admin
    </Link>
  );
};

export default AdminButton;
