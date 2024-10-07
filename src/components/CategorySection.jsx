import React from 'react'
import ManCategory from '../assets/images/man.png'
import WomanCategory from '../assets/images/woman.png'
import KidCategory from '../assets/images/kid.png'
import { Link } from 'react-router-dom'

const categories = [
    {
        title: 'men',
        imageUrl: ManCategory,
        bgColor: 'bg-red-500',
        link: `/category/men's%20clothing`
    },
    {
        title: 'women',
        imageUrl: WomanCategory,
        bgColor: 'bg-blue-500',
        link: `/category/women's%20clothing`
    },
    {
        title: 'kids',
        imageUrl: KidCategory,
        bgColor: 'bg-green-500',
        link: '/kids'
    },
]

const CategorySection = () => {
  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6'>
        {categories.map((category, index) => (
            <Link to={category.link} key={index} className={`${category.bgColor} rounded relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer`}>
                <img src={category.imageUrl} alt={category.title} className='w-full h-full object-cover rounded-lg shadow-md'/>
                <div className='absolute top-20 left-12'>
                    <p className='text-xl font-bold dark:text-neutral-50 first-letter:capitalize'>{category.title}</p>
                    <p className='text-gray-700 dark:text-neutral-200'>View All</p>
                </div>
            </Link>
        ))}
    </div>
  )
}

export default CategorySection