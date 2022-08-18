import {
  ADD_ITEM_IN_CART, DECREASE_ITEM, INCREASE_ITEM, REMOVE_CART_ITEM, SET_CART_ITEMS
} from '../actions/cart';


const defaultState = {
  cartItems: []
};

const Cart = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_ITEM_IN_CART: {
      const { item } = action.payload
      const cartHaveItem = (state.cartItems).filter(p => p.id === item.id)

      if (!!cartHaveItem && !!cartHaveItem.length) {
        const newCartItems = (state.cartItems).map(p => {
          if (p.id === item.id) {
            p.count = !!p.count ? (p.count + 1) : 1
          }
          return p
        })

        return {
          ...state,
          cartItems: [
            ...newCartItems
          ]
        }
      } else {
        item.count = 1
        state.cartItems.push(item)
        return {
          ...state,
          cartItems: [
            ...state.cartItems
          ]
        }
      }
    }
    case REMOVE_CART_ITEM: {
      const updatedCartItems = (state.cartItems).filter(p => p.id !== action.payload.id)
      return {
        ...state,
        cartItems: [
          ...updatedCartItems
        ]
      }
    }
    case INCREASE_ITEM: {
      const updatedCartItems = (state.cartItems).map(p => {
        if (p.id === action.payload.id) {
          p.count = p.count + 1
        }
        return p
      })
      return {
        ...state,
        cartItems: [
          ...updatedCartItems
        ]
      }
    }
    case DECREASE_ITEM: {
      const updatedCartItems = (state.cartItems).map(p => {
        if (p.id === action.payload.id) {
          p.count = p.count - 1
        }
        return p
      })
      const filteredItems = updatedCartItems.filter(p => p.count)
      return {
        ...state,
        cartItems: [
          ...filteredItems
        ]
      }
    }
    case SET_CART_ITEMS: {
      console.log(action.payload)
      return Object.assign({}, state, action.payload);

    }
    default:
      return state;
  }
};

export default Cart;
