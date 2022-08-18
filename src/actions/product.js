import { sleep } from "../constant/helpers"
import dummyProducts from "../constant/Products.json"

export const SET_IS_PROCESSING = 'SET_IS_PROCESSING'
export const SET_ALL_PRODUCTS = 'SET_ALL_PRODUCTS'

export const setIsProcessing = isProcessing => ({
  type: SET_IS_PROCESSING,
  payload: { isProcessing }
})

export const setAllProducts = products => ({
  type: SET_ALL_PRODUCTS,
  payload: {
    products,
    isProcessing: false
  }
})


/**
 * Fetch All Products
 * @returns 
 */
export const fetchAllProducts = () => async (dispatch) => {
  dispatch(setIsProcessing(true));
  try {
    await sleep()
    dispatch(setAllProducts(dummyProducts));
    return true
  } catch (e) {
    dispatch(setIsProcessing(false));
    console.log('fetchAllProducts Error: ', e);
    return false
  }
}
