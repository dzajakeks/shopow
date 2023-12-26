import React, { useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';
import { single_product_url as url } from '../utils/constants';
import { formatPrice } from '../utils/formatPrice';
import { upperCaseFirst } from '../utils/upperCaseFirstLetter';
import Loading from '../components/Loading';
import Error from '../components/Error';
import ProductImages from '../components/ProductImages';
import StarReviews from '../components/StarReviews';
import AddToCart from '../components/AddToCart';
const SingleProductPage = () => {
  const { id } = useParams();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(function () {
    fetchSingleProduct(`${url}${id}`);
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const {
    name = '',
    price,
    description,
    stock,
    stars,
    reviews,
    company,
    images,
    id: sku,
  } = product;

  return (
    <>
      <div className='content-center sections-y-separate distance-around'>
        <Link className='btn btn-outline' to='/shopow/products/'>
          Back to Products
        </Link>
        <div className=' two-cols-grid !grid-cols-[repeat(auto-fit,minmax(1fr,1fr))] place-items-center gap-4'>
          <ProductImages images={images} />
          <div className='[&>*]:my-2'>
            <h2 className='small-header'>{upperCaseFirst(name)}</h2>
            <StarReviews stars={stars} reviews={reviews} />
            <h4 className='accent-text font-bold text-2xl'>
              {formatPrice(price)}
            </h4>
            <p>{description}</p>
            <p>
              <span className='accent-text'>Availability: </span>
              {stock > 0 ? `${stock} in stock` : 'Out of stock'}
            </p>
            <p>
              <span className='accent-text'>SKU:</span> {sku}
            </p>
            <p>
              <span className='accent-text'>Brand:</span> {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={product} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductPage;
