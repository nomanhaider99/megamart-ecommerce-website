'use client';

import React from 'react';
import Image from 'next/image';
import { useCartStore } from '../context/cartStore';

interface ProductProps {
  image: any;
  title: string;
  price: number;
  discount: number;
  id: string;
}

const Product: React.FC<ProductProps> = ({
  discount,
  image,
  price,
  title,
  id,
}) => {
  const discountedPrice = price - (price * (discount / 100));
  const savings = price - discountedPrice;
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = async () => {
    try {
      await addToCart(id as any);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <div className='md:w-[18vw] md:h-[25vw] h-[85vw] w-full border-[0.5px] border-zinc-400 rounded-lg flex flex-col gap-2 p-2 cursor-pointer'>
      {/* Image */}
      <div className='bg-zinc-100 h-1/2 p-2 flex justify-center items-center'>
        <Image
          alt={title}
          src={image}
          height={100}
          width={100}
          className='md:h-[10vw] md:w-[7vw] w-[28vw] h-[40vw]'
        />
      </div>
      {/* Data */}
      <div className='flex flex-col justify-between h-1/2'>
        <div className='flex flex-col gap-1'>
          <div className='font-medium'>{title}</div>
          <div className='flex items-center gap-2 text-sm'>
            <div>${discountedPrice.toFixed(2)}</div>
            <div className='line-through text-zinc-500'>${price.toFixed(2)}</div>
          </div>
        </div>
        <div className='h-[0.5px] bg-zinc-400 w-full'></div>
        <div className='text-green-700 text-sm'>Save - ${savings.toFixed(2)}</div>
        <div className=''>
          <button
            className='px-4 py-2 bg-primary text-white text-sm rounded-lg'
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
