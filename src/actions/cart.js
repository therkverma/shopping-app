export const SET_CART_ITEMS = 'SET_CART_ITEMS'
export const ADD_ITEM_IN_CART = 'ADD_ITEM_IN_CART'
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'
export const INCREASE_ITEM = 'INCREASE_ITEM'
export const DECREASE_ITEM = 'DECREASE_ITEM'

export const setCartItems = cartItems => ({
  type: SET_CART_ITEMS,
  payload: {
    cartItems
  }
})


export const addItemInCart = item => ({
  type: ADD_ITEM_IN_CART,
  payload: {
    item
  }
})


export const removeCartItem = id => ({
  type: REMOVE_CART_ITEM,
  payload: {
    id
  }
})

export const increaseItem = id => ({
  type: INCREASE_ITEM,
  payload: {
    id
  }
})

export const decreaseItem = id => ({
  type: DECREASE_ITEM,
  payload: {
    id
  }
})