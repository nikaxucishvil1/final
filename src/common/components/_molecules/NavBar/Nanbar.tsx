import { Link } from "react-router-dom";
import List from "../../_atoms/List/List";
import { BiPhoneCall } from "react-icons/bi";

const Nanbar = () => {
  return (
    <div className="flex items-center justify-between pl-[12rem] pr-[15rem] mt-4 mb-4">
      <nav>
        <ul className="list-none flex items-center justify-between gap-5 text-navGrey">
          <Link to={"/"}>
            <List>Home</List>
          </Link>
          <List>Shop</List>
          <List>Pages</List>
          <List>Blog</List>
          <List>About Us</List>
          <List>Contact Us</List>
        </ul>
      </nav>
      <div className="flex items-center justify-center gap-2">
        <BiPhoneCall fontSize={20} color="#666666" />
        <p className="text-navGrey">(219) 555-0114</p>
      </div>
    </div>
  );
};

export default Nanbar;
