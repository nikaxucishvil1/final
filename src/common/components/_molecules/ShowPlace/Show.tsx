import { TiHome } from "react-icons/ti";

const Show = (props:Show) => {
    const {place} = props
  return (
    <div className="flex items-center gap-5 bg-[url('../../../../../public/assets/searchBg.jpg')] bg-center p-[20px] pl-[10%]">
      <TiHome fontSize={30} color="#808080" />
      <span className="text-navGrey">{place}</span>
    </div>
  );
};

export default Show;
