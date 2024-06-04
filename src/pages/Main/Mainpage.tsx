import Nanbar from "../../common/components/_molecules/NavBar/Nanbar";
import Products from "../../common/components/_molecules/Products/Products";
import Search from "../../common/components/_molecules/Search/Search";
import Show from "../../common/components/_molecules/ShowPlace/Show";

const Mainpage = () => {
  return (
    <>
      <Search count={1} cost={57.0} />
      <Nanbar />
      <Show place='home' />
      <Products />
    </>
  )
};

export default Mainpage;
