import Navbar from '@/components/Navbar/Navbar';
import MobileMenu from '@/components/MobileMenu/MobileMenu';
import Hero from '@/sections/Hero/Hero';
import Ticker from '@/components/Ticker/Ticker';
import About from '@/sections/About/About';
import Services from '@/sections/Services/Services';
import Stats from '@/sections/Stats/Stats';
import MVV from '@/sections/MVV/MVV';
import Areas from '@/sections/Areas/Areas';
import Recruitment from '@/sections/Recruitment/Recruitment';
import CTABanner from '@/sections/CTABanner/CTABanner';
import Contact from '@/sections/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import MobileMenuContextProvider from '@/store/mobileMenuContext';

export default function Home() {
  return (
    <main>
      <MobileMenuContextProvider>
        <Navbar />
        <MobileMenu />
      </MobileMenuContextProvider>
      <Hero />
      <Ticker />
      <About />
      <Services />
      <Stats />
      <MVV />
      <Areas />
      <Recruitment />
      <CTABanner />
      <Contact />
      <Footer />
    </main>
  );
}
