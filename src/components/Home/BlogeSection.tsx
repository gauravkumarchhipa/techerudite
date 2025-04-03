import React, { useState } from 'react';
// import blog1 from '../assets/blog1.jpg';
// import blog2 from '../assets/blog2.jpg';
// import blog3 from '../assets/blog3.jpg';
// import blog4 from '../assets/blog4.jpg';

const blogData = [
  {
    id: 1,
    title: 'Account Management Tips',
    author: 'Allison Fox',
    date: 'May 13, 2019',
    // image: blog1,
    description: 'Lorem ipsum dolor sit amet, consectetur sadipscing elitr...',
  },
  {
    id: 2,
    title: 'Account Management Tips',
    author: 'Allison Fox',
    date: 'May 13, 2019',
    // image: blog2,
    description: 'Lorem ipsum dolor sit amet, consectetur sadipscing elitr...',
  },
  {
    id: 3,
    title: 'Account Management Tips',
    author: 'Allison Fox',
    date: 'May 13, 2019',
    // image: blog3,
    description: 'Lorem ipsum dolor sit amet, consectetur sadipscing elitr...',
  },
  {
    id: 4,
    title: 'Account Management Tips',
    author: 'Allison Fox',
    date: 'May 13, 2019',
    // image: blog4,
    description: 'Lorem ipsum dolor sit amet, consectetur sadipscing elitr...',
  },
];

const BlogSection = () => {
  const [viewAll, setViewAll] = useState(false);
  const visibleBlogs = viewAll ? blogData : blogData.slice(0, 3);

  return (
    <section className="blogs">
      <div className="blogs__header">
        <h2>Blogs</h2>
        <button className="view-all" onClick={() => setViewAll(!viewAll)}>
          {viewAll ? 'Show Less' : 'View All'} →
        </button>
      </div>

      <div className="blogs__grid">
        {visibleBlogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            {/* <img src={blog.image} alt={blog.title} /> */}
            <h3>{blog.title}</h3>
            <small>
              {blog.date} by <span className="author">{blog.author}</span>
            </small>
            <p>{blog.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
