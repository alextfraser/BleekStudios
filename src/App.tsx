import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Portfolio } from '@/components/sections/Portfolio';
import { Contact } from '@/components/sections/Contact';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <div className="relative bg-background text-foreground">
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;