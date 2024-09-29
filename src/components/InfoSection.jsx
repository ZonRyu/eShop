import React from 'react'
import { FaHeadset, FaLock, FaShippingFast, FaTag } from 'react-icons/fa'
import { FaMoneyBill1Wave } from 'react-icons/fa6'

const InfoSection = () => {
  const iconClassName = 'text-3xl text-red-600'
  const infoItems = [
    {
        icon: <FaShippingFast className={iconClassName} />,
        title: 'Free Shipping',
        description: 'Get your orders delivered with no extra cost'
    },
    {
        icon: <FaHeadset className={iconClassName} />,
        title: 'Support 24/7',
        description: 'We are here to assist you anytime'
    },
    {
        icon: <FaMoneyBill1Wave className={iconClassName} />,
        title: '100% Money Back',
        description: 'Full refund if you are not satisfied'
    },
    {
        icon: <FaLock className={iconClassName} />,
        title: 'Payment Security',
        description: 'Your payment information is safe with us'
    },
    {
        icon: <FaTag className={iconClassName} />,
        title: 'Discount',
        description: 'Enjoy the best prices on our products'
    },
  ]

  return (
    <div className='bg-white dark:bg-neutral-900 pb-8 pt-12'>
        <div className='container mx-auto flex flex-wrap justify-center gap-4'>
            {infoItems.map((item, index) => (
                <div key={index} className="flex flex-col items-center lg:w-48 md:w-[48.75%] w-full text-center p-4 border rounded-lg shadow-md
                 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                    {item.icon}
                    <h3 className='mt-4 text-xl font-semibold dark:text-neutral-100'>{item.title}</h3>
                    <p className='mt-2 text-gray-600 dark:text-neutral-300'>{item.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default InfoSection