import arrow from "../../../../../public/arrowDOwn.png"

const List = (props:{children:string}) => {
  const {children} = props
  return (
    <div className="flex items-center justify-center gap-5">
      <li className="hover:cursor-pointer">{children}</li>
      <img src={arrow} alt="" />
    </div>
  );
};

export default List;
