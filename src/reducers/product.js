import {
  SET_ALL_PRODUCTS, SET_IS_PROCESSING
} from '../actions/product';


const defaultState = {
  isProcessing: false,
  products: []
};

const Product = (state = defaultState, action) => {
  switch (action.type) {
    case SET_IS_PROCESSING:
    case SET_ALL_PRODUCTS:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

export default Product;
