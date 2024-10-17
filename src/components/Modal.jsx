import React, { Children } from 'react'

const Modal = ({isModalOpen, setIsModalOpen, children}) => {
  if(!isModalOpen) return null
  return (
    <div className='no-scroll fixed inset-0 bg-gray-800 bg-opacity-75 backdrop-blur-sm z-50' role='dialog' onClick={() => setIsModalOpen(false)}>
      <div className='bg-white rounded-lg shadow-lg p-6 m-4'>
        {children}
      </div>
    </div>
  )
}

export default Modal