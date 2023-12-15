import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  removeAllCartItems: () => {},
  addCartItem: () => {},
  removeCartItem: () => {},
  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},
  isPlaced: () => {},
  orderPlaced: '',
  isCodSelected: () => {},
  codSelected: '',
})

export default CartContext
