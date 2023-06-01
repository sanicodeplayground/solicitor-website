import React from 'react';

const SingleBlogPage = () => {
  const post = {
    title: 'Example Blog Post',
    date: '9th May 2023',
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et faucibus metus. Donec aliquet volutpat massa, ac consectetur ante fringilla ut. Nulla commodo, nisl id iaculis tristique, metus velit feugiat neque, id eleifend nisi erat in lorem. Fusce nec magna et lacus facilisis vulputate. Curabitur in scelerisque nisl, ut tempus nunc. Praesent vitae tristique erat, ut venenatis arcu. Nam cursus blandit libero in venenatis. Curabitur faucibus, urna id eleifend sollicitudin, risus mi scelerisque mi, et maximus tellus leo a massa. Sed vestibulum massa eget tincidunt efficitur.</p>
      <p>Morbi elementum viverra feugiat. Duis vel arcu rutrum, lacinia dui eu, pulvinar dui. Vestibulum id facilisis nisl. Quisque a ultrices sapien. Sed semper, velit ut condimentum vestibulum, libero justo pellentesque nunc, eget rhoncus risus elit nec tortor. Proin id est sed erat ullamcorper elementum eu sit amet est. Vivamus id lectus non urna dignissim iaculis eget non est. Nunc id tincidunt orci. Nullam id nunc eleifend, efficitur tellus ac, egestas purus.</p>
      <p>In semper, est et dapibus aliquet, nibh quam tempor orci, in dapibus ligula dui in elit. Fusce vel massa pharetra, sollicitudin nunc at, tristique sapien. Nullam nec consectetur lacus. Maecenas tincidunt feugiat risus vitae vulputate. Vestibulum lacinia risus augue, et faucibus lacus tempus eu. Fusce sed ligula nec magna vulputate gravida. Fusce dapibus ultrices ante, at tristique nisi malesuada sed. Etiam finibus dolor vitae varius laoreet.</p>
    `,
  };

  return (
    <section className="section-padding">
      <div className="container">
        <h2 className="section-title">{post.title}</h2>
        <p className="blog-date">{post.date}</p>
        <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </div>
    </section>
  );
};

export default SingleBlogPage;
