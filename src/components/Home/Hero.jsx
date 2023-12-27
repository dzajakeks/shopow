import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../../../public/home-hero-bg.jpeg';

const Hero = () => {
  return (
    <>
      <section className='two-cols-grid sections-y-separate content-center'>
        <div className='flex justify-center flex-col mx-auto'>
          <h2 className='small-header'>Shop what's best for you</h2>
          <p className='my-4 max-w-md text-xl leading-9 scalable-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro autem
            eum voluptatum rem at saepe vitae odio fuga quod laborum quis magni
            qui perspiciatis ex corrupti fugit quae, ratione exercitationem!
          </p>
          <Link className='btn w-32' to='/shopow/products/'>
            Shop Here
          </Link>
        </div>
        <img
          src={heroImg}
          alt='hero img'
          className='max-w-md hidden md:block'
        />
      </section>
    </>
  );
};

export default Hero;
