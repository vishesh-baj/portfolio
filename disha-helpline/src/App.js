import Navbar from "./components/Navbar";
import Main from "./sections/Main";

const App = () => {
  return (
    <>
      <div className=" font-montserrat w-screen h-screen bg-bgBanner bg-blend-overlay bg-opacity-60 bg-center bg-cover bg-black z-10  ">
        <Navbar />
        {/* Main */}
        <Main />
      </div>
    </>
  );
};

export default App;
