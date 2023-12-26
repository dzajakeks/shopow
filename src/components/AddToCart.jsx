import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import AmountButtons from './AmountButtons';

const AddToCart = ({ product }) => {
  const { id, stock, colors } = product;
  const [productColors, setProductColors] = useState(colors[0]);

  return (
    <>
      <div className='flex'>
        <span className='mr-4 accent-text'>Colors: </span>
        <div className='flex'>
          {colors.map(function (singleColor, index) {
            return (
              <button
                onClick={() => setProductColors(singleColor)}
                key={index}
                style={{ background: singleColor }}
                className={`mr-2 rounded-full w-6 h-6 border-[1px] border-[#676767] flex items-center justify-center`}
              >
                {productColors === singleColor && (
                  <FaCheck className='text-secondary' />
                )}
              </button>
            );
          })}
        </div>
      </div>
      <AmountButtons stock={stock} />
      <Link className='btn btn-outline' to='/shopow/cart/'>
        Add to cart
      </Link>
    </>
  );
};

export default AddToCart;
