import Product from "./Product";
import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../CartContext";

const Products = () => {
  const {name} = useContext(CartContext); // Accessing data from CartContext

  const [products, setProducts] = useState([]);

  const[search,setSearch]=useState("");

  useEffect(() => {
    fetch("https://restapipizza1.onrender.com/api/products")
      .then((response) => response.json())
      .then((products) => {
        setProducts(products);
      });
  }, []);

  // Function to handle search input changes
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  // Filter products based on the search input
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );
  

  return (
    <div className="container mx-auto -pb-24">
      <h1 className="text-2xl font-bold my-8 text-yellow-200">
        <em>Products</em>
      </h1>


{/* Search input */}
<input
  type="text"
  placeholder="Search products..."
  value={search}
  onChange={handleSearchChange}
  className="mb-6 p-2 border rounded"
  style={{
    width: "100%", // Make the input take up the full width
    maxWidth: "300px", // Set a maximum width
    margin: "0 auto", // Center the input horizontally
  }}
/>



      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 my-8 mt-20 gap-24 ">
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  xl:grid-cols-5 my-8 gap-24 sm:gap-12"> */}
        {filteredProducts.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
