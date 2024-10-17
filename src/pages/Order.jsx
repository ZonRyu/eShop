import React from 'react'
import { useNavigate } from 'react-router-dom'

const Order = ({ order }) => {
  const navigate = useNavigate()

  return (
    <div className='dark:bg-neutral-900'>
        <div className='container mx-auto py-8 xs:px-4 dark:text-neutral-200'>
            <div className='mx-4 md:mx-0'>
                <h2 className='text-2xl font-semibold mb-4'>Thank you for your order</h2>
                <p>Your order has been placed successfully you will recieve an email confirmation</p>
                <div className='mt-6 p-4 border rounded-lg bg-gray-100 dark:bg-neutral-900'>
                    <h3 className='text-lg font-semibold mb-2'>Order Summary</h3>
                    <p>Order Number: {order.orderNumber}</p>
                    <div className='mt-4'>
                        <h2 className='text-md font-semibold mb-2'>Shipping Information</h2>
                        <p>{order.shippingInformation.address}, {order.shippingInformation.city}, {order.shippingInformation.zip}</p>
                    </div>
                    <div className='mt-4'>
                        <h4 className='text-md font-semibold mb-2'>Items Ordered</h4>
                        {order.products.map((product) => (
                            <div key={product.id} className='flex justify-between mt-2'>
                                <p>{product.title} (x{product.quantity})</p>
                                <p>${product.price * product.quantity}</p>
                            </div>
                        ))}
                    </div>
                    <div className='mt-4 flex justify-between'>
                        <span>Total Price:</span>
                        <span className='font-semibold'>${order.totalPrice.toFixed(2)}</span>
                    </div>
                </div>
                <div className='mt-6'>
                    <button className='bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600'>Order Tracking</button>
                    <button className='ml-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-800' onClick={() => navigate('/')}>Continue Shopping</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Order