import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { checkout } from '../redux/cartSlice'

const Checkout = ({ setOrder }) => {
  const [billingToggle, setBillingToggle] = useState(true)
  const [shippingToggle, setShippingToggle] = useState(false)
  const [paymentToggle, setPaymentToggle] = useState(false)

  const [paymentMethod, setPaymentMethod] = useState("cod")
  const [shippingInfo, setShippingInfo] = useState({
    address: '',
    city: '',
    zip: '',
  })

  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const setShippingHandler = (e) => {
    e.preventDefault()
    setShippingInfo({
        ...shippingInfo, 
        [e.target.name]: e.target.value 
    })
  }

  const placeOrderHandler = (e) => {
    const neworder = {
        products: cart.products,
        orderNumber: '1234',
        shippingInformation: shippingInfo,
        totalPrice: cart.totalPrice,
    }

    setOrder(neworder)
    dispatch(checkout())
    navigate('/order-confirmation')
  }


  return (
    <div className='dark:bg-neutral-900'>
        <div className='container mx-auto py-8 min-h-96 xs:px-4 dark:text-neutral-200'>
            <h3 className='text-2xl font-semibold mb-4'>CHECKOUT</h3>
            <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
                <div className='md:w-1/2'>

                    {/* Billing */}
                    <div className='border rounded p-2 mb-6'>
                        <div className='flex items-center justify-between' onClick={() => setBillingToggle(!billingToggle)}>
                            <h3 className='text-lg font-semibold mb-2'>Billing Information</h3>
                            {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
                        </div>

                        <div className={`space-y-4 ${billingToggle ? '' : 'hidden'} text-gray-700 dark:text-neutral-200`}>
                            <div>
                                <label htmlFor="" className='block'>Name</label>
                                <input 
                                type="text" 
                                name='name'
                                placeholder='Enter name'
                                className='w-full px-3 py-2 border rounded dark:bg-neutral-900'
                                />
                            </div>
                            <div>
                                <label htmlFor="" className='block'>Email</label>
                                <input 
                                type="email" 
                                name='email'
                                placeholder='Enter email'
                                className='w-full px-3 py-2 border rounded dark:bg-neutral-900'
                                />
                            </div>
                            <div>
                                <label htmlFor="" className='block'>Phone</label>
                                <input 
                                type="text" 
                                name='phone'
                                placeholder='Enter phone #'
                                className='w-full px-3 py-2 border rounded dark:bg-neutral-900'
                                />
                            </div>
                        </div>
                    </div>
                    
                    {/* Shipping */}
                    <div className='border rounded p-2 mb-6'>
                        <div className='flex items-center justify-between' onClick={() => setShippingToggle(!shippingToggle)}>
                            <h3 className='text-lg font-semibold mb-2'>Shipping Information</h3>
                            {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
                        </div>

                        <div className={`space-y-4 ${shippingToggle ? '' : 'hidden'} text-gray-700 dark:text-neutral-200`}>
                            <div>
                                <label htmlFor="" className='block'>Address</label>
                                <input 
                                type="text" 
                                name='address'
                                placeholder='Enter address'
                                className='w-full px-3 py-2 border rounded dark:bg-neutral-900'
                                onChange={(e) => setShippingHandler(e)}
                                />
                            </div>
                            <div>
                                <label htmlFor="" className='block'>City</label>
                                <input 
                                type="text" 
                                name='city'
                                placeholder='Enter city'
                                className='w-full px-3 py-2 border rounded dark:bg-neutral-900'
                                onChange={(e) => setShippingHandler(e)}
                                />
                            </div>
                            <div>
                                <label htmlFor="" className='block'>Zip Code</label>
                                <input 
                                type="text" 
                                name='zip'
                                placeholder='Enter zip code'
                                className='w-full px-3 py-2 border rounded dark:bg-neutral-900'
                                onChange={(e) => setShippingHandler(e)}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Payment */}
                    <div className='border rounded p-2 mb-6'>
                        <div className='flex items-center justify-between' onClick={() => setPaymentToggle(!paymentToggle)}>
                            <h3 className='text-lg font-semibold mb-2'>Payment Method</h3>
                            {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
                        </div>

                        <div className={`space-y-4 ${paymentToggle ? '' : 'hidden'} text-gray-700 dark:text-neutral-200`}>
                            <div className='flex mb-2'>
                                <input 
                                type="radio" 
                                name='payment'
                                checked={paymentMethod === "cod"}
                                onChange={() => setPaymentMethod("cod")}
                                />
                                <label htmlFor="" className='block ml-2'>Cash on Delivery</label>
                            </div>
                            <div className='flex mb-2'>
                                <input 
                                type="radio" 
                                name='payment'
                                checked={paymentMethod === "dc"}
                                onChange={() => setPaymentMethod("dc")}
                                />
                                <label htmlFor="" className='block ml-2'>Debit Card</label>
                            </div>
                            {paymentMethod === "dc" && (
                                <div className='bg-gray-100 p-4 rounded-lg mb-4'>
                                    <h3 className='text-xl font-semibold mb-4'>Debit Card Information</h3>
                                    <div className='mb-4'>
                                        <label htmlFor="" className='block text-gray-700 font-semibold mb-2'>Card Number</label>
                                        <input type="text" placeholder='Enter card number' className='border p-2 w-full rounded' required />
                                    </div>
                                    <div className='mb-4'>
                                        <label htmlFor="" className='block text-gray-700 font-semibold mb-2'>Card Holder Name</label>
                                        <input type="text" placeholder='Enter card holder name' className='border p-2 w-full rounded' required />
                                    </div>
                                    <div className='flex justify-between mb-4'>
                                        <div className='w-1/2 mr-2'>
                                            <label htmlFor="" className='block text-gray-700 font-semibold mb-2'>Expired Date</label>
                                            <input type="text" placeholder='MM/YY' className='border p-2 w-full rounded' required />
                                        </div>
                                        <div className='w-1/2 ml-2'>
                                            <label htmlFor="" className='block text-gray-700 font-semibold mb-2'>CVV</label>
                                            <input type="text" placeholder='CVV' className='border p-2 w-full rounded' required />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className='md:w-1/2 bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-md border h-full'>
                    <h3 className='text-lg font-semibold mb-4'>Order Summary</h3>
                    <div className='space-y-4'>
                        {cart.products.map((product) => (
                            <div key={product.id} className='flex justify-between'>
                                <div className='flex items-center'>
                                    <img src={product.image} alt={product.title} className='w-16 h-16 object-contain rounded' />
                                    <div className='ml-4'>
                                        <h4 className='text-md font-semibold'>{product.title}</h4>
                                        <p className='text-gray-600 dark:text-neutral-400'>
                                            ${product.price} x {product.quantity}
                                        </p>
                                    </div>
                                </div>
                                <div className='text-gray-800 dark:text-neutral-400'>
                                    ${product.price * product.quantity}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='mt-4 border-t pt-4'>
                        <div className='flex justify-between'>
                            <span>Total Price:</span>
                            <span className='font-semibold dark:text-neutral-400'>${cart.totalPrice.toFixed(2)}</span>
                        </div>
                    </div>
                    <button className='w-full bg-red-600 text-white py-2 mt-6 rounded hover:bg-red-800' onClick={() => placeOrderHandler()}>Place Order</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout