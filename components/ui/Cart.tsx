'use client'
import React, { useEffect, useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from 'next/image'
import Buy from '@/public/images/Buy.png'
import CartProduct from './CartProduct'
import { MdCancel } from 'react-icons/md'
import { ProductProps } from '@/types/product'
import { getCart } from '@/app/actions/getCart'

const Cart = () => {
    const [products, setProducts] = useState<ProductProps[]>([]);

    useEffect(() => {
        const callData = async () => {
            const data = await getCart();
            setProducts(data);
        }
        callData();
    }, []);

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
                    <div>Cart</div>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='md:w-[30vw] w-[80vw] md:mr-6 mr-2'>
                <DropdownMenuLabel className='font-medium'>Your Cart</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Total Items: {products.length}</DropdownMenuItem>
                <DropdownMenuItem>
                    <div className='flex flex-col gap-4'>
                        {products.map((item, index) => (
                            <div
                                className='flex items-center justify-between w-full'
                                key={index}
                            >
                                <div className='flex items-center justify-between w-full gap-4'>
                                    <CartProduct
                                        discount={item.discount}
                                        image={item.image}
                                        title={item.title}
                                        price={item.price}
                                    />
                                </div>
                                <div className='cursor-pointer'>
                                    <MdCancel
                                        size={25}
                                        color='#000'
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default Cart;
