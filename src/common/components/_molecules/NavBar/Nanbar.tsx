import List from "../../_atoms/List/List";

const Nanbar = () => {
  return (
    <div className="flex items-center justify-between pl-[12rem] pr-[15rem] mt-4 mb-4">
      <nav>
        <ul className="list-none flex items-center justify-between gap-5 text-navGrey">
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
        </ul>
      </nav>
      <div>
        <p className="text-navGrey">(219) 555-0114</p>
      </div>
    </div>
  );
};

export default Nanbar;
