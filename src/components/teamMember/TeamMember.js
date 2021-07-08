import { BrowserRouter as Router, Link } from 'react-router-dom';
import './TeamMember.css';

const TeamMember = props => {
  return (
    <Router>
      <div className="member">
        <div className="member-photo">
          <img className="member-image" src={props.img} alt="" />
        </div>
        <div className="member-details">
          <div className="member-name">{props.name}</div>
          <div className="member-about">{props.about}</div>
          <div class="member-social-icons">
            <Link
              class="member-social-icon facebook"
              to={{ pathname: props.github }}
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-github-square"></i>
            </Link>
            {/* <Link
            class="member-social-icon twitter"
            to={{ pathname: props.slack }}
            target="_blank"
            aria-label="LinkedIn"
          >
            <i class="fab fa-slack"></i>
          </Link> */}
            <Link
              class="member-social-icon twitter"
              to={{ pathname: props.linkedin }}
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default TeamMember;
