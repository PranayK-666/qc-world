import './sidebar.css';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import author from '../../assets/img/writer.png';

const SideBar = () => {
  const [sidebar, setSidebar] = useState(false);

  const authorStyle = {
    borderRadius: '50%',
    marginLeft: '100px',
    marginBottim: '10px',
  };

  const titleStyle = {
    marginLeft: '60px',
    marginTop: '10px',
    padddingTop: '20px',
  };

  const changeBackground = () => {
    if (window.scrollY <= 1000) {
      setSidebar(true);
    } else {
      setSidebar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <div className={sidebar ? 'sidebar' : 'sidebar hide'}>
      <Card className="cardstyle">
        <Card.Img
          variant="top"
          src={author}
          width="100px"
          height="100px"
          style={authorStyle}
        />

        <Card.Body>
          <Card.Title className="cardstyle">
            <span style={titleStyle}>
              Author:
              <b className="singlePostAuthor">
                <Link className="link" to="/posts?username=Safak">
                  Parmeet Singh
                </Link>
              </b>
            </span>
          </Card.Title>
          <br />
          <Card.Text></Card.Text>
          <br />
        </Card.Body>
      </Card>
    </div>
  );
};

export default SideBar;
