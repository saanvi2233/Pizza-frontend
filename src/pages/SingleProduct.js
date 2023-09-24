import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  const navigate = useNavigate(); // Use useNavigate to access navigation

  useEffect(() => {
    fetch(`/api/products/${params.id}`)
      .then((res) => res.json())
      .then((product) => {
        setProduct(product);
      });
  }, [params.id]);

  return (
    <div className="container mx-auto mt-12 text-yellow-50">
      <button className="text-white p-2 bg-amber-800 mb-12 font-bold" onClick={() => navigate(-1)}>Back</button>
      <div className="flex">
        <img style={{ height: 420 }} src={product.image} alt="piiiiiizzzzzzzzzz" />
        <div className="ml-20">
          <h1 className="text-3xl md-6xl font-bold">{product.name}</h1>
          <div className="text-2xl mt-4">{product.size}</div>
          <div className="font-bold mt-1">₹{product.price}</div>
          <button className="rounded-full text-2xl bg-yellow-900 py-1 px-8 font-bold mt-10">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
