
const List = (props:{children:string}) => {
  const {children} = props
  return (
    <div className="flex items-center justify-center gap-5">
      <li className="hover:cursor-pointer">{children}</li>
      <img src="../../../../../public/assets/arrow.svg" alt="" />
    </div>
  );
};

export default List;
