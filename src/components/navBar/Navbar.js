import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../UI/Button/Button';
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavabr] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavabr(true);
    } else {
      setNavabr(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <>
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Quantum World <i className="fas fa-microchip" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Extras
              </Link>
            </li>
            {!button && (
              <li className="nav-item">
                <Link
                  to={{
                    pathname: 'https://meet.google.com',
                  }}
                  target="_blank"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Sumbit a Blog{' '}
                  <i class="external-icon fas fa-external-link-alt" />
                </Link>
              </li>
            )}
          </ul>
          {button && (
            <Button
              onClick={{
                pathname: 'https://meet.google.com',
              }}
              target="_blank"
              buttonStyle="btn--outline"
            >
              SUBMIT A BLOG
              {/* <i class="external-icon fas fa-external-link-alt" /> */}
            </Button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
