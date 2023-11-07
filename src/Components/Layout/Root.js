import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default RootLayout;