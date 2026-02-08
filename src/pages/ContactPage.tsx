import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import AIAssistant from "@/components/AIAssistant";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AIAssistant />
      <main className="pt-20">
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
