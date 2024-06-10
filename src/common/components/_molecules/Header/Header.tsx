import { CiLocationOn } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxSlash } from "react-icons/rx";
import Button from "../../_atoms/Button/Button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()

  return (
    <header className="text-customGrey bg-headerBg flex items-center justify-around p-4">
      <div className="flex items-center justiify-center gap-1">
        <CiLocationOn />
        <p className="">Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
      </div>
      <div className="flex items-center justify-center gap-2">
        <div className="flex items-center justify-center gap-2">
          <div className="flex items-center justify-center hover:cursor-pointer">
            <p>Eng</p>
            <MdKeyboardArrowDown />
          </div>
          <div className="flex items-center justify-center hover:cursor-pointer">
            <p>USD</p>
            <MdKeyboardArrowDown />
          </div>
        </div>
        <div className="w-[1px] h-[15px] bg-customGrey"></div>
        <div className="flex items-center justify-center">
          <Button onClick={() => {}}>Sign In</Button>
          <RxSlash />
          <Button onClick={() => {navigate('/Signup')}}>Sign Up</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
