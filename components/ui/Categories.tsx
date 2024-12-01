import { categoriesData } from '@/data/categories'
import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const Categories = () => {
  return (
    <div className='w-full md:flex hidden items-center gap-4 py-5'>
        {
            categoriesData.map((item, index) => (
                <div
                    className='bg-zinc-50 px-2 py-1 flex items-center gap-1 text-black rounded-full text-sm'
                    key={index}
                >
                    <div>{item.category}</div>
                    <div>
                        <IoIosArrowDown
                            size={15}
                            color='#000'
                         />
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Categories