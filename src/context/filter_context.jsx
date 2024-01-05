import React, { useEffect, useContext, useReducer } from 'react';
import reducer from '../reducers/filter_reducer';
import {
  LOAD_PRODUCTS,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions';
import { useProductsContext } from './products_context';

const initialState = {
  filtered_products: [],
  all_products: [],
  is_products_loading: true, // TODO: IF CORS, REMOVE / CHANGE IS_PRODUCTS_LOADING
  sort: 'price-lowest',
  filters: {
    text: '',
    company: 'all',
    category: 'all',
    color: 'all',
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(
    function () {
      dispatch({ type: LOAD_PRODUCTS, payload: products });
    },
    [products]
  );

  useEffect(
    function () {
      dispatch({ type: FILTER_PRODUCTS });
      dispatch({ type: SORT_PRODUCTS });
    },
    [state.sort, products, state.filters]
  );

  function updateSort(e) {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  }

  function updateFilters(e) {
    let name = e.target.name;
    let value = e.target.value;
    if (name === 'category') {
      value = e.target.textContent;
    }
    if (name === 'color') {
      value = e.target.getAttribute('data-color');
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name: name, value: value } });
  }

  function clearFilters() {}

  return (
    <FilterContext.Provider
      value={{ ...state, updateSort, updateFilters, clearFilters }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
