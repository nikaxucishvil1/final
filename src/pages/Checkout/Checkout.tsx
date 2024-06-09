import { useContext, useEffect } from "react";
import Layout from "../../common/components/_organisms/Layout"
import { GlobalState } from "../../common/components/_organisms/Mainlayout";

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

        <h1>g</h1>
      </Layout>
    </>
  )
}

export default Checkout