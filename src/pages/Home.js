import React from 'react';
import { Hero } from '../components/Hero';
import { Banner } from '../components/Banner';
import { Services } from '../components/Services';
import FeaturedRoom from '../components/FeaturedRoom';
import { Link } from 'react-router-dom';
export const Home = () => {
  return (
    <div>
      <Hero>
        <Banner
          title='luxurious rooms'
          subtitle='deluxe rooms starting at $299'>
          <Link to='/rooms' className='btn-primary'>
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRoom />
    </div>
  );
};
