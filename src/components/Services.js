import React from 'react';
import { Title } from './Title';
import { services } from '../services_data';

export const Services = () => {
  return (
    <>
      <section className='services'>
        <Title title='services' />
        <div className='services-center'>
          {services.map((item) => {
            return (
              <article key={`item-${item.title}`} className='service'>
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};
