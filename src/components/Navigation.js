import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../CartContext'
import { Link } from 'react-router-dom'
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
      <nav className=' container mx-auto flex items-center justify-between py=8'>
    
        <Link to="/">
            <img style={{height:70}} src="/images/iconb.jpg" alt="Logo"  />
        </Link>
    <ul className='flex items-center'>
      <li className='ml-6 text-white'><Link to="/">Home</Link></li>
      <li className='ml-6 text-white' ><Link to="/products ">Products</Link></li>
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

