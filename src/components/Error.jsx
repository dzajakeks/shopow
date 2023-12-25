import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className='grid h-[calc(100vh-10rem)] place-content-center p-4'>
      <h3 className='text-4xl'>There was an error...</h3>
      <Link className='btn mt-4' to='/shopow/'>
        Go Back
      </Link>
    </div>
  );
};

export default Error;
