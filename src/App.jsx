import Header from "./components/Header";
import ScrollProgress from "./components/ScrollProgress";
import CustomCursor from "./components/CustomCursor";
import Hero from "./components/Hero";
import About from "./components/About";
import Campus from "./components/Campus";
import Sports from "./components/Sports";
import Personalities from "./components/Personalities";
import Testimonials from "./components/Testimonials";
import Enquire from "./components/Enquire";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Campus />
        <Sports />
        <Personalities />
        <Testimonials />
        <Enquire />
      </main>
      <Footer />
    </>
  );
}
