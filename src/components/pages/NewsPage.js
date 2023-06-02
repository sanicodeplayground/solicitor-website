import React from 'react';

const NewsPage = () => {
  // Sample data for blog posts
  const blogPosts = [
    {
      category: 'News',
      date: '1st May 2023',
      title: 'Halloway Law Wins Major Real Estate Case',
      description: 'Halloway Law achieved a significant victory in a high-stakes real estate dispute, reaffirming our position as a leading firm in property litigation.',
      readMoreLink: '#',
    },
    {
      category: 'Events',
      date: '8th May 2023',
      title: 'Halloway Law Sponsors Local Charity Run',
      description: 'We are proud to sponsor the Eclipse City Annual Charity Run. Our team will also be participating to support local charities.',
      readMoreLink: '#',
    },
    {
      category: 'News',
      date: '15th May 2023',
      title: 'New Partner Announced at Halloway Law',
      description: 'We are excited to announce the promotion of Julia Mendez to partner. Julia has been an invaluable member of our commercial litigation team.',
      readMoreLink: '#',
    },
    {
      category: 'Events',
      date: '22nd May 2023',
      title: 'Halloway Law to Host Cybersecurity Seminar',
      description: 'Join us for a seminar on cybersecurity in the legal sector. Learn about the latest threats and how to protect your business.',
      readMoreLink: '#',
    },
    {
      category: 'News',
      date: '29th May 2023',
      title: 'Halloway Law Assists in High Profile Merger',
      description: 'Our corporate team played a key role in a high-profile merger between two leading tech companies, reinforcing our reputation in the tech sector.',
      readMoreLink: '#',
    },
    {
      category: 'Events',
      date: '5th June 2023',
      title: 'Halloway Law Celebrates 20th Anniversary',
      description: 'Join us as we celebrate our 20th anniversary with a virtual event. Reflect on our past successes and look ahead to the future of Halloway Law.',
      readMoreLink: '#',
    },
  ];

  return (
    <div>
      <h2 className="section-title">News and Events</h2>
      <section className="section-padding">
        <div className="container">
          <div className="row">
            {blogPosts.map((post, index) => (
              <div key={index} className="col-md-6">
                <div className="blog-post">
                  <div className="blog-content">
                    <span className="blog-category">{post.category}</span>
                    <span className="blog-date">{post.date}</span>
                    <h3 className="blog-title">{post.title}</h3>
                    <p className="blog-description">{post.description}</p>
                    <a href={post.readMoreLink} className="btn btn-outline-primary">Read More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
