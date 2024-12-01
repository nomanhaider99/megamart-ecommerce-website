import Image from 'next/image'
import React from 'react'
import Top1 from '@/public/images/Top1.png'
import Top2 from '@/public/images/Top2.png'
import Top3 from '@/public/images/Top3.png'

const Top = () => {
  return (
    <div className='w-full flex flex-col gap-4 py-10'>
        <div className='flex flex-col gap-1'>
            <div className='text-2xl font-semibold'>Top <span className='text-primary'>Electronics Brands</span></div>
            <div className='h-[2px] w-[10vw] bg-primary'></div>
        </div>
        <div className='w-full grid grid-cols-1 md:grid-cols-3 md:gap-4'>
            <Image
                alt=''
                src={Top1}
                height={200}
                width={300}
             />
            <Image
                alt=''
                src={Top2}
                height={200}
                width={300}
             />
            <Image
                alt=''
                src={Top3}
                height={180}
                width={280}
             />
        </div>
    </div>
  )
}

export default Top