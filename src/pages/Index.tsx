import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Topics from "@/components/Topics";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Topics />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
