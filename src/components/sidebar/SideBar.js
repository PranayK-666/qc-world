import './sidebar.css';
import { Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";


const SideBar = () => {
  return <div className="sidebar">
  <Card className="cardstyle">
    <Card.Img variant="top" src="https://variety.com/wp-content/uploads/2015/07/naruto_movie-lionsgate.jpg?w=1000" width="300px" height="200px" />
    <Card.Body>
      <Card.Title className="cardstyle">
        <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                Neo
              </Link>
            </b>
        </span>
      </Card.Title>
      <br />
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
      <br />
    </Card.Body>
  </Card>
  </div>;
};

export default SideBar;
