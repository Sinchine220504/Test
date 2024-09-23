import React from 'react';

const NewsCard = ({ image, title, description }) => {
  return (
    <div className="news-card">
      <img src={image} alt={title} className="news-image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const HomePage = () => {
  const newsData = {
    world: [
      { image: 'world1.jpg', title: 'Global Event 1', description: 'Details about global event 1.' },
      //{ image: 'world-image2.jpg', title: 'Global Event 2', description: 'Details about global event 2.' },
    ],
    politics: [
      { image: 'p1.jpg', title: 'Political News 1', description: 'Details about political news 1.' },
      //{ image: 'politics-image2.jpg', title: 'Political News 2', description: 'Details about political news 2.' },
    ],
    technology: [
      { image: 'tech1.jpg', title: 'Tech News 1', description: 'Details about technology news 1.' },
      //{ image: 'tech-image2.jpg', title: 'Tech News 2', description: 'Details about technology news 2.' },
    ],
    sports: [
      { image: 's.jpg', title: 'Sports News 1', description: 'Details about sports news 1.' },
     // { image: 'sports-image2.jpg', title: 'Sports News 2', description: 'Details about sports news 2.' },
    ],
    entertainment: [
      { image: 'e1.jpg', title: 'Entertainment News 1', description: 'Details about entertainment news 1.' },
     // { image: 'entertainment-image2.jpg', title: 'Entertainment News 2', description: 'Details about entertainment news 2.' },
    ],
  };

  return (
    <div className="homepage">
      {/* Navigation Bar */}
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#world">World</a>
        <a href="#politics">Politics</a>
        <a href="#technology">Technology</a>
        <a href="#sports">Sports</a>
        <a href="#entertainment">Entertainment</a>
      </nav>

      {/* News Sections */}
      <section id="world">
        <h2>World News</h2>
        <div className="news-section">
          {newsData.world.map((news, index) => (
            <NewsCard key={index} image={news.image} title={news.title} description={news.description} />
          ))}
        </div>
      </section>

      <section id="politics">
        <h2>Politics</h2>
        <div className="news-section">
          {newsData.politics.map((news, index) => (
            <NewsCard key={index} image={news.image} title={news.title} description={news.description} />
          ))}
        </div>
      </section>

      <section id="technology">
        <h2>Technology</h2>
        <div className="news-section">
          {newsData.technology.map((news, index) => (
            <NewsCard key={index} image={news.image} title={news.title} description={news.description} />
          ))}
        </div>
      </section>

      <section id="sports">
        <h2>Sports</h2>
        <div className="news-section">
          {newsData.sports.map((news, index) => (
            <NewsCard key={index} image={news.image} title={news.title} description={news.description} />
          ))}
        </div>
      </section>

      <section id="entertainment">
        <h2>Entertainment</h2>
        <div className="news-section">
          {newsData.entertainment.map((news, index) => (
            <NewsCard key={index} image={news.image} title={news.title} description={news.description} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;