import { useContext } from "react";
import { GlobalState } from "../../_organisms/Mainlayout";
import Button from "../../_atoms/Button/Button";
import List from "../../_atoms/CartList/List";
import Counter from "../../_atoms/Counter/Counter";
import Input from "../../_atoms/Input/Input";
import { Link } from "react-router-dom";

const ShoppingCartComponent = () => {
  const context = useContext(GlobalState);
  if (!context) return null;
  const { cart } = context;
  

  return (
    <div className="ml-auto mr-auto w-[90%] p-4 h-[45vh] flex justify-center gap-5 mb-[250px]">
      <div className="w-full flex flex-col items-center gap-5">
        <div className="w-full border border-borderGrey border-solid p-4 rounded-[10px]">
          <div className="flex justify-between border-b border-borderGrey w-full pb-[15px]">
            <span>PRODUCT</span>
            <ul className="flex items-center justify-between w-[60%]">
              <List>PRICE</List>
              <List>QUANTITY</List>
              <List>SUBTOTAL</List>
            </ul>
          </div>
          <div className=" w-full h-[300px] overflow-y-auto">
            {cart &&
              cart.length > 0 &&
              cart.map((item: DataType) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b-2 p-2"
                >
                  <img className="w-[10%] h-[10%]" src={item.image} alt="" />
                  <p className="w-[20%]">{item.title}</p>
                  <div className="flex justify-between w-[60%] items-center">
                    <p className="w-[10%]">${item.price}</p>
                    <div className="w-[20%]">
                      <Counter></Counter>
                    </div>
                    <p className="w-[10%]">$1100</p>
                    <Button
                      className="cursor-pointer border border-borderGrey rounded-full w-7 h-7 flex justify-center items-center text-navGrey"
                      onClick={() => {}}
                    >
                      X
                    </Button>
                  </div>
                </div>
              ))}
          </div>
          <Link to={"/"}>
            <Button className="w-20% p-3 h-12 mt-3 rounded-3xl bg-returnBg">
              Return to Shop
            </Button>
          </Link>
        </div>
        <div className="flex items-center justify-between border border-borderGrey rounded-[10px] p-5 mt-5 w-full gap-[20px]">
          <p className="font-medium min-w-[100px]">Coupon Code</p>
          <div className="flex w-full items-center justify-between">
            <Input
              className="border border-borderGrey rounded-3xl w-[70%] h-12 pl-[10px]"
              placeholder=" Enter Code"
              type="text"
            />
            <Button className="w-[25%] rounded-3xl bg-headerBg text-white text-sm h-12">
              Apply Coupon
            </Button>
          </div>
        </div>
      </div>
      <div className="border border-gray-300 border-solid p-4 w-[40%] h-[250px] rounded-[10px]">
        <h2>Cart Total</h2>
        <div className="flex flex-col gap-[15px]">
          <div className="flex justify-between text-sm font-normal mt-[30px] border-b border-gray-330">
            <span>Subtotal:</span> <span>${}</span>
          </div>
          <div className="flex justify-between text-sm font-normal border-b border-gray-330">
            <span>Shipping:</span> <span>Free</span>
          </div>
          <div className="flex justify-between text-sm font-normal">
            <span>Total:</span>
            <span className="font-black">${}</span>
          </div>
        </div>
        <Button
          className="flex justify-center items-center w-full h-12 mt-2 bg-customGreen rounded-[30px] text-white cursor-pointer"
          onClick={() => {}}
        >
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default ShoppingCartComponent;
