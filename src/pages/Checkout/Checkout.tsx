import { useContext, useEffect } from "react";
import Layout from "../../common/components/_organisms/Layout"
import { GlobalState } from "../../common/components/_organisms/Mainlayout";
import CheckoutComponent from "../../common/components/_molecules/CheckoutComponent/CheckoutComponent";

const Checkout = () => {
  const context = useContext(GlobalState);
  if (!context) return null;
  const { setNav } = context;
  useEffect(() => {
    setNav("Checkout")
  },[])
  return (
    <>
      <Layout>
        <CheckoutComponent />
      </Layout>
    </>
  )
}

export default Checkout