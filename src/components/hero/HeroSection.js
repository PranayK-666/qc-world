import { Button } from '../UI/Button/Button';
import '../../App.css';
import './HeroSection.css';
import heroVideo from '../../assets/video/video-earth.mp4';

const HeroSection = () => {
  return (
    <div id="hero" className="hero-container">
      <video src={heroVideo} autoPlay loop muted />
      <h1>WELCOME TO THE QUANTUM WORLD</h1>
      <p>Read awesome blogs !</p>
      <p>Checkout informative resources !</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          onClick=""
        >
          SUBMIT A BLOG
          {/* <i class="external-icon fas fa-external-link-alt" /> */}
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick="/#blog-cards"
        >
          GET STARTED
          {/* <i class="down-arrow fas fa-arrow-down"></i> */}
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
