import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-content">
        <h1>Front End</h1>
        <h2>SEO com React</h2>
        <p>
          Veja como criar uma aplicação inspirada no Pokémon com React e Next.js,
          utilizando boas práticas para SEO.
        </p>
      </div>
      <div className="banner-video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/watch?v=c8mVlakBESE"
          title="YouTube video"
        ></iframe>
      </div>
    </section>
  );
};

export default Banner;