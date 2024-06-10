import Header from "../../common/components/_molecules/Header/Header"
import SigninComponent from "../../common/components/_molecules/SigninComponent/SigninComponent"

const Signin = () => {
  return (
    <div className="h-screen">
      <Header />
      <div className="w-full flex items-center justify-center h-[90vh]">
        <SigninComponent />
      </div>
    </div>
  )
}

export default Signin