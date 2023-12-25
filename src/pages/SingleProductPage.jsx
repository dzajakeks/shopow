import React, { useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';
import { single_product_url as url } from '../utils/constants';
import { formatPrice } from '../utils/formatPrice';
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
    name,
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
        <Link className='btn' to='/shopow/products/'>
          Back to Products
        </Link>
        <div className='two-cols-grid !grid-cols-[repeat(auto-fit,minmax(1fr,1fr))] place-items-center gap-4'>
          <ProductImages images={images} />
          <div>
            <h2 className='small-header'>{name}</h2>
            <StarReviews />
            <h4>{formatPrice(price)}</h4>
            <p>{description}</p>
            <p>
              <span>Availability: </span>
              {stock > 0 ? 'In stock' : 'Out of stock'}
            </p>
            <p>
              <span>SKU:</span> {sku}
            </p>
            <p>
              <span>Brand:</span> {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart />}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductPage;
