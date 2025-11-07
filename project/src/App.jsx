
import { useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Academics from './components/Academics.jsx';
import Admissions from './components/Admissions.jsx';
import Gallery from './components/Gallery.jsx';
import Contact from './components/Contact.jsx';
import News from './components/News.tsx';
import Events from './components/Events.tsx';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigate = (section) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'academics':
        return <Academics />;
      case 'admissions':
        return <Admissions />;
      case 'gallery':
        return <Gallery />;
      case 'contact':
        return <Contact />;
      case 'news':
        return <News />;
      case 'events':
        return <Events />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={handleNavigate} activeSection={activeSection} />
      <main>{renderSection()}</main>
      <Footer />
    </div>
  );
}

export default App;
