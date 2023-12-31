import Products from "../components/Products";
import { Link } from "react-router-dom";
// import Product from "./Product";
const Home = () => {
  return (
    <>
    <div className="hero py-16 px-4  py-1 text-sm sm:px-2 sm:py-1 sm:text-base lg:px-8 lg:py-4 lg:text-lg xl:px-10 xl:py-5 xl:text-xl">
      <div className="container mx-auto flex items-center justify-between">
        <div className="w-1/2">
          <h5 className="text-lg text-white">
            <em>Super Delicious Pizza!</em>
          </h5>
          <h1 className="text-3xl md:text-6xl font-bold text-white">
            Don't Wait!
          </h1>
          {/* <Link to={`/products/${product._id}`}> */}
          <button className="px-6 py-2 rounded-full text-white font-bold mt-4 bg-yellow-600 hover:bg-yellow-700 ">
        
            Order Now
            

          </button>
          {/* </Link> */}
        </div>
        <div className="w-1/2">
            <img className="  w-4/5"src="/images/p.jpeg" alt="pizza here"/>
        </div>
      </div>
    </div>
    <div className="pb-24">
<Products/>
    </div>
    </>
  );
};
export default Home;
