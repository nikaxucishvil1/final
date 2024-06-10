const Card = (props: CheckoutCard) => {
  const {
    cart,
    calculateSubtotal,
    calculateTotal,
    paymentMethod,
    handlePaymentMethodChange,
  } = props;
  return (
    <div className="border rounded-lg p-4 shadow-lg">
      <h2 className="text-center text-2xl font-bold mb-4">Order Summary</h2>
      {cart.map((item, index) => {
        return (
          <div
            key={index}
            className="flex justify-between items-center mb-4 gap-10"
          >
            <img src={item.image} alt="Green Capsicum" className="w-12 h-12" />
            <span>
              {item.title} x{item.count}
            </span>
            <span>${calculateSubtotal(item)}</span>
          </div>
        );
      })}
      <div className="flex justify-between mb-2">
        <span className="font-semibold">Subtotal:</span>
        <span>${calculateTotal()}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span className="font-semibold">Shipping:</span>
        <span>Free</span>
      </div>
      <div className="flex justify-between mb-4">
        <span className="font-semibold">Total:</span>
        <span>${calculateTotal()}</span>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
        <div className="mb-2">
          <input
            type="radio"
            id="cash"
            name="paymentMethod"
            value="Cash on Delivery"
            checked={paymentMethod === "Cash on Delivery"}
            onChange={handlePaymentMethodChange}
            className="mr-2"
          />
          <label htmlFor="cash">Cash on Delivery</label>
        </div>
        <div className="mb-2">
          <input
            type="radio"
            id="paypal"
            name="paymentMethod"
            value="Paypal"
            checked={paymentMethod === "Paypal"}
            onChange={handlePaymentMethodChange}
            className="mr-2"
          />
          <label htmlFor="paypal">Paypal</label>
        </div>
        <div className="mb-2">
          <input
            type="radio"
            id="amazonPay"
            name="paymentMethod"
            value="Amazon Pay"
            checked={paymentMethod === "Amazon Pay"}
            onChange={handlePaymentMethodChange}
            className="mr-2"
          />
          <label htmlFor="amazonPay">Amazon Pay</label>
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
      >
        Place Order
      </button>
    </div>
  );
};

export default Card;
