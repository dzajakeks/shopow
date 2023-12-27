import React from 'react';
import { useFilterContext } from '../context/filter_context';
import Product from './Product';

const ProductList = () => {
  const { filtered_products: products } = useFilterContext();
  return (
    <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 place-items-center'>
      {products.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </div>
  );
};

export default ProductList;
