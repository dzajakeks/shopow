import React from 'react';
import { useFilterContext } from '../context/filter_context';

const Sort = () => {
  const { sort, updateSort } = useFilterContext();

  return (
    <>
      <form>
        <label htmlFor='sort'>sort by </label>
        <select
          name='sort'
          id='sort'
          value={sort}
          onChange={updateSort}
          className='select select-bordered w-full max-w-xs select-sm'
        >
          <option value='price-lowest'>price (lowest)</option>
          <option value='price-highest'>price (highest)</option>
          <option value='name-a'>name (a - z)</option>
          <option value='name-z'>name (z - a)</option>
        </select>
      </form>
    </>
  );
};

export default Sort;
