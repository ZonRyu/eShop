import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EmptyCart from '../assets/images/emptycart.png'
import { FaTrashAlt } from 'react-icons/fa'
import Modal from '../components/Modal'
import ChangeAddress from '../components/ChangeAddress'
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../redux/cartSlice'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const cart = useSelector((state) => state.cart)
  const [address, setAddress] = useState('main stret, 0012')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <div className='dark:bg-neutral-900'>
        <div className='container sm:mx-8 md:mx-auto py-8 min-h-96'>
            {cart.products.length > 0 ? 
                <div className='mx-4'>
                    <h3 className='text-2xl font-semibold mb-4 dark:text-neutral-200'>SHOPPING CART</h3>
                    <div className='flex flex-col md:flex-row justify-between gap-4 mt-8'>
                        <div className='w-full md:w-2/3 overflow-x-auto'>
                            <table>
                                <thead className='border-b mb-2'>
                                    <tr>
                                        <th className='p-2 text-left dark:text-neutral-200'>PRODUCTS</th>
                                        <th className='p-2 dark:text-neutral-200'>PRICE</th>
                                        <th className='p-2 dark:text-neutral-200'>QUANTITY</th>
                                        <th className='p-2 dark:text-neutral-200'>SUBTOTAL</th>
                                        <th className='p-2 dark:text-neutral-200'>REMOVE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.products.map((product) => (
                                        <tr key={product.id} className='border-b'>
                                            <td className='py-3'>
                                                <div className='flex space-x-2 flex-col md:flex-row'>
                                                    <img className='w-16 h-16 object-contain rounded' src={product.image} alt={product.title} />
                                                    <p className='font-semibold'>{product.title}</p>
                                                </div>
                                            </td>
                                            <td className='text-center'>
                                                <p>${product.price}</p>
                                            </td>
                                            <td>
                                                <div className='flex justify-around border rounded'>
                                                    <button className='text-xl px-2 font-bold border-r' onClick={() => dispatch(decreaseQuantity(product.id))}>-</button>
                                                    <p className='text-xl px-2'>{product.quantity}</p>
                                                    <button className='text-xl px-2  border-l' onClick={() => dispatch(increaseQuantity(product.id))}>+</button>
                                                </div>
                                            </td>
                                            <td className='text-center'>
                                                <p>${(product.quantity * product.price).toFixed(2)}</p>
                                            </td>
                                            <td className='text-center'>
                                                <button className='text-red-500 hover:text-red-700' onClick={() => dispatch(removeFromCart(product.id))}>
                                                    <FaTrashAlt />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border dark:text-neutral-200 dark:bg-neutral-900'>
                            <h3 className='text-sm font-semibold mb-5'>CART TOTAL</h3>
                            <div className='flex justify-between mb-5 border-b pb-1'>
                                <span className='text-sm'>Total Items:</span>
                                <span>{cart.totalQuantity}</span>
                            </div>
                            <div className='mb-4 border-b pb-2'>
                                <p>Shipping:</p>
                                <p className='ml-2'>Shipping to:
                                    <span className='font-bold'>{address}</span>
                                </p>
                                <button className='text-blue-500 hover:underline mt-1 ml-2' onClick={() => setIsModalOpen(true)}>Change address</button>
                            </div>
                            <div className='flex justify-between mb-4'>
                                <span>Total price:</span>
                                <span>${cart.totalPrice.toFixed(2)}</span>
                            </div>
                            <button className='w-full bg-red-600 text-white py-2 rounded hover:bg-red-800' onClick={() => navigate('/checkout')}>Proced to checkout</button>
                        </div>
                    </div>
                    <Modal
                    isModalOpen={isModalOpen} 
                    setIsModalOpen={setIsModalOpen}>
                        <ChangeAddress setAddress={setAddress} setIsModalOpen={setIsModalOpen} />
                    </Modal>
                </div>
                :
                <div className='flex justify-center'>
                    <img src={EmptyCart} alt="" className='w-[45rem]' />
                </div>
            }
        </div>
    </div>
  )
}

export default Cart