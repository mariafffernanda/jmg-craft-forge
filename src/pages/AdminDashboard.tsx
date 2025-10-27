import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/safeClient";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { LogOut, Mail, Phone, User, Calendar, Package, Save } from "lucide-react";
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

interface ContentItem {
  id: string;
  page: string;
  section: string;
  content_key: string;
  content_value: string;
}

const AdminDashboard = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [content, setContent] = useState<ContentItem[]>([]);
  const [editingContent, setEditingContent] = useState<{ [key: string]: string }>({});
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
    loadContent();
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

  const loadContent = async () => {
    try {
      const { data, error } = await supabase
        .from("site_content")
        .select("*")
        .order("page", { ascending: true });

      if (error) throw error;
      
      const contentData = data || [];
      setContent(contentData);
      
      // Initialize editing state
      const initialEditing: { [key: string]: string } = {};
      contentData.forEach(item => {
        initialEditing[item.id] = item.content_value;
      });
      setEditingContent(initialEditing);
    } catch (error) {
      toast.error("Failed to load content");
    }
  };

  const updateContent = async (id: string) => {
    try {
      const { error } = await supabase
        .from("site_content")
        .update({ content_value: editingContent[id] })
        .eq("id", id);

      if (error) throw error;

      toast.success("Content updated successfully");
      loadContent();
    } catch (error) {
      toast.error("Failed to update content");
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

            <TabsContent value="content" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Website Content Editor</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Edit your website content directly from this dashboard. Changes will appear on the live site immediately.
                  </p>

                  <Tabs defaultValue="home" className="space-y-4">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="home">Home</TabsTrigger>
                      <TabsTrigger value="services">Services</TabsTrigger>
                      <TabsTrigger value="about">About</TabsTrigger>
                      <TabsTrigger value="contact">Contact</TabsTrigger>
                    </TabsList>

                    {/* Home Content */}
                    <TabsContent value="home" className="space-y-4">
                      {content
                        .filter(item => item.page === "home")
                        .map(item => (
                          <Card key={item.id}>
                            <CardHeader>
                              <CardTitle className="text-lg capitalize">{item.section} - {item.content_key}</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                              <div>
                                <Label>Content</Label>
                                {item.content_value.length > 100 ? (
                                  <Textarea
                                    value={editingContent[item.id] || ""}
                                    onChange={(e) => setEditingContent({
                                      ...editingContent,
                                      [item.id]: e.target.value
                                    })}
                                    rows={4}
                                  />
                                ) : (
                                  <Input
                                    value={editingContent[item.id] || ""}
                                    onChange={(e) => setEditingContent({
                                      ...editingContent,
                                      [item.id]: e.target.value
                                    })}
                                  />
                                )}
                              </div>
                              <Button onClick={() => updateContent(item.id)}>
                                <Save className="mr-2 h-4 w-4" />
                                Save Changes
                              </Button>
                            </CardContent>
                          </Card>
                        ))}
                      {content.filter(item => item.page === "home").length === 0 && (
                        <p className="text-muted-foreground text-center py-8">
                          No content found for Home page. Content will be created automatically when pages are loaded.
                        </p>
                      )}
                    </TabsContent>

                    {/* Services Content */}
                    <TabsContent value="services" className="space-y-4">
                      {content
                        .filter(item => item.page === "services")
                        .map(item => (
                          <Card key={item.id}>
                            <CardHeader>
                              <CardTitle className="text-lg capitalize">{item.section} - {item.content_key}</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                              <div>
                                <Label>Content</Label>
                                {item.content_value.length > 100 ? (
                                  <Textarea
                                    value={editingContent[item.id] || ""}
                                    onChange={(e) => setEditingContent({
                                      ...editingContent,
                                      [item.id]: e.target.value
                                    })}
                                    rows={4}
                                  />
                                ) : (
                                  <Input
                                    value={editingContent[item.id] || ""}
                                    onChange={(e) => setEditingContent({
                                      ...editingContent,
                                      [item.id]: e.target.value
                                    })}
                                  />
                                )}
                              </div>
                              <Button onClick={() => updateContent(item.id)}>
                                <Save className="mr-2 h-4 w-4" />
                                Save Changes
                              </Button>
                            </CardContent>
                          </Card>
                        ))}
                      {content.filter(item => item.page === "services").length === 0 && (
                        <p className="text-muted-foreground text-center py-8">
                          No content found for Services page. Content will be created automatically when pages are loaded.
                        </p>
                      )}
                    </TabsContent>

                    {/* About Content */}
                    <TabsContent value="about" className="space-y-4">
                      {content
                        .filter(item => item.page === "about")
                        .map(item => (
                          <Card key={item.id}>
                            <CardHeader>
                              <CardTitle className="text-lg capitalize">{item.section} - {item.content_key}</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                              <div>
                                <Label>Content</Label>
                                {item.content_value.length > 100 ? (
                                  <Textarea
                                    value={editingContent[item.id] || ""}
                                    onChange={(e) => setEditingContent({
                                      ...editingContent,
                                      [item.id]: e.target.value
                                    })}
                                    rows={4}
                                  />
                                ) : (
                                  <Input
                                    value={editingContent[item.id] || ""}
                                    onChange={(e) => setEditingContent({
                                      ...editingContent,
                                      [item.id]: e.target.value
                                    })}
                                  />
                                )}
                              </div>
                              <Button onClick={() => updateContent(item.id)}>
                                <Save className="mr-2 h-4 w-4" />
                                Save Changes
                              </Button>
                            </CardContent>
                          </Card>
                        ))}
                      {content.filter(item => item.page === "about").length === 0 && (
                        <p className="text-muted-foreground text-center py-8">
                          No content found for About page. Content will be created automatically when pages are loaded.
                        </p>
                      )}
                    </TabsContent>

                    {/* Contact Content */}
                    <TabsContent value="contact" className="space-y-4">
                      {content
                        .filter(item => item.page === "contact")
                        .map(item => (
                          <Card key={item.id}>
                            <CardHeader>
                              <CardTitle className="text-lg capitalize">{item.section} - {item.content_key}</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                              <div>
                                <Label>Content</Label>
                                <Input
                                  value={editingContent[item.id] || ""}
                                  onChange={(e) => setEditingContent({
                                    ...editingContent,
                                    [item.id]: e.target.value
                                  })}
                                />
                              </div>
                              <Button onClick={() => updateContent(item.id)}>
                                <Save className="mr-2 h-4 w-4" />
                                Save Changes
                              </Button>
                            </CardContent>
                          </Card>
                        ))}
                      {content.filter(item => item.page === "contact").length === 0 && (
                        <p className="text-muted-foreground text-center py-8">
                          No content found for Contact page. Content will be created automatically when pages are loaded.
                        </p>
                      )}
                    </TabsContent>
                  </Tabs>
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
