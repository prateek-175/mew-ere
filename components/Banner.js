import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='d-flex flex-column justify-content-center' >
        <Image src="/./Banner.jpeg" alt='banner' width={1000} height={500} />
        <div className='d-flex justify-content-center'>
            <h3>Not sure where to go?</h3>
        </div>
    </div>
  )
}

export default Banner