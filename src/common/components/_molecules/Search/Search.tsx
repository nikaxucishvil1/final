import { CiSearch } from "react-icons/ci";
import Input from "../../_atoms/Input/Input";
import Button from "../../_atoms/Button/Button";
import { CiHeart } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { useContext, useEffect, useState } from "react";
import { GlobalState } from "../../_organisms/Mainlayout";
import { Link } from "react-router-dom";

const Search = () => {
  const context = useContext(GlobalState);
  const [cost, setCost] = useState(0);

  if (!context) return null;
  const { cart, setNav } = context;

  useEffect(() => {
    const totalCost = cart.reduce((currentValue, item) => {
      return item.price + currentValue;
    }, 0);
    setCost(totalCost);
  }, [cart]);

  return (
    <>
      <div className="flex items-center justify-around mt-4">
        <div className="flex items-center justify-center gap-[10px]">
          <img src="../../../../../public/plant1.png" alt="" />
          <p className="text-3xl">Ecobazar</p>
        </div>
        <div className="flex items-center justify-center border border-borderCl rounded-[6px]">
          <div className="flex items-center justify-center gap-2 p-2">
            <CiSearch color="#1A1A1A" fontSize={20} />
            <Input className="min-w-[300px]" placeholder="Search" type="text" />
          </div>
          <Button className="bg-customGreen p-2 rounded-tr-[6px] rounded-br-[6px] border border-customGreen text-white">
            Search
          </Button>
        </div>
        <div className="flex items-center justify-center gap-2">
          <CiHeart fontSize={40} />
          <div className="w-[1px] h-[40px] bg-customGrey"></div>
          <Link
            to={"/shoppingCart"}
            className="relative"
            onClick={() => setNav("Shopping Cart")}
          >
            <LiaShoppingBagSolid fontSize={40} />
            <div className="bg-cartCl flex items-center justify-center rounded-[30px] text-white absolute right-[3px] top-[-3px] ">
              <p className="p-1">{cart.length}</p>
            </div>
          </Link>
          <div>
            <p className="text-customGrey">Shopping cart</p>
            <p>${cost.toFixed(2)}</p>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full h-[1px] mt-4 bg-customGrey "></div>
      </div>
    </>
  );
};

export default Search;
