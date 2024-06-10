import Header from "../../common/components/_molecules/Header/Header";
import SignUpComponent from "../../common/components/_molecules/SignUpComponent/SignUpComponent";

const SignUp = () => {
    
  return (
    <div className="h-screen">
      <Header />
      <div className="w-full flex items-center justify-center h-[90vh]">
        <SignUpComponent />
      </div>
    </div>
  );
};

export default SignUp;
