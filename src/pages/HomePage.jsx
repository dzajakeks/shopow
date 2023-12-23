import React from 'react';
import Hero from '../components/Home/Hero';
import Services from '../components/Home/Services';
import Newsletter from '../components/Home/Newsletter';
import FeaturedProducts from '../components/Home/FeaturedProducts';

const HomePage = () => {
  return (
    <main className='content-center distance-around sections-y-separate'>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Newsletter />
    </main>
  );
};

export default HomePage;
