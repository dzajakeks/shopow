import React from 'react';
import Filters from '../components/Filters';
import Sort from '../components/Sort';
import ProductList from '../components/ProductList';

const ProductsPage = () => {
  return (
    <main className='content-center distance-around sections-y-separate grid min-[555px]:grid-cols-[200px,1fr] '>
      <Filters />
      <div>
        <Sort />
        <ProductList />
      </div>
    </main>
  );
};

export default ProductsPage;
