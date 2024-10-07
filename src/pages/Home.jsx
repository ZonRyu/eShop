import HeroImage from '../assets/images/hero-page.png'
import InfoSection from "../components/InfoSection"
import CategorySection from "../components/CategorySection"
import { useSelector } from "react-redux"
import ProductCard from "../components/ProductCard"
import Shop from "./Shop"
import { Link } from 'react-router-dom'

const Home = ({ darkMode }) => {
  const products = useSelector((state) => state.products.products)
  const categories = useSelector((state) => state.categories.categories)
  
  return (
    <div className={`bg-white dark:bg-neutral-900 ${darkMode ? 'pt-2' : 'mt-2'} px-4 md:px-16 lg:px-24`}>
      <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
        <div className="w-full md:w-3/12">
          <div className="bg-red-600 text-white text-xs font-bold px-2 py-2.5 rounded-t">SHOP BY CATEGORIES</div>
          <ul className="space-y-4 bg-gray-100 dark:bg-neutral-700 dark:text-neutral-200 p-3 border-neutral-700 rounded-b">
            {categories.map((category, index) => (
              <li key={index} className="flex items-center text-sm font-medium first-letter:capitalize">
                <div className="w-2 h-2 border border-red-600 rounded-full mr-2"></div>
                <Link to={`/category/${category}`} className='first-letter:capitalize'>{category}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative bg-amber-500 rounded">
          <img src={HeroImage} alt="Hero Image" className="h-full w-full" />
          <div className="absolute top-16 left-8 dark:text-gray-200">
            <p className="text-gray-600 dark:text-gray-300 mb-4">Hello Users</p>
            <h2 className="text-3xl font-bold">WELCOME TO E-SHOP</h2>
            <p className="text-xl mt-2.5 font-bold">MILLIONS+ PRODUCTS</p>
            <button className="bg-red-600 px-8 py-1.5 text-white mt-4 rounded hover:bg-red-700
             transform transition-transform duration-300 hover:scale-105">SHOP NOW</button>
          </div>
        </div>
      </div>
      <InfoSection />
      <CategorySection />
      <div className="container mx-auto py-12">
        <h2 className="text-2xl font-bold mb-6 text-center dark:text-neutral-200">Top Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 cursor-pointer">
          {products.slice(0, 5).map((product, index) => (
            <ProductCard key={index} props={product} />
          ))}
        </div>
      </div>
      <Shop />
    </div>
  )
}

export default Home