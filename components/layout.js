import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex bg-gradient-to-l from-green-50 to-white">
        <div className="md:mr-[130px] mr-[70px]">
        <Navbar />
        </div>
        <main className="">{children}</main>
      </div>
    </>
  );
};

export default Layout;
