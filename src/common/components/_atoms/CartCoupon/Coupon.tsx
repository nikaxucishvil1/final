import Button from "../Button/Button";
import Input from "../Input/Input";

const Coupon = () => {
  return (
    <div className="flex items-center justify-between border border-borderGrey rounded-[10px] p-5 mt-5 w-full gap-[20px]">
      <p className="font-medium min-w-[100px]">Coupon Code</p>
      <div className="flex w-full items-center justify-between">
        <Input
          className="border border-borderGrey rounded-3xl w-[70%] h-12 pl-[10px]"
          placeholder=" Enter Code"
          type="text"
        />
        <Button className="w-[25%] rounded-3xl bg-headerBg text-white text-sm h-12">
          Apply Coupon
        </Button>
      </div>
    </div>
  );
};

export default Coupon;
