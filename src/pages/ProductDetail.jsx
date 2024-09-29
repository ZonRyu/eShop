import React, { useEffect, useState } from 'react'
import { FaCarSide, FaQuestion } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { addToCart } from '../redux/cartSlice'

const ProductDetail = () => {
  const {id} = useParams()
  console.log(window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1))
  const products = useSelector(state => state.products.products)
  const [product, setProduct] = useState()
  const [quantity, setQuantity] = useState(1)

  const dispatch = useDispatch()

  useEffect(() => {
    const newProduct = products.find((item) => item.id === parseInt(id))
    setProduct(newProduct)
  }, [id, products])

  const handleInput = (e) => {
    if (e.target.value < 1) {
      toast.error('Quantity cannot be less than 1!')
    }else{
      setQuantity(e.target.valueAsNumber)
    }
  }

  const handleToCart = (e) => {
    e.stopPropagation()
    e.preventDefault()
    dispatch(addToCart({ ...product, quantity: quantity }))
  }

  const loadingElem = (
    <div class="flex flex-col items-center justify-center h-[80vh] dark:bg-neutral-900">
      <div
        class="inline-block h-48 w-48 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
        role="status">
      </div>
      <span className='mt-6 text-2xl dark:text-neutral-200'>Loading ...</span>
    </div>
  )

  if (!product) return loadingElem

  return (
    <div className='dark:bg-neutral-900'>
      <div className='container mx-auto py-8 px-4 md:px-16 lg:px-24'>
        <div className='flex flex-col md:flex-row gap-x-16'>
          {/* Product Image */}
          <div className='md:w-1/2 py-4 shadow-md dark:shadow-none md:px-8 h-96 flex justify-center'>
            <img src={product.image} alt={product.name} className='h-full' />
          </div>

          {/* Product Details */}
          <div className='md:w-1/2 p-4 shadow-md md:p-16 flex flex-col items-center gap-y-2'>
            <h2 className='text-3xl font-semibold mb-2 dark:text-neutral-200'>{product.name}</h2>
            <p className='text-xl font-semibold text-gray-800 dark:text-neutral-400 mb-4'>
              ${product.price}
            </p>

            <div className='flex items-center mb-4 gap-x-2'>
              {/* <label htmlFor="quantity" className='mr-2'>Quantity:</label> */}
              <input type="number" name="quantity" id="quantity" value={quantity} onChange={(e) => handleInput(e)} className='border p-1 w-16 rounded dark:bg-neutral-900 dark:text-neutral-400' />
              <button className='bg-red-600 text-white py-1.5 px-4 rounded hover:bg-red-800' onClick={(e) => handleToCart(e)}>Add to Cart</button>
            </div>
            <div className='flex flex-col gap-y-4 mt-4'>
              <p className='flex items-center dark:text-neutral-200'>
                <FaCarSide className='mr-1 dark:text-neutral-400' />
                Delivery & Return
              </p>
              <p className='flex items-center dark:text-neutral-200'>
                <FaQuestion className='mr-1 dark:text-neutral-400' />
                Ask a Question
              </p>
            </div>
          </div>
        </div>
        <div className='mt-8 dark:text-neutral-200'>
          <h3 className='text-xl font-bold mb-2'>Product Description</h3>
          <p className='dark:text-neutral-300'>
            Minim officia cillum duis anim est incididunt qui amet culpa occaecat. 
            Sit consequat quis magna adipisicing reprehenderit exercitation qui 
            sunt sunt sunt. Ut veniam veniam anim dolore ullamco tempor veniam magna amet.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail