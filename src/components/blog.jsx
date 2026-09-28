import React, { useEffect } from 'react';

const blogs = [
  {
    title: "Web Development Projects",
    description: "A collection of my web development work — HTML, CSS, JavaScript projects exploring frontend and full-stack concepts...",
    link: "https://github.com/Varun9548/Web-Development"
  },
  {
    title: "LendnLearn – A Custom E-Library Website",
    description: "A look into my full-stack project where users can upload, search, and rent books online...",
    link: "https://github.com/Varun9548/LendnLearn"
  },
  {
    title: "Python Games: Snake, Tic Tac Toe & More",
    description: "My fun side project where I created classic games using Python libraries...",
    link: "https://github.com/Varun9548/Multiple-Project-using-Python"
  },
  {
    title: "Golf Charity Platform",
    description: "Subscription platform for golf enthusiasts supporting charities with user dashboard...",
    link: "https://github.com/Varun9548/Golf-Charity-Subscription-Platform"
  }
];

export default function Blog() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="blog" id="blog">
      <h2>My Blog</h2>

      <div className="blog-container">
        {blogs.map((b, i) => (
          <div className="blog-card" key={i}>
            <h3>{b.title}</h3>
            <p>{b.description}</p>
            {b.link && b.link !== '#' && (
              <a href={b.link} target="_blank" rel="noreferrer">
                Read More →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
