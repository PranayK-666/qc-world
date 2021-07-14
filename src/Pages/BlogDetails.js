import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Blog1 from './blogs/Blog1';
import Blog2 from './blogs/Blog2';
import Blog3 from './blogs/Blog3';
import Blog4 from './blogs/Blog4';
import Blog5 from './blogs/Blog5';
import Blog6 from './blogs/Blog6';
import Blog7 from './blogs/Blog7';
import Blog8 from './blogs/Blog8';
import Blog9 from './blogs/Blog9';
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
    {
      key: 6,
      name: <Blog6 />,
    },
    {
      key: 7,
      name: <Blog7 />,
    },
    {
      key: 8,
      name: <Blog8 />,
    },
    {
      key: 9,
      name: <Blog9 />,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
