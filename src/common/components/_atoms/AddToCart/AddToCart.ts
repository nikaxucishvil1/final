export const addToCart = (
  item: DataType,
  cart: DataType[],
  setCart: React.Dispatch<React.SetStateAction<any>>
) => {
  const itemInCart = cart.some((list) => list === item);
  if (!itemInCart) {
    setCart([...cart, item]);
  } else {
    alert("already in the cart");
  }
};
