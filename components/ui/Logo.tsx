import Image from 'next/image'
import React from 'react'
import LogoLeft from '@/public/images/LogoLeft.png'
import LogoRight from '@/public/images/LogoRight.png'

const Logo = () => {
  return (
    <div className='flex items-center gap-2'>
        <div>
            <Image
                alt=''
                src={LogoLeft}
                height={35}
                width={35}
             />
        </div>
        <div>
            <Image
                alt=''
                src={LogoRight}
                height={70}
                width={90}
             />
        </div>
    </div>
  )
}

export default Logo