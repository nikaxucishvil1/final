import { Link } from "react-router-dom";
import Button from "../Button/Button";

const Total = (props: Total) => {
  const { calculateTotal, setNav,cart } = props;
  return (
    <div className="border border-gray-300 border-solid p-4 w-[40%] h-[250px] rounded-[10px]">
      <h2>Cart Total</h2>
      <div className="flex flex-col gap-[15px]">
        <div className="flex justify-between text-sm font-normal mt-[30px] border-b border-gray-330">
          <span>Subtotal:{calculateTotal()}</span>
          <span>${calculateTotal()}</span>
        </div>
        <div className="flex justify-between text-sm font-normal border-b border-gray-330">
          <span>Shipping:</span>
          <span>Free</span>
        </div>
        <div className="flex justify-between text-sm font-normal">
          <span>Total:</span>
          <span className="font-black">${calculateTotal()}</span>
        </div>
      </div>
      <Link to={cart.length > 0 ? "/checkout" : "/shoppingCart"}>
        <Button
          className="flex justify-center items-center w-full h-12 mt-2 bg-customGreen rounded-[30px] text-white cursor-pointer"
          onClick={() => {
            cart.length > 0 ? setNav("Checkout") : setNav("Shopping Cart");
          }}
        >
          Proceed to Checkout
        </Button>
      </Link>
    </div>
  );
};

export default Total;
