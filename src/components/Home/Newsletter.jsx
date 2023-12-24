import React from 'react';

const Newsletter = () => {
  return (
    <section className='sections-y-separate md:text-start text-center'>
      <h3 className='small-header  mb-4'>
        Join our newsletter and get 20% off
      </h3>
      <div className='flex flex-col md:flex-row justify-between items-center'>
        <p className='max-w-xl '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint
          unde quaerat ratione soluta veniam provident adipisci cumque eveniet
          tempore?
        </p>
        <div>
          <form
            onClick={(e) => {
              e.preventDefault();
            }}
            className='my-4'
          >
            <div className='join '>
              <input
                className='input input-bordered join-item '
                placeholder='Enter email'
              />
              <button className='btn join-item rounded-r-full'>
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
