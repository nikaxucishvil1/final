import { useContext, useState } from "react";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { useLocation } from "react-router-dom";
import Button from "../../_atoms/Button/Button";
import { CiHeart } from "react-icons/ci";
import { addToCart } from "../../_atoms/AddToCart/AddToCart";
import { GlobalState } from "../../_organisms/Mainlayout";

const DetailsComponent = () => {
  const location = useLocation();
  const [product] = useState(location.state);
  const context = useContext(GlobalState);
  if (!context) return null;
  const { cart, setCart } = context;

  return (
    <div className="flex flex-col md:flex-row items-center mt-4 bg-white gap-10 max-w-4xl mx-auto">
      <div className="md:w-1/3">
        <img
          src={product.image}
          alt="Chinese Cabbage"
          className="w-full h-auto object-cover rounded-md"
        />
      </div>
      <div className="md:w-2/3 mt-4 md:mt-0 md:ml-6">
        <div className="flex gap-2 items-center">
          <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>
          <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded">
            In Stock
          </span>
        </div>
        <p className="mt-2 text-xl text-green-600">${product.price}</p>
        <div className="w-full h-[1px] bg-borderGrey mt-2"></div>
        <p className="mt-4 text-gray-600">{product.description}</p>
        <div className="w-full h-[1px] bg-borderGrey mt-2"></div>

        <div className="flex items-center justify-center mt-4 gap-6">
          <Button
            onClick={() => addToCart(product, cart, setCart)}
            className="w-full flex items-center justify-center gap-3 px-6 py-3 text-white bg-[#00B207] rounded-full"
          >
            <span>Add to Cart</span>
            <LiaShoppingBagSolid fontSize={20} />
          </Button>
          <Button className="bg-[#20B5261A] p-4 rounded-full">
            <CiHeart fontSize={20} />
          </Button>
        </div>
        <div className="mt-2 flex items-center">
          <span className="text-gray-500">Category:</span>
          <span className="text-gray-800 ml-2">{product.category}</span>
        </div>
      </div>
    </div>
  );
};

export default DetailsComponent;
