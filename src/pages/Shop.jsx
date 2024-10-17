import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import Loading from '../components/Loading'

const Shop = () => {
  const [homePage, setHomePage] = useState(true)

  useEffect(() => {
    if (window.location.pathname === '/') {
      setHomePage(true)
    } else {
      setHomePage(false)
    }
  }, [window.location.pathname])

  const products = useSelector((state) => state.products.products)

  if (!products) return <Loading />

  return (
    <div className='dark:bg-neutral-900'>
      <div className='container mx-auto py-12'>
        <div className='mx-6 sm:mx-0'>
          <h2 className='text-2xl font-bold mb-6 text-center dark:text-neutral-200'>Shop</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 cursor-pointer'>
            {homePage ?
              products.slice(0, 5).map((product, index) => (
                  <ProductCard props={product} key={index} />
              ))
              :
              products.map((product, index) => (
                <ProductCard props={product} key={index} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop