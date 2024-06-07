import Button from "../Button/Button";

const CartProducts = (props:CardProducts) => {
  const { decrement, increment, calculateSubtotal, item, removeItem } = props;


  
  return (
    <div
      key={item.id}
      className="flex justify-between items-center border-b-2 p-2"
    >
      <img className="w-[10%] h-[10%]" src={item.image} alt={item.title} />
      <p className="w-[20%]">{item.title}</p>
      <div className="flex justify-between w-[60%] items-center">
        <p className="w-[10%]">${item.price}</p>
        <div className="w-[20%]">
          <div className="flex justify-between items-center gap-3 border border-solid border-borderGrey rounded-xl p-2">
            <Button
              className="flex items-center justify-center w-6 h-6 rounded-full bg-[#ebebeb]"
              onClick={() => decrement(item.id, item.count ?? 1)}
            >
              -
            </Button>
            <p>{item.count ?? 1}</p>
            <Button
              className="flex items-center justify-center w-6 h-6 rounded-full bg-[#ebebeb]"
              onClick={() => increment(item.id, item.count ?? 1)}
            >
              +
            </Button>
          </div>
        </div>
        <p className="w-[10%]">${calculateSubtotal(item)}</p>
        <Button
          className="cursor-pointer border border-borderGrey rounded-full w-7 h-7 flex justify-center items-center text-navGrey"
          onClick={() => removeItem(item.id)}
        >
          X
        </Button>
      </div>
    </div>
  );
};

export default CartProducts;
