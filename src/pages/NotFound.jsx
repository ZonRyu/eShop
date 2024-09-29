import React from 'react'

const NotFound = () => {
  return (
    <div className='flex items-center justify-center dark:bg-neutral-900 h-[70vh]'>
        <div className='container inline-block mx-auto py-8 px-4 md:px-16 lg:px-24'>
          <div className='text-center dark:text-neutral-200'>
            <h2 className='text-6xl font-bold'>404</h2>
            <h3 className='text-3xl font-bold mb-4'>Page Not Found</h3>
          </div>
        </div>
    </div>
  )
}

export default NotFound