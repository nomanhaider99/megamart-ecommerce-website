import React from 'react'
import Logo from '../ui/Logo'
import Image from 'next/image'
import Search from '@/public/images/Search.png'
import Union from '@/public/images/Union.png'
import User from '@/public/images/user.png'
import Cart from '../ui/Cart'

const Header = () => {
    return (
        <div className='w-full fixed top-0 left-0 bg-white flex justify-between items-center md:px-10 px-4 py-4 border-b-[0.5px] border-zinc-300/70'>
            <div><Logo /></div>
            <div className='flex items-center gap-4'>
                {/* Input */}
                <div className='md:flex hidden justify-between px-3 py-2 rounded-lg bg-blue-50 w-[35vw]'>
                    <div>
                        <Image
                            alt=''
                            src={Search}
                            height={20}
                            width={20}
                         />
                    </div>
                    <div>
                        <input 
                            type="text" 
                            className='bg-transparent text-black focus:outline-none w-[21vw] text-sm'
                            placeholder='Search essentials, grocerries and more...'
                        />
                    </div>
                    <div>
                        <Image
                            alt=''
                            src={Union}
                            height={15}
                            width={15}
                            className='mt-1'
                         />
                    </div>
                </div>
                {/* Buttons */}
                <div className='flex items-center gap-8'>
                    <div className='md:flex hidden items-center gap-1 cursor-pointer'>
                        <div>
                            <Image
                                alt=''
                                src={User}
                                height={20}
                                width={20}
                             />
                        </div>
                        <div>Sign Up/Sign In</div>
                    </div>
                    <div>
                        <Cart />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header