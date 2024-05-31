import Footer from "../_molecules/Footer/Footer";
import Header from "../_molecules/Header/Header";

const Mainlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Mainlayout;
