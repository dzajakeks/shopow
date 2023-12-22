import React from 'react';
import { Link } from 'react-router-dom';
const ErrorPage = () => {
  return (
    <div>
      <div className='h-[calc(100vh-10rem)] grid place-content-center'>
        <div className='max-w-md mx-4'></div>
        <div className='text-center'>
          <h1 className='text-8xl my-4 font-black'>404</h1>
          <p className='text-2xl'>Sorry, the page doesn't exist</p>
        </div>
        <div className='w-full text-center'>
          <Link to='/shopow/' className='btn mt-4'>
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
