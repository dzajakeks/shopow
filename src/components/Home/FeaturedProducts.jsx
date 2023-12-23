import React from 'react';
import { useProductsContext } from '../../context/products_context';

import Loading from '../Loading';
import Error from '../Error';
import Product from '../Product';

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <section className='sections-y-separate'>
      <h3 className='small-header text-center'>Featured Products</h3>
      <div className='grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {featured.slice(0, 4).map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </section>
  );
};

export default FeaturedProducts;
