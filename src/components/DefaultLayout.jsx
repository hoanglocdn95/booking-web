import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

const DefaultLayout = () => {
  return (
    <>
      <Navbar />
      <Header />
      <main className="containerBody">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
