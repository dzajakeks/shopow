import React from 'react';

const Loading = () => {
  return (
    <>
      <div className='grid h-[calc(100vh-20rem)] mx-auto place-content-center'>
        <span className='loading loading-spinner w-20'></span>
      </div>
    </>
  );
};

export default Loading;
