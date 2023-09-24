import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext";

const Cart = () => {
  let total=0;
  const [products, setProducts] = useState([]);
  const { cart,setCart } = useContext(CartContext);

  const [priceFetched,togglePriceFetched]=useState(false);
 
  useEffect(() => {
    if (!cart.items) {
      return;
    }


    if(priceFetched){
      return;
    }
    fetch("/api/products/cart-items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ids: Object.keys(cart.items) }),
    })
      .then((response) => response.json())
       // Parse the response as JSON
      .then((data) => {
        console.log(data)
        setProducts(data); 
        togglePriceFetched(true)// Set the products state with the JSON data
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
      });
  }, [cart]);
  const getQuantity=(productId)=>{
    return cart.items[productId];//[]-for dynamic
  }

  const increment=(productId)=>{
    const oldQ=cart.items[productId];
    const _cart={...cart};
    _cart.items[productId]=oldQ+1;
    _cart.totalItems+=1;
    setCart(_cart);
  }

  const decrement=(productId)=>{
    const oldQ =cart.items[productId];

    if(oldQ===1){
      return;
    }
    const _cart={...cart};
    _cart.items[productId]=oldQ-1;
    _cart.totalItems-=1;
    setCart(_cart);
    //prevent from going till -1
  }

  const getSum=(productId,price)=>{
   const sum=price * getQuantity(productId);
   total+=sum;
   return sum;
  }

  const handleDelete=(productId)=>{
    //cloning cart
    const _cart={...cart};
    const qty=_cart.items[productId];
    delete _cart.items[productId];
    _cart.totalItems-=qty;
    setCart(_cart);
    const updatedPList=products.filter((product)=>product._id !== productId);// filter is boolean type return true or false
    setProducts(updatedPList)//products pai loop karega -filter taki delete karna par sabh deta h
  }

  const handleOrderNow=()=>{
    window.alert('Hey!Your Order is Successfully placed');
    setProducts([]);
    setCart({});
  }
  return (

products.length?
    <div className="container mx-auto lg:w-1/2 w-full pb-24 text-red-700">

      <h1 className="my-12 font-bold text-2xl">Cart items</h1>
      <ul>
        {products.map((product) => {
          return (
            <li className="mb-12" key={product._id}>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div>
                    <img className="h-16" src={product.image} alt="/" />
                  </div>
                  <span className="font-bold ml-4 w-48  text-white">
                    {product.name}
                  </span>
                </div>
                <div>
                  <button onClick={()=>{decrement(product._id)}} className="bg-yellow-600 text-blue-950 px-2 py-1 rounded-md leading-none">
                    -
                  </button>
                  <b className="px-4">{getQuantity(product._id)}</b>
                  <button onClick={()=>{increment(product._id)}} className="bg-yellow-600  text-blue-950 px-2 py-1 rounded-md leading-none">
                    +
                  </button>
                </div>
                <span>₹{getSum(product._id,product.price)}</span>
                <button onClick={()=>{ handleDelete(product._id)}} className="bg-red-500 px-2 py-1 rounded-lg leading-10 text-yellow-100">
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <hr className="my-6"></hr>
      <div className="text-blue-700 text-right">
        <b> Grand Total:₹ {total}</b>
      </div>
      <div className="text-right mt-6">
        <button onClick={handleOrderNow} className="bg-blue-800 px-3 py-2 rounded-sm leading-none">
          Order Now!
        </button>
      </div>
    </div>
:
<img className="mx-auto w-1/2 mt-12 " src="images/empty-cart.png" alt="empty" />


  );
};

export default Cart;
