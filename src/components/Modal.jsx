import React, { useEffect } from 'react'

const Modal = ({isModalOpen, setIsModalOpen, children}) => {

  useEffect(() => {
    // Applying on mount
    document.body.style.overflow = "hidden";
    // Applying on unmount    
    return () => {
      document.body.style.overflow = "visible";
    }
  }, [])

  if(!isModalOpen) return null
  return (
    <div className='no-scroll fixed inset-0 bg-gray-800 bg-opacity-75 backdrop-blur-sm z-50' role='dialog' onClick={() => setIsModalOpen(false)}>
      <div className='bg-white dark:bg-neutral-900 rounded-lg shadow-lg p-6 m-4'>
        {children}
      </div>
    </div>
  )
}

export default Modal