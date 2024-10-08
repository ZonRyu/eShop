import React from 'react'
import { FaStar } from 'react-icons/fa'
import { addToCart } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const ProductCard = ({props}) => {
  const dispatch = useDispatch()

  const handleAddToCart = (e, props) => {
    e.stopPropagation()
    e.preventDefault()
    dispatch(addToCart({ ...props, quantity: 1 }))
  }

  return (
    <Link to={`/product/${props.id}`}>
      <div className='bg-white dark:bg-neutral-800 p-4 shadow rounded relative border
      transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
          <img src={props.image} alt={props.name} className='w-full h-48 object-contain mb-4' />
          <h3 className='text-lg font-semibold line-clamp-1 dark:text-neutral-200'>{props.title}</h3>
          <p className='text-gray-500 dark:text-neutral-400'>${props.price}</p>
          <div className='flex items-center mt-2'>
              <FaStar className='text-yellow-500'></FaStar>
              <FaStar className='text-yellow-500'></FaStar>
              <FaStar className='text-yellow-500'></FaStar>
              <FaStar className='text-yellow-500'></FaStar>
          </div>
          <div 
            className='absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all'
            onClick={(e) => handleAddToCart(e, props)}
            >
              <span className='group-hover:hidden'>+</span>
              <span className='hidden group-hover:block'>Add to cart</span>
          </div>
      </div>
    </Link>
  )
}

export default ProductCard