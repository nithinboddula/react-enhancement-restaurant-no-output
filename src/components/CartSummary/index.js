import Popup from 'reactjs-popup'
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {
        cartList,
        isPlaced,
        orderPlaced,
        isCodSelected,
        codSelected,
      } = value
      const cartListLength = cartList.length
      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })

      return (
        <>
          <div className="cart-summary-container">
            <h1 className="order-total-value">
              <span className="order-total-label">Order Total:</span> Rs {total}
              /-
            </h1>
            <p className="total-items">{cartListLength} Items in cart</p>

            <Popup
              trigger={
                <button className="checkout-button d-sm-none" type="button">
                  Checkout
                </button>
              }
              modal
            >
              <div className="modal-container">
                <div className="payment-container">
                  <input
                    type="radio"
                    id="credit-card"
                    className="radio"
                    name="payment"
                    disabled
                  />
                  <label htmlFor="credit-card" className="payment-name">
                    Credit Card
                  </label>
                  <img
                    src="https://media.designrush.com/inspiration_images/134782/conversions/_1511457479_332_visa-desktop.jpg"
                    className="bill-payment-image"
                    alt="visa"
                  />
                </div>
                <div className="payment-container">
                  <input
                    type="radio"
                    id="net"
                    className="radio"
                    name="payment"
                    disabled
                  />
                  <label htmlFor="net" className="payment-name">
                    Net Banking
                  </label>
                  <img
                    src="https://www.shutterstock.com/image-vector/online-banking-logo-design-bank-260nw-1619257036.jpg"
                    className="bill-payment-image"
                    alt="visa"
                  />
                </div>
                <div className="payment-container">
                  <input
                    type="radio"
                    id="UPI"
                    className="radio"
                    name="payment"
                    disabled
                  />
                  <label htmlFor="UPI" className="payment-name">
                    UPI
                  </label>
                  <img
                    src="https://www.shutterstock.com/image-vector/kerala-india-19-07-2023-260nw-2334125251.jpg"
                    className="bill-payment-image"
                    alt="visa"
                  />
                </div>
                <div className="payment-container">
                  <input
                    type="radio"
                    id="Wallet"
                    className="radio"
                    name="payment"
                    disabled
                  />
                  <label htmlFor="Wallet" className="payment-name">
                    Wallet
                  </label>
                  <img
                    src="https://www.shutterstock.com/image-vector/digital-wallet-logotype-ewallet-cryptocurrency-260nw-1978478726.jpg"
                    className="bill-payment-image"
                    alt="visa"
                  />
                </div>
                <div className="payment-container">
                  <input
                    type="radio"
                    id="COD"
                    className="radio"
                    name="payment"
                  />
                  <label
                    onClick={isCodSelected}
                    htmlFor="COD"
                    className="payment-name"
                  >
                    COD
                  </label>
                  <img
                    src="https://img.freepik.com/premium-vector/cash-money-logo-design-template-digital-payment-logo-design_22857-852.jpg"
                    className="bill-payment-image"
                    alt="visa"
                  />
                </div>
                <h1 className="order-total-value">
                  <span className="order-total-label">Order Total:</span> Rs{' '}
                  {total}
                  /-
                </h1>
                <p className="total-items">{cartListLength} Items in cart</p>
                {codSelected ? (
                  <button
                    type="button"
                    className="checkout-button"
                    onClick={isPlaced}
                  >
                    Confirm Order
                  </button>
                ) : null}
                {orderPlaced ? (
                  <p className="order-displaced">Your Order Has Been Placed</p>
                ) : null}
              </div>
            </Popup>
          </div>
          <button type="button" className="checkout-button d-lg-none">
            Checkout
          </button>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
