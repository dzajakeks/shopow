import React, { useState } from 'react';

const ProductImages = ({ images = [{ url: '' }] }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className='flex flex-col my-2'>
      <img
        className='h-96'
        src={mainImage.url}
        alt='displaying product image'
      />
      <div className='grid grid-cols-4 gap-2 mt-4'>
        {images.slice(0, 4).map(function (image, index) {
          return (
            <img
              onClick={() => setMainImage(images[index])}
              className={`h-full hover:cursor-pointer rounded-sm ${
                mainImage.url === image.url ? 'border-2' : ''
              }`}
              src={image.url}
              alt={image.filename}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductImages;
