import React from 'react';
import { useFilterContext } from '../context/filter_context';
import { formatPrice } from '../utils/formatPrice';
import { getUniqueValues } from '../utils/uniqueValues';
import { FaCheck } from 'react-icons/fa';

const Filters = () => {
  const {
    filters: { text, category, company, color, min_price, max_price, price },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext();

  const categories = getUniqueValues(all_products, 'category');
  const companies = getUniqueValues(all_products, 'company');
  const colors = getUniqueValues(all_products, 'colors');

  console.log(colors);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div>
          <input
            className='input input-bordered input-sm w-full max-w-xs'
            type='text'
            name='text'
            placeholder='Search products'
            value={text}
            onChange={updateFilters}
          />
        </div>
        <div>
          <h5>Category</h5>
          <div>
            {categories.map((cate, index) => {
              return (
                <button
                  onClick={updateFilters}
                  name='category'
                  type='button'
                  className={`btn btn-sm block mx-auto my-2 ${
                    category === cate.toLowerCase() ? 'bg-slate-400' : null
                  }`}
                  key={index}
                >
                  {cate}
                </button>
              );
            })}
          </div>
          <h5>Company</h5>
          <div>
            <select name='company' value={company} onChange={updateFilters}>
              {companies.map((company, index) => {
                return (
                  <option value={company} key={index}>
                    {company}
                  </option>
                );
              })}
            </select>
          </div>
          <h5>colors</h5>
          <div className='flex items-center'>
            {colors.map((clr, index) => {
              if (clr === 'all') {
                return (
                  <button
                    className={`${color === 'all' ? 'underline mr-1' : 'mr-1'}`}
                    name='color'
                    onClick={updateFilters}
                    data-color='all'
                  >
                    all
                  </button>
                );
              }
              return (
                <button
                  style={{ background: clr }}
                  className={`rounded-full w-5 h-5 mr-1 grid place-items-center `}
                  name='color'
                  key={index}
                  data-color={clr}
                  onClick={updateFilters}
                >
                  {color === clr ? <FaCheck /> : null}
                </button>
              );
            })}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Filters;
