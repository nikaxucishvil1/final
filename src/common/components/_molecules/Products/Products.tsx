import { useState, useContext, useEffect } from "react";
import { GlobalState } from "../../_organisms/Mainlayout";
import Slider from "@mui/material/Slider";
import { Link } from "react-router-dom";
import Button from "../../_atoms/Button/Button";

const Products = () => {
  const context = useContext(GlobalState);
  if (!context) return;
  const { data, cart, setCart } = context;

  const [shownData, setShownData] = useState(data);
  const [filters] = useState<string[]>([]);
  const [showFilter, setShowFilter] = useState<string[]>([]);
  const [value, setValue] = useState(10);
  const [checked, setChecked] = useState<number | null>(null);

  useEffect(() => {
    data.map((item) => {
      filters.push(item.category);
      setShowFilter([...new Set(filters)]);
    });
  }, []);

  const handleChange = (index: number, filter: string) => {
    if (checked === index) {
      setChecked(null);
      setShownData(data);
    } else {
      setChecked(index);
      setShownData(data.filter((item) => item.category === filter));
    }
  };

  const handleSliderChange = (__event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };
  const addToCart = (item:DataType) => {
    const itemInCart = cart.some(list => list === item);
    if (!itemInCart) {
        setCart([...cart,item])
    } else {
        alert('already in the cart')
    }

}

  

  return (
    <div className="flex mt-10 flex-col gap-5">
      <div className="flex items-center justify-between w-full pl-[10%] pr-[10%]">
        <div className="flex items-center justify-center gap-4 bg-customGreen text-white p-2 pl-4 pr-4 rounded-[10px]">
          <span>filter</span>
          <img src="../../../../../public/filter.svg" alt="" />
        </div>
        {shownData && <span>{shownData.length} Result Found</span>}
      </div>
      <div className="flex justify-between w-full gap-[20px] pl-[10%]">
        <div className="flex flex-col gap-[10px] min-w-[200px]">
          <h1>All Categories</h1>
          <div className="checkbox w-full flex flex-col gap-[10px] text-[#2e3c58] text-sm ">
            <div className="flex gap-2 flex-col">
              {showFilter.map((item, index) => {
                return (
                  <div key={item} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      checked={checked === index}
                      onChange={() => handleChange(index, item)}
                    />
                    <span
                      className="cursor-pointer hover:cursor-pointer"
                      onClick={() => handleChange(index, item)}
                    >
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="border-t border-b border-t-[#c3bebe] border-b-[#c3bebe] py-6">
            <p className="font-bold text-[#2e3c58]">Price</p>
            <div className="w-full py-3">
              <Slider
                value={value}
                onChange={handleSliderChange}
                aria-labelledby="input-slider"
                max={1000}
                sx={{
                  color: "#00B207",
                  height: 8,
                }}
              />
            </div>
            <p className="font-bold text-[#2e3c58] text-[15px]">
              Price: {value} — 1,000
            </p>
          </div>
        </div>
        <div className="w-full  flex flex-row flex-wrap gap-6">
          {shownData
            .filter((item) => item.price > value)
            .map((item, i) => (
              <div key={i}>
                <div className="one-product relative min-h-[400px] rounded-[8px] overflow-hidden flex flex-col bg-white border border-[#d9d5d5] shadow-md hover:border-[#20B52652] hover:shadow-[#20B52652] p-2">
                  <Link to={`/details/${item.id}`}>
                    <img
                      className="h-[230px] w-[198px]"
                      src={item.image}
                      alt=""
                    />
                  </Link>

                  <div className="w-[198px] rateing p-4 flex flex-col ">
                    <h2 className="title text-sm">{item.title}</h2>

                    <h2 className="price font-bold text-sm">${item.price}</h2>
                    <Button className="absolute bottom-[25px] right-[16px] bg-[#F2F2F2] w-[30px] h-[30px] rounded-full flex items-center justify-center  " onClick={() => {addToCart(item)}}>
                      <img
                        className="w-[15px] h-[15px]"
                        src="/assets/cart.svg"
                        alt=""
                      />
                    </Button>

                    <div className="stars ">
                      <img className="" src="assets/star.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
