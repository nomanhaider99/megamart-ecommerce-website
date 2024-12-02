import Image from 'next/image'
import React from 'react'

interface CartProductProps {
    title: string,
    price: number,
    image: string,
    discount: number
}

const CartProduct: React.FC<CartProductProps> = ({
    image,
    price,
    title,
    discount
}) => {
    const discountedPrice = price - (price * (discount / 100));
  return (
    <div className='w-full flex items-center gap-6 cursor-pointer'>
        {/* Image */}
        <div>
            <Image
                alt=''
                src={image}
                width={50}
                height={50}
             />
        </div>
        {/* Title & Price */}
        <div className='flex flex-col gap-1'>
            <div className='text-lg font-medium tracking-tight'>{title}</div>
            <div className='font-bold text-primary text-xl'>${discountedPrice}</div>
        </div>
    </div>
  )
}

export default CartProduct