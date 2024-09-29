import React from 'react'
import ManCategory from '../assets/images/man.png'
import WomanCategory from '../assets/images/woman.png'
import KidCategory from '../assets/images/kid.png'

const categories = [
    {
        title: 'Man',
        imageUrl: ManCategory,
        bgColor: 'bg-red-500'
    },
    {
        title: 'Woman',
        imageUrl: WomanCategory,
        bgColor: 'bg-blue-500'
    },
    {
        title: 'Kids',
        imageUrl: KidCategory,
        bgColor: 'bg-green-500'
    },
]

const CategorySection = () => {
  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6'>
        {categories.map((category, index) => (
            <div key={index} className={`${category.bgColor} rounded relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer`}>
                <img src={category.imageUrl} alt={category.title} className='w-full h-full object-cover rounded-lg shadow-md'/>
                <div className='absolute top-20 left-12'>
                    <p className='text-xl font-bold dark:text-neutral-50'>{category.title}</p>
                    <p className='text-gray-600 dark:text-neutral-200'>View All</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default CategorySection