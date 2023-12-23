import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/formatPrice';

const Product = ({ id, image, name, price }) => {
  return (
    <div className='card w-full max-w-sm bg-base-100 shadow-xl'>
      <figure className='px-5 pt-10'>
        <img src={image} alt={name} className='rounded-xl h-56 object-cover' />
      </figure>
      <div className='card-body items-center text-center'>
        <h2 className='card-title'>{name}</h2>
        <p>{formatPrice(price)}</p>
        <div className='card-actions'>
          <Link to={`/shopow/products/${id}`} className='btn btn-neutral'>
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
