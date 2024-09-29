import React, { useEffect, useState } from 'react'
import { FaCarSide, FaQuestion } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { addToCart } from '../redux/cartSlice'

const ProductDetail = () => {
  const {id} = useParams()
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

  if (!product) return <div>Loading ....</div>

  return (
    <div className='container mx-auto py-8 px-4 md:px-16 lg:px-24'>
      <div className='flex flex-col md:flex-row gap-x-16'>
        {/* Product Image */}
        <div className='md:w-1/2 py-4 shadow-md md:px-8 h-96 flex justify-center'>
          <img src={product.image} alt={product.name} className='h-full' />
        </div>

        {/* Product Details */}
        <div className='md:w-1/2 p-4 shadow-md md:p-16 flex flex-col items-center gap-y-2'>
          <h2 className='text-3xl font-semibold mb-2'>{product.name}</h2>
          <p className='text-xl font-semibold text-gray-800 mb-4'>
            ${product.price}
          </p>

          <div className='flex items-center mb-4 gap-x-2'>
            {/* <label htmlFor="quantity" className='mr-2'>Quantity:</label> */}
            <input type="number" name="quantity" id="quantity" value={quantity} onChange={(e) => handleInput(e)} className='border p-1 w-16 rounded' />
            <button className='bg-red-600 text-white py-1.5 px-4 rounded hover:bg-red-800' onClick={(e) => handleToCart(e)}>Add to Cart</button>
          </div>
          <div className='flex flex-col gap-y-4 mt-4'>
            <p className='flex items-center'>
              <FaCarSide className='mr-1' />
              Delivery & Return
            </p>
            <p className='flex items-center'>
              <FaQuestion className='mr-1' />
              Ask a Question
            </p>
          </div>
        </div>
      </div>
      <div className='mt-8'>
        <h3 className='text-xl font-bold mb-2'>Product Description</h3>
        <p>
          Minim officia cillum duis anim est incididunt qui amet culpa occaecat. 
          Sit consequat quis magna adipisicing reprehenderit exercitation qui 
          sunt sunt sunt. Ut veniam veniam anim dolore ullamco tempor veniam magna amet.
        </p>
      </div>
    </div>
  )
}

export default ProductDetail