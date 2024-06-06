import { GlobalState } from "../../_organisms/Mainlayout";
import { useContext } from "react";
import List from "../CartList/List";
import Counter from "../Counter/Counter";

const CartProducts = () => {
  const context = useContext(GlobalState);
  if (!context) return null;
  const { cart } = context;

  return (
    <>
      <div className="flex items-center justify-between">
        <p>Product</p>
        <ul className="flex gap-10">
          <List>price</List>
          <List>Quantity</List>
          <List>Subtotal</List>
        </ul>
      </div>

      <div>
        {cart.map((product) => {
          return (
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-5 w-[400px] ">
                <img
                  className="w-[100px] h-[100px]"
                  src={product.image}
                  alt=""
                />
                <p className="w-[200px]">{product.title}</p>
              </div>
                <div className="flex gap-10 w-[234px] items-center">
                    <p className="w-[46.5px]">${product.price}</p>
                    <Counter />
                    <p>$100</p>
                </div>
            </div>
          );
        })}
      </div>
      <div></div>
    </>
  );
};

export default CartProducts;
