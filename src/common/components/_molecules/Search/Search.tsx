import { GiThreeLeaves } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import Input from "../../_atoms/Input/Input";
import Button from "../../_atoms/Button/Button";
import { CiHeart } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";

const Search = (props: Search) => {
  const { count, cost } = props;
  return (
    <>
      <div className="flex items-center justify-around mt-4">
        <div className="flex items-center justify-center gap-[10px]">
          <GiThreeLeaves color="#00B207" fontSize={30} />
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
          <div className="relative">
            <LiaShoppingBagSolid fontSize={40} />
            <div className="bg-cartCl flex items-center justify-center rounded-[30px] text-white absolute right-[3px] top-[-3px] ">
              <p className="p-1">{count}</p>
            </div>
          </div>
          <div>
            <p className="text-customGrey">Shopping cart</p>
            <p>${cost}</p>
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
