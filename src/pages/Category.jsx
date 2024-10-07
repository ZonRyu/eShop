import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import { useParams } from 'react-router-dom'

const Shop = () => {
  const {name} = useParams()
  const products = useSelector(state => state.products.products)
  const [item, setItem] = useState()

  useEffect(() => {
    const newProduct = products.filter((data) => data.category === name)
    setItem(newProduct)
  }, [name, products])
  
  const loadingElem = (
    <div className="flex flex-col items-center justify-center h-[80vh] dark:bg-neutral-900">
      <div
        className="inline-block h-48 w-48 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
        role="status">
      </div>
      <span className='mt-6 text-2xl dark:text-neutral-200'>Loading ...</span>
    </div>
  )

  if (!item) return loadingElem

  return (
    <div className='dark:bg-neutral-900'>
      <div className='container mx-auto py-12'>
          <h2 className='text-2xl font-bold mb-6 text-center dark:text-neutral-200'>Shop</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 cursor-pointer'>
            {
              item.map((product, index) => (
                <ProductCard props={product} key={index} />
              ))
            }
          </div>
      </div>
    </div>
  )
}

export default Shop