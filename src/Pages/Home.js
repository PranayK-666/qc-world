import { useEffect } from 'react';
import '../App.css';
import Cards from '../components/cards/Cards';
import HeroSection from '../components/hero/HeroSection';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection />
      <Cards />
    </>
  );
};

export default Home;
