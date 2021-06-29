import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import TeamMember from '../teamMember/TeamMember';
import writer from '../../assets/img/writer.png';
import developer from '../../assets/img/developer.jpg';
import developer2 from '../../assets/img/developer2.jpg';

function Footer() {
  return (
    <div className="footer-container">
      <h2>Meet the Team</h2>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <TeamMember
              name="Pranay Khosla"
              about="Developer"
              github="https://github.com/pranayk-666"
              linkedin="https://www.linkedin.com/in/pranay-k-50432554/"
              img={developer}
            />
          </div>
          <div class="footer-link-items">
            <TeamMember
              name="Parmeet Singh"
              about="Content Head"
              github="https://github.com/singhmeet11"
              img={writer}
            />
          </div>
          <div class="footer-link-items">
            <TeamMember
              name="Priyansh Tyagi"
              about="Developer"
              github="https://github.com/priyanshty19"
              linkedin="https://www.linkedin.com/in/priyanshtyagi"
              img={developer2}
            />
          </div>
        </div>
      </div>

      <section class="social-media">
        <div class="social-media-wrap">
          <Link to="/" className="social-logo">
            <div class="footer-logo">
              QC-World
              <i class="fas fa-microchip" />{' '}
            </div>
          </Link>
          <small class="website-rights">QC-World © 2021</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              // target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              // target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              // target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              // target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              // target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
