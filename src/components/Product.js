import React, { useState } from "react";
import { Link } from "react-router-dom";
//Receive all props (properties)from pssed in products.js
import { useContext } from "react";
import { CartContext } from "../CartContext";
const Product = (props) => {
  //to change the style of add when items get added
  const [isAdding, setIsAdding] = useState(false);


  // props.product
  const { cart, setCart } = useContext(CartContext);
  const { product } = props;
  //event listner
  const addToCart = (event, product) => {
    event.preventDefault();
    // const cart={
    //   '6786598789id':2,
    //   '238979673980':3
    // }
    // totalItems:5
    //cloning cart (duplicate cart) otherwise original wala change hojaiga
    let _cart = { ...cart };

    if (!_cart.items) {
      _cart.items = {};
    }
    if (_cart.items[product._id]) {
      _cart.items[product._id] += 1;
    } else {
      _cart.items[product._id] = 1;
    }

    if (!_cart.totalItems) {
      _cart.totalItems = 0;
    }
    _cart.totalItems += 1;
    setCart(_cart);

    setIsAdding(true);
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
    // console.log(event);
    // const cart={
    //   items:{

    //   }
    // }
  };

  return (
    // <Link to='/products/dedfw'>
    <Link to={`/products/${product._id}`}>
      <div className=" bg-slate-800 text-center rounded-md  -m-8 p-2">
        <img src={product.image} alt="pizza" />
        <div>
          <h2 className="text-white text-lg font-extralight py-2">
            {product.name}
          </h2>
          <span className="text-white bg-gray-600 py-1 rounded-full text-sm px-4">
            {product.size}
          </span>
          <br />
          <br />
        </div>
        <div className="text-white flex">
          <span className="flex -m-5px text-white justify-between items-center mt-4">
            ₹{product.price}
          </span>
          <button disabled={isAdding}
            onClick={(e) => {
              addToCart(e, product);
            }}
            className={`${
              isAdding ? "bg-green-900" : "bg-yellow-700"
            } py-1 px-3 rounded-lg mx-20  rounded-md'}`}
          >
            Add{isAdding ? 'ed' : ''}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Product;
