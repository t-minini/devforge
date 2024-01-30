import './App.module.css';
import { Why } from './components/why/Why';
import { Who } from './components/who/Who';
import { Hero } from './components/hero/Hero';
import { What } from './components/what/What';
import { Footer } from './components/footer/Footer';
import { Navbar } from './components/navbar/Navbar';
import { Mission } from './components/mission/Mission';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Why />
      <What />
      <Who />
      <Mission />
      <Footer />
    </>
  );
}

export default App;
