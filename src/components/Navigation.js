import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../CartContext'
import { Link } from 'react-router-dom'
import '../style.css';
//import SearchBar from './SearchBar';
// import ParentComponent from './ParentComponent.js'
const Navigation = () => {

  const cartStyle={
    background:'#E9B824',
    display:'flex',
    height:40,
    padding:'6px 12px',
    borderRadius:'50px'
  }

  const {cart}=useContext(CartContext);
  return (
    <>
      <nav className=' container mx-auto flex items-center justify-between py-8'>
    
        <Link to="/">
            <img style={{height:70}} src="/images/iconb.jpg" alt="Logo"  />
        </Link>
        {/* <ParentComponent/> */}
        
    <ul className='flex items-center px-3 py-1 text-sm sm:px-1 sm:py-1 sm:text-center lg:px-8 lg:py-4 lg:text-lg xl:px-10 xl:py-5 xl:text-xl'>
      <li className='ml-6 text-white '><Link to="/">Home</Link></li>
      <li className='ml-6 text-white ' ><Link to="/products ">Products</Link></li>
      <li className='ml-6 text-white'>
        <Link to="/cart">
          <div style={cartStyle}>
            <span className='text-black-600'>{cart.totalItems}</span>
            <img className="ml-4 text-black"  src="/images/cart1.png" alt=""/> 
          </div>
        </Link>
      </li>
    </ul>
      </nav>
    </>
  )
}

export default Navigation

