import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { LogOut, Mail, Phone, User, Calendar, Package } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface Lead {
  id: string;
  name: string;
  company: string | null;
  email: string;
  phone: string;
  service: string;
  project_details: string;
  status: string | null;
  created_at: string | null;
}

const AdminDashboard = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      navigate("/auth");
      return;
    }

    const { data: roleData } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", session.user.id)
      .eq("role", "admin")
      .maybeSingle();

    if (!roleData) {
      toast.error("You don't have admin privileges");
      navigate("/");
      return;
    }

    setIsAdmin(true);
    loadLeads();
  };

  const loadLeads = async () => {
    try {
      const { data, error } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setLeads(data || []);
    } catch (error) {
      toast.error("Failed to load leads");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const updateLeadStatus = async (leadId: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from("leads")
        .update({ status: newStatus })
        .eq("id", leadId);

      if (error) throw error;

      toast.success("Lead status updated");
      loadLeads();
    } catch (error) {
      toast.error("Failed to update lead status");
    }
  };

  if (!isAdmin || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="font-heading text-4xl font-bold">Admin Dashboard</h1>
            <Button onClick={handleLogout} variant="outline">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>

          <Tabs defaultValue="leads" className="space-y-6">
            <TabsList>
              <TabsTrigger value="leads">Leads ({leads.length})</TabsTrigger>
              <TabsTrigger value="content">Content Editor</TabsTrigger>
            </TabsList>

            <TabsContent value="leads" className="space-y-4">
              {leads.length === 0 ? (
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-center text-muted-foreground">No leads yet</p>
                  </CardContent>
                </Card>
              ) : (
                leads.map((lead) => (
                  <Card key={lead.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">{lead.name}</CardTitle>
                        <select
                          value={lead.status || "new"}
                          onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
                          className="px-3 py-1 rounded-md border bg-background"
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="qualified">Qualified</option>
                          <option value="closed">Closed</option>
                        </select>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {lead.company && (
                        <div className="flex items-center gap-2 text-sm">
                          <Package className="h-4 w-4 text-muted-foreground" />
                          <span>{lead.company}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <a href={`mailto:${lead.email}`} className="text-primary hover:underline">
                          {lead.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <a href={`tel:${lead.phone}`} className="text-primary hover:underline">
                          {lead.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{lead.service}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>{lead.created_at ? new Date(lead.created_at).toLocaleDateString() : "N/A"}</span>
                      </div>
                      <div className="mt-4 p-4 bg-muted rounded-md">
                        <p className="text-sm font-medium mb-2">Project Details:</p>
                        <p className="text-sm text-muted-foreground">{lead.project_details}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </TabsContent>

            <TabsContent value="content">
              <Card>
                <CardHeader>
                  <CardTitle>Content Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    You can manage your website content through the backend database.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    To add or edit projects, images, and other content, access your backend by clicking the button below.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AdminDashboard;
