import React, { useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import arrow from './img/yellow.png'
import { motion } from 'framer-motion'

function App() {
  const [open, setOpen] = useState(false)
  return (
    <div
      className={
        open
          ? 'bg-center bg-no-repeat bg-cover bg-midasHand bg-blend-overlay bg-[#524949]'
          : 'bg-center bg-no-repeat bg-cover bg-midasHand'
      }
    >
      <div className='relative'>
        <Navbar open={open} setOpen={setOpen} />

        {!open ? (
          <div className='max-w-[768px] mx-auto p-10 absolute bottom-0'>
            <div className='flex justify-center items-center w-[323px] py-2 my-2'>
              <div className='text-[40px] font-bold text-white text-normal leading-[40px]'>
                THE FUTURE OF PROSTHETICS IS HERE
              </div>
            </div>
            <div className='flex items-center'>
              <img src={arrow} />
              <h3 className='text-white px-2 text-[15px] leading-[24px] font-bold'>
                Take a tour
              </h3>
            </div>
          </div>
        ) : null}
      </div>

      {/* <Footer /> */}
    </div>
  )
}

export default App
