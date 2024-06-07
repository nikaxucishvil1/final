const List = () => {
  return (
    <div className="flex justify-between border-b border-borderGrey w-full pb-[15px]">
      <span>PRODUCT</span>
      <ul className="flex items-center justify-between w-[60%]">
        <li>PRICE</li>
        <li>QUANTITY</li>
        <li>SUBTOTAL</li>
      </ul>
    </div>
  );
};

export default List;
