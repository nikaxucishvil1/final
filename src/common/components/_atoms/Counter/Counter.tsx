import Button from "../Button/Button";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);

  const decrement = () => {
    count === 0 ? 0 : setCount(count - 1);
  };
  const encrement = () => {
    count === 10 ? 10 : setCount(count + 1);
  };
  return (
    <div className="flex justify-between items-center gap-3  border border-solid border-borderGrey rounded-xl p-2">
      <Button
        className="flex items-center justify-center w-6 h-6 rounded-full bg-[#ebebeb]"
        onClick={decrement}
      >
        -
      </Button>
      <p>{count}</p>
      <Button
        className="flex items-center justify-center w-6 h-6 rounded-full bg-[#ebebeb]"
        onClick={encrement}
      >
        +
      </Button>
    </div>
  );
};

export default Counter;
