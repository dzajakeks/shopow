import React from 'react';
import { services } from '../../utils/constants';

const Services = () => {
  console.log();
  return (
    <section className='sections-y-separate'>
      <article className='two-cols-grid gap-x-28 gap-y-4 mb-4 md:text-start text-center'>
        <h3 className='small-header'>
          custom furniture <br /> built only for you
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum
          debitis consectetur reprehenderit non aliquam voluptates dolore aut
          vero consequuntur.
        </p>
      </article>
      <div className='two-cols-grid gap-6 place-items-center '>
        {services.map((service) => {
          const { id, icon, title, text } = service;
          return (
            <div
              key={id}
              className='card -z-30 max-w-sm bg-base-100 shadow-xl '
            >
              <div className='card-body text-center mx-auto'>
                <p className='mx-auto text-4xl'>{icon}</p>
                <h2 className='card-title mx-auto text-2xl'>{title}</h2>
                <p>{text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
