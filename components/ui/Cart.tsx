'use client';

import React, { useEffect } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from 'next/image';
import Buy from '@/public/images/Buy.png';
import { useCartStore } from '../context/cartStore';
import { MdCancel } from 'react-icons/md';

const Cart = () => {
  const { products, fetchCart } = useCartStore();

  useEffect(() => {
    fetchCart(); 
  }, [fetchCart]);

  console.log("Product Data:", products);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className='flex items-center gap-1 cursor-pointer'>
          <div>
            <Image
              alt='Cart Icon'
              src={Buy}
              height={20}
              width={20}
            />
          </div>
          <div>Cart ({products.length})</div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='md:w-[30vw] w-[80vw] md:mr-6 mr-2'>
        <DropdownMenuLabel className='font-medium'>Your Cart</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Total Items: {products.length}</DropdownMenuItem>
        <DropdownMenuItem>
          <div className='w-full flex flex-col gap-4'>
            {products.map((item, index) => (
              <div
                className='flex items-center justify-between w-full'
                key={(item.id) + index}
              >
                <div className='flex items-center justify-between gap-4'>
                  <Image src={item.image || ''} alt='' height={50} width={50} />
                  <div>
                    <div>{item.title}</div>
                    <div className='text-primary font-medium'>${item.price}</div>
                  </div>
                </div>
                <div className='cursor-pointer'>
                  <MdCancel size={25} color='#000' />
                </div>
              </div>
            ))}
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Cart;
