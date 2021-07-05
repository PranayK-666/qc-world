import { useParams } from 'react-router-dom';
import Blog1 from './blogs/Blog1';
import Blog2 from './blogs/Blog2';
import Blog3 from './blogs/Blog3';
import Blog4 from './blogs/Blog4';
import Blog5 from './blogs/Blog5';
import SideBar from '../components/sidebar/SideBar';
import './blogdetails.css';

const BlogDetails = () => {
  const { id } = useParams();

  const blogs = [
    {
      key: 1,
      name: <Blog1 />,
    },
    {
      key: 2,
      name: <Blog2 />,
    },
    {
      key: 3,
      name: <Blog3 />,
    },
    {
      key: 4,
      name: <Blog4 />,
    },
    {
      key: 5,
      name: <Blog5 />,
    },
  ];

  return (
    <div className="blog-page">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="blog-details"> {blogs[id - 1].name}</div>
      <div className="sidebar"></div>
    </div>
  );
};

export default BlogDetails;
