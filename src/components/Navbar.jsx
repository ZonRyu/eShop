import React, { useState } from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Modal from './Modal'
// import Login from './Login'
// import Register from './Register'
import { setSearchTerm } from '../redux/productSlice'
import { CiLight } from 'react-icons/ci'
import { MdDarkMode } from 'react-icons/md'
import { GiHamburgerMenu } from 'react-icons/gi'
import useWindowSize from '../hooks/useWindowSize'

const Navbar = ({ darkMode, setDarkMode}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
  const [search, setSearch] = useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const products = useSelector((state) => state.cart.products)

  const size = useWindowSize()

  const signUpAndLoginHandler = () => {
    setIsLogin(!isLogin)
  }

  const searchHandler = (e) => {
    e.preventDefault()
    dispatch(setSearchTerm(search))
    navigate(`/search/${search}`)
  }

  return (
    <nav className='bg-white shadow-md dark:bg-neutral-950 dark:text-neutral-200'>
      <div className='container mx-auto'>
        <div className='mx-4 py-4 flex justify-between items-center'>
          <div className='text-lg font-bold mr-4 hidden sm:block'>
            <Link to="/">e-Shop</Link>
          </div>
          <div className='relative flex-1'>
            <form onSubmit={searchHandler}>
              <input type='text' placeholder='Search Product' className='w-full border py-2 px-4 rounded dark:bg-neutral-950' onChange={(e) => setSearch(e.target.value)}/>
              <FaSearch className='absolute top-3 right-3 text-red-500' />
            </form>
          </div>
          <div className='flex items-center ml-4'>
            <button className='block md:hidden' onClick={() => setIsModalOpen(true)}>
              <GiHamburgerMenu className='text-2xl' />
            </button>
            <Link to='/cart' className='mr-4 relative hidden md:block dark:text-neutral-200'>
              <FaShoppingCart className='text-lg' />
              {products.length > 0 && (
                <span className='absolute -top-1.5 text-xs w-3 left-3 flex items-center justify-center bg-red-600 text-white rounded-full'>
                  {products.length}
                </span>
              )}
            </Link>
            <button className='hidden md:block' onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <CiLight className='text-2xl' /> : <MdDarkMode className='text-2xl' />}
            </button>
            {/* <button className='hidden md:block' onClick={() => setIsModalOpen(true)}>
              Login | Register
            </button>
            <button className='block md:hidden'>
              <FaUser/>
            </button> */}
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center dark:text-neutral-200 space-x-10 py-4 text-sm font-bold'>
        <Link to='' className='hover:underline'>
          Home
        </Link>
        <Link to='/shop' className='hover:underline'>
          Shop
        </Link>
        <Link to='/contact' className='hover:underline'>
          Contact
        </Link>
        <Link to='/about' className='hover:underline'>
          About
        </Link>
      </div>
      {
        size.width < 768 &&
        isModalOpen &&
        <Modal Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
          <div>
              <li className='flex list-none mb-2'>
                <Link to='/cart' className='mr-4 relative w-3/4 dark:text-neutral-200'>
                  <div className='flex items-center'>
                    <FaShoppingCart className='text-2xl' />
                    <h2 className='ml-4 font-semibold'>Shopping Cart</h2>
                    {products.length > 0 && (
                      <span className='absolute -top-1.5 text-xs w-3 left-5 flex items-center justify-center bg-red-600 text-white rounded-full'>
                        {products.length}
                      </span>
                    )}
                  </div>
                </Link>
              </li>
              <li className='flex list-none'>
                <button onClick={() => setDarkMode(!darkMode)}>
                  <div className='flex items-center'>
                    {
                      darkMode ? 
                      <>
                        <CiLight className='text-2xl' />
                        <span className='ml-4 font-semibold'>Light Mode</span>
                      </>
                      : 
                      <>
                        <MdDarkMode className='text-2xl' />
                        <span className='ml-4 font-semibold'>Dark Mode</span>
                      </>
                    }
                    </div>
                </button>
              </li>
              <button className='absolute top-7 right-10 text-gray-600 text-4xl' onClick={() => setIsModalOpen(false)}>&times;</button>
          </div>
        </Modal>
      }
    </nav>
  )
}

export default Navbar