import React from 'react';

const NewsPage = () => {
  // Sample data for blog posts
  const blogPosts = [
    {
      category: 'News',
      date: '9th May 2023',
      title: 'Blog Post 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et faucibus metus. Donec aliquet volutpat massa, ac consectetur ante fringilla ut.',
      readMoreLink: '#',
    },
    {
      category: 'Events',
      date: '15th May 2023',
      title: 'Blog Post 2',
      description: 'Nulla commodo, nisl id iaculis tristique, metus velit feugiat neque, id eleifend nisi erat in lorem. Fusce nec magna et lacus facilisis vulputate.',
      readMoreLink: '#',
    },
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <h2 className="section-title">News and Events</h2>
        <div className="row">
          {blogPosts.map((post, index) => (
            <div key={index} className="col-md-6">
              <div className="blog-post">
                <div className="blog-content">
                  <span className="blog-category">{post.category}</span>
                  <span className="blog-date">{post.date}</span>
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-description">{post.description}</p>
                  <a href={post.readMoreLink} className="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsPage;
