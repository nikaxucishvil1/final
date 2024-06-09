import { useContext } from "react";
import { TiHome } from "react-icons/ti";
import { GlobalState } from "../../_organisms/Mainlayout";

const Show = () => {
  const context = useContext(GlobalState);
  if (!context) return;
  const { nav } = context;
  return (
    <div className="flex items-center gap-5 bg-[url('../../../../../public/assets/searchBg.jpg')] bg-center p-[20px] pl-[10%]">
      <TiHome fontSize={30} color="#808080" />
      <span className="text-navGrey">{nav}</span>
    </div>
  );
};

export default Show;
