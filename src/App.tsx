import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index";
import About from "./pages/About";
import Work from "./pages/Work";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import ContactPage from "./pages/ContactPage";
import Auth from "./pages/Auth";
import Careers from "./pages/Careers";
import Press from "./pages/Press";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import WebDevelopment from "./pages/services/WebDevelopment";
import UIUXDesign from "./pages/services/UIUXDesign";
import MarketingPage from "./pages/services/Marketing";
import SEOPage from "./pages/services/SEO";
import Documentation from "./pages/resources/Documentation";
import CaseStudies from "./pages/resources/CaseStudies";
import TemplatesPage from "./pages/resources/Templates";
import APIPage from "./pages/resources/API";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/press" element={<Press />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
            <Route path="/services/marketing" element={<MarketingPage />} />
            <Route path="/services/seo" element={<SEOPage />} />
            <Route path="/docs" element={<Documentation />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/templates" element={<TemplatesPage />} />
            <Route path="/api" element={<APIPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
