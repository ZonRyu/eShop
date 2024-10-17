import React from 'react'

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen dark:bg-neutral-900">
      <div
        className="inline-block h-48 w-48 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
        role="status">
      </div>
      <span className='mt-6 text-2xl dark:text-neutral-200'>Loading ...</span>
    </div>
  )
}

export default Loading