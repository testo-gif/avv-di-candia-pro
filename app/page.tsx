import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import VideoBanner from "./components/VideoBanner";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsApp from "./components/WhatsApp";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Services />
      <VideoBanner />
      <Testimonials />
      <Faq />
      <Team />
      <Contact />
      <Footer />
      <WhatsApp />
    </>
  );
}
