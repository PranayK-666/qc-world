import { Button } from '../UI/Button/Button';
import '../../App.css';
import './HeroSection.css';
import heroVideo from '../../assets/video/video-earth.mp4';

const HeroSection = () => {
  return (
    <div id="hero" className="hero-container">
      <video src={heroVideo} autoPlay loop muted />
      <h1>WELCOME TO THE QUANTUM WORLD</h1>
      <p>
        Your Community for reading and writing awesome blogs about Quantum
        Computing
      </p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          target="_blank"
          onClick={{
            pathname:
              'https://docs.google.com/forms/d/e/1FAIpQLSfMTVEmefmI00hnoeWHW6W9slnMh3hOWh9gjq9nsS8ltDbInQ/viewform?fbzx=-6607350273153648217',
          }}
        >
          SUBMIT A BLOG
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          // onClick={executeScroll}
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
