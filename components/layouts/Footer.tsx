import Image from 'next/image'
import React from 'react'
import Mask from '@/public/images/Mask group.png'

const Footer = () => {
  return (
    <div className='w-full px-1 py-1 flex flex-col justify-between gap-4 bg-primary'>
        <div className='w-full flex flex-col md:flex-row justify-between md:items-center md:pl-10 pl-4 gap-5'>
            <div className='flex flex-col gap-8'>
                <div className='text-2xl font-medium text-white'>MegaMart</div>
                <div className='flex flex-col gap-2'>
                    <div className='flex flex-col'>
                        <div className='text-white'>Whatsapp</div>
                        <div className='text-sm text-zinc-100'>(021) 124 514 1412</div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-white'>Email</div>
                        <div className='text-sm text-zinc-100'>megamartinc@mail.com</div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-14'>
                <div className='flex flex-col gap-2'>
                    <div className='text-white text-lg'>Most Popular Categories</div>
                    <div className='flex flex-col text-sm font-light text-zinc-100'>
                        <div>Staples</div>
                        <div>Mobiles</div>
                        <div>Laptops</div>
                        <div>Home Appliances</div>
                        <div>Grocerries</div>
                        <div>Women Clothings</div>
                        <div>Men Clothing</div>
                        <div>Dairy & Bakery</div>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='text-white text-lg'>Customer Services</div>
                    <div className='flex flex-col text-sm font-light text-zinc-100'>
                        <div>About Us</div>
                        <div>Terms & Conditions</div>
                        <div>FAQs</div>
                        <div>Privacy Policy</div>
                        <div>E-Waste Policy</div>
                        <div>Cancellation & Returns</div>
                    </div>
                </div>
            </div>
            <div className='md:block hidden'>
                <Image
                    alt=''
                    src={Mask}
                    height={250}
                    width={250}
                 />
            </div>
        </div>
        <div className='h-[0.5px] bg-zinc-200 w-full'></div>
        <div className='flex justify-center items-center text-white font-light'>
            <div>2022 All rights reserved. Reliance Retail Ltd.</div>
        </div>
    </div>
  )
}

export default Footer