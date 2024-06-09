import { useContext } from "react";
import { GlobalState } from "../../_organisms/Mainlayout";
import Button from "../../_atoms/Button/Button";
import List from "../../_atoms/CartList/List";
import { Link } from "react-router-dom";
import CartProducts from "../../_atoms/CartProducts/CartProducts";
import Total from "../../_atoms/CartTotal/Total";
import Coupon from "../../_atoms/CartCoupon/Coupon";

const ShoppingCartComponent = () => {
  const context = useContext(GlobalState);
  if (!context) return null;
  const { cart, setCart,setNav } = context;

  const updateItemCount = (id: number, newCount: number) => {
    setCart(
      cart.map((item) => (item.id === id ? { ...item, count: newCount } : item))
    );
  };

  const decrement = (id: number, count: number) => {
    count !== 0 ? updateItemCount(id, count - 1) : 0;
  };

  const increment = (id: number, count: number) => {
    count !== 10 ? updateItemCount(id, count + 1) : 10;
  };

  const removeItem = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const calculateSubtotal = (item: DataType) => {
    return (item.price * (item.count ?? 1)).toFixed(2);
  };

  const calculateTotal = () => {
    return cart
      .reduce((acc, item) => acc + parseFloat(calculateSubtotal(item)), 0)
      .toFixed(2);
  };

  return (
    <div className="ml-auto mr-auto w-[90%] p-4 h-[45vh] flex justify-center gap-5 mb-[250px]">
      <div className="w-full flex flex-col items-center gap-5">
        <div className="w-full border border-borderGrey border-solid p-4 rounded-[10px]">
          <List />
          <div className=" w-full h-[300px] overflow-y-auto">
            {cart &&
              cart.map((item) => (
                <CartProducts
                  key={item.id}
                  item={item}
                  decrement={decrement}
                  increment={increment}
                  calculateSubtotal={calculateSubtotal}
                  removeItem={removeItem}
                />
              ))}
          </div>
            <Link to={"/"}>
            <Button className="w-1/5 p-3 h-12 mt-3 rounded-3xl bg-returnBg">
              Return to Shop
            </Button>
            </Link>
        </div>
        <Coupon />
      </div>
      <Total setNav={setNav} calculateTotal={calculateTotal} />
    </div>
  );
};

export default ShoppingCartComponent;
