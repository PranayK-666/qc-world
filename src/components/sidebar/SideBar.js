import './sidebar.css';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import author from '../../assets/img/writer.png';

const SideBar = () => {
  const authorStyle = {
    borderRadius: '50%',
    marginLeft: '60px',
    marginBottim: '10px',
  };

  const titleStyle = {
    marginLeft: '60px',
    marginTop: '10px',
  };

  return (
    <div className="sidebar">
      <Card className="cardstyle">
        <Card.Img
          variant="top"
          src={author}
          width="200px"
          height="200px"
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
