import React, { useState } from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Modal from './Modal'
import Login from './Login'
import Register from './Register'
import { setSearchTerm } from '../redux/productSlice'

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
  const [search, setSearch] = useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const products = useSelector((state) => state.cart.products)

  const signUpAndLoginHandler = () => {
    setIsLogin(!isLogin)
  }

  const searchHandler = (e) => {
    e.preventDefault()
    dispatch(setSearchTerm(search))
    navigate('/search')
  }

  return (
    <nav className='bg-white shadow-md'>
      <div className='container mx-auto xs:px-4 py-4 flex justify-between items-center'>
        <div className='text-lg font-bold'>
          <Link to="/">e-Shop</Link>
        </div>
        <div className='relative flex-1 mx-4'>
          <form onSubmit={searchHandler}>
            <input type='text' placeholder='Search Product' className='w-full border py-2 px-4' onChange={(e) => setSearch(e.target.value)}/>
            <FaSearch className='absolute top-3 right-3 text-red-500' />
          </form>
        </div>
        <div className='flex items-center space-x-4'>
          <Link to='/cart' className='relative'>
            <FaShoppingCart className='text-lg' />
            {products.length > 0 && (
              <span className='absolute -top-1.5 text-xs w-3 left-3 flex items-center justify-center bg-red-600 text-white rounded-full'>
                {products.length}
              </span>
            )}
          </Link>
          <button className='hidden md:block' onClick={() => setIsModalOpen(true)}>
            Login | Register
          </button>
          <button className='block md:hidden'>
            <FaUser/>
          </button>
        </div>
      </div>
      <div className='flex items-center justify-center space-x-10 py-4 text-sm font-bold'>
        <Link to='' className='hover:underline'>
          Home
        </Link>
        <Link to='/shop' className='hover:underline'>
          Shop
        </Link>
        <Link to='' className='hover:underline'>
          Contact
        </Link>
        <Link to='' className='hover:underline'>
          About
        </Link>
      </div>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        {isLogin ? <Login func={signUpAndLoginHandler} /> : <Register func={signUpAndLoginHandler} />}
      </Modal>
    </nav>
  )
}

export default Navbar