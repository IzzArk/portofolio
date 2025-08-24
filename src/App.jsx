import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './assets/styles/App.css';
import Certificates from './components/Certificates';
import LoopLogo from './components/LoopLogo';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = (elementTop < window.innerHeight) && (elementBottom >= 0);

        if (isVisible) {
          element.classList.add('animate-fadeIn');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans bg-gray-900 text-white ">
      <Header />
      <Hero />
      <About />
      <LoopLogo />
      <Experience />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

