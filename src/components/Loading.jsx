import React from 'react';

const Loading = () => {
  return (
    <>
      <div className='grid h-[calc(100vh-10rem)] w-screen place-content-center'>
        <span className='loading loading-spinner w-20'></span>
      </div>
    </>
  );
};

export default Loading;
