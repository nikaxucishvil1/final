import { useContext } from "react";
import { TiHome } from "react-icons/ti";
import { GlobalState } from "../../_organisms/Mainlayout";
import prods from "../../../../../public/prods.png";
import vector from "../../../../../public/Vector.png";

const Show = () => {
  const context = useContext(GlobalState);
  if (!context) return;
  const { category, nav } = context;
  return (
    <div
      className="flex items-center gap-5 bg-center p-[20px] pl-[10%] h-[120px]"
      style={{ backgroundImage: `url(${prods})` }}
    >
      <TiHome fontSize={30} color="#808080" />
      <img src={vector} alt="" width={10} height={10} />
      <span className="text-navGrey text-xl font-bold">{nav}</span>
      {category !== "" && (
        <div className="flex items-center gap-5">
          <img src={vector} alt="" width={10} height={10} />
          <span className="text-navGrey text-xl font-bold">{category}</span>
        </div>
      )}
    </div>
  );
};

export default Show;
