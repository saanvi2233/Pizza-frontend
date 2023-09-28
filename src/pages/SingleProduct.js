import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  const navigate = useNavigate(); // Use useNavigate to access navigation

  useEffect(() => {
    fetch(`https://restapipizza1.onrender.com/api/products/${params.id}`)
      .then((res) => res.json())
      .then((product) => {
        setProduct(product);
      });
  }, [params.id]);

  return (//style={{ height: 420 }}
    <div className=" bg-black fixed  container mx-auto mt-12 my-10 text-yellow-50">
      <button className="text-white m-8 rounded-md p-2 bg-amber-800 mb-12 font-bold" onClick={() => navigate(-1)}>Back</button>
      <div className="flex flex-col sm:flex-row ">
        <img className=" m-6 w-42 h-42 sm:w-30 sm:h-48 lg:w-80 lg:h-80 xl:w-80 xl:h-80"  src={product.image} alt="piiiiiizzzzzzzzzz" />
        <div className="ml-20 text-sm sm:text-base">
          <h1 className="text-3xl md-6xl font-bold">{product.name}</h1>
          <div className="text-2xl mt-4">{product.size}</div>
          <div className="font-bold mt-1">₹{product.price}</div>
          {/* <button className="rounded-full text-2xl bg-yellow-900 py-1 px-8 font-bold mt-10"> */}
          <button className=" bg-yellow-900 rounded-full font-bold px-8 py-1 text-sm sm:px-6 sm:py-3 sm:text-base lg:px-8 lg:py-4 lg:text-lg xl:px-10 xl:py-5 xl:text-xl">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
