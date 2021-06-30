import './Image.css';
import { Link } from 'react-router-dom';

const Image = props => {
  return (
    <div className="image">
      <img className="pic" src={props.imgName} alt="" />
      <p className="img-caption">
        {props.imgCaption}
        <Link
          to={{
            pathname: props.imgSource,
          }}
          target="_blank"
        >
          [Source]
        </Link>
      </p>
    </div>
  );
};

export default Image;
