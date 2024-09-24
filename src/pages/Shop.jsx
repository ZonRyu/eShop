import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'

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

  return (
    <div className={`mx-auto py-12 ${!homePage ? 'px-6 md:px-16 lg:px-[7.5rem]' : 'px-6'}`}>
        <h2 className='text-2xl font-bold mb-6 text-center'>Shop</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer'>
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
  )
}

export default Shop