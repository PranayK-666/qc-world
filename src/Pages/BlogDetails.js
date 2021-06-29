import { useParams } from 'react-router-dom';
import Blog1 from './blogs/Blog1';
import Blog2 from './blogs/Blog2';
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
  ];

  return (
    <div className="blog-page">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="blog-details"> {blogs[id - 1].name}</div>
      <div className="sidebar">. </div>
    </div>
  );
};

export default BlogDetails;
