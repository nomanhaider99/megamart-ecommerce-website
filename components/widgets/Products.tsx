import { mobilesData } from '@/data/products'
import React from 'react'
import Product from '../ui/Product'

const Products = () => {
  return (
    <div className='w-full flex flex-col gap-4 py-10'>
      <div className='flex flex-col'>
        <div className='text-2xl font-semibold tracking-tight'>Grab the best deal on <span className='text-primary'>Smartphones</span></div>
        <div className='w-[20vw] h-[1px] bg-primary'></div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-5 gap-4'>
        {mobilesData.map((mobile, index) => (
          <Product
            key={index}
            image={mobile.image}
            title={mobile.title}
            price={mobile.price}
            discount={mobile.discount}
            id={mobile.id}
          />
        ))}
      </div>
    </div>
  )
}

export default Products