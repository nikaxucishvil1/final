import  { useContext } from "react";
import { GlobalState } from "../../_organisms/Mainlayout";
import List from "../../_atoms/CartList/List";

const ShoppingCartComponent = () => {
  const context = useContext(GlobalState);
  if (!context) return null;
  const { cart } = context;

  return (
    <div>
      <div className="flex items-center justify-center mt-4 font-semibold">
        <h1 className="text-customBlack text-[40px]">My Shopping Cart</h1>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-between">
          <p>Product</p>
          <ul className="flex items-center justify-center gap-4">
            <List>Price</List>
            <List>Quantity</List>
            <List>Subtotal</List>
          </ul>
        </div>
        <div>
          {cart.map((item) => (
            <div key={item.id}>
              <div>
                <img src={item.image} alt={item.title} />
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartComponent;
