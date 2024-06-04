const Nanbar = () => {
  return (
    <div className="flex items-center justify-between pl-[12rem] pr-[15rem] mt-4 mb-4">
      <nav>
        <ul className="list-none flex items-center justify-between gap-10">
          <li className="hover:cursor-pointer">Home</li>
          <li className="hover:cursor-pointer">Shop</li>
          <li className="hover:cursor-pointer">Contact Us</li>
          <li className="hover:cursor-pointer">Pages</li>
          <li className="hover:cursor-pointer">Blog</li>
          <li className="hover:cursor-pointer">About Us</li>
        </ul>
      </nav>
      <div>
        <p>(219) 555-0114</p>
      </div>
    </div>
  );
};

export default Nanbar;
