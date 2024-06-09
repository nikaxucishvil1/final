import Footer from "../_molecules/Footer/Footer";
import Header from "../_molecules/Header/Header";
import Search from "../_molecules/Search/Search";
import Nanbar from "../_molecules/NavBar/Nanbar";
import Show from "../_molecules/ShowPlace/Show";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <Search />
      <Nanbar />
      <Show/>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
