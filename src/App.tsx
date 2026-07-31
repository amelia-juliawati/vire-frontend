import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Service from './components/Service';
import About from './components/About';
import Waitlist from './components/Waitlist';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white"> 
      <Navbar />
      <Hero />
      <Service />
      <About />
      <Waitlist />   
      <Footer />   
    </div>
  );
}

export default App;