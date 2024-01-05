import {
  LOAD_PRODUCTS,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions';

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((product) => {
      return product.price;
    });
    maxPrice = Math.max(...maxPrice);
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      is_products_loading: false,
      filters: {
        ...state.filters,
        max_price: maxPrice,
        price: maxPrice,
      },
    };
  }
  if (action.type === UPDATE_SORT) {
    return {
      ...state,
      sort: action.payload,
    };
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state;
    let tempProducts = [...filtered_products];
    if (sort === 'price-lowest') {
      tempProducts.sort(function (a, b) {
        return a.price - b.price;
      });
    }
    if (sort === 'price-highest') {
      tempProducts.sort(function (a, b) {
        return b.price - a.price;
      });
    }
    if (sort === 'name-a') {
      tempProducts.sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });
    }
    if (sort === 'name-z') {
      tempProducts.sort(function (a, b) {
        return b.name.localeCompare(a.name);
      });
    }
    return {
      ...state,
      filtered_products: tempProducts,
    };
  }
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === FILTER_PRODUCTS) {
    console.log('filtering products');
    return { ...state };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
