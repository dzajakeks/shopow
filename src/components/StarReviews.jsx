import React from 'react';
import { BsStarFill } from 'react-icons/bs';

const StarReviews = ({ stars, reviews }) => {
  return (
    <>
      <div className='flex items-center'>
        <span className='mr-1 accent-text'>{stars}</span>
        <BsStarFill className='accent-text' />
        <p className='ml-2'>({reviews} customer reviews)</p>
      </div>
    </>
  );
};

export default StarReviews;
