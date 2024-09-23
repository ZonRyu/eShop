import React from 'react'

const Register = ({ func }) => {
  return (
    <div>
        <h2 className='text-2xl font-bold mb-4'>Sing Up</h2>
        <form action="">
            <div className='mb-4'>
                <label htmlFor="" className='block text-gray-700'>Name</label>
                <input type="name" name="name" id="" className='w-full px-3 py-2 border' placeholder='Enter Name' />
            </div>

            <div className='mb-4'>
                <label htmlFor="" className='block text-gray-700'>Email</label>
                <input type="email" name="name" id="" className='w-full px-3 py-2 border' placeholder='Enter Email' />
            </div>

            <div className='mb-4'>
                <label htmlFor="" className='block text-gray-700'>Password</label>
                <input type="password" name="password" id="" className='w-full px-3 py-2 border' placeholder='Enter Password' />
            </div>

            <div className='mb-4'>
                <button type='submit' className='w-full bg-red-600 text-white py-2'>Sign Up</button>
            </div>
        </form>
        <div className='text-center'>
            <span className='text-gray-700'>Already Have an Account?</span>
            <button className='text-red-800 ml-1' onClick={func}>Login</button>
        </div>
    </div>
  )
}

export default Register