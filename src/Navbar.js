import React, { useState } from 'react'
import flower from './img/flower.png'
import colored from './img/coloredFlower.png'
import bars from './img/bars.png'
import xmark from './img/xmark.png'
import arrow from './img/arrow-right.png'
import plus from './img/plus.png'
import minus from './img/minus.png'
import { motion } from 'framer-motion'

function Navbar({ open, setOpen }) {
  let Links = [
    { name: 'Home', hasSubLinks: false, link: '/' },
    {
      name: 'About us',
      hasSubLinks: true,
      link: '/',
      subLinks: [
        {
          name: 'Our story',
          link: '/',
        },
        {
          name: 'Our mission',
          link: '/',
        },
        {
          name: 'Office locations',
          link: '/',
        },
      ],
    },
    {
      name: 'Our team',
      hasSubLinks: true,
      link: '/',
      subLinks: [
        {
          name: 'Team 1',
          link: '/',
        },
      ],
    },
    { name: 'Careers', hasSubLinks: false, link: '/' },
    { name: 'Contacts', hasSubLinks: false, link: '/' },
  ]

  const [openSublinks, setSublinks] = useState(false)
  const [openedIndex, setOpenedIndex] = useState(0)

  const getIndexAndSublink = (index) => {
    setSublinks(!openSublinks)
    setOpenedIndex(index)
  }

  const findIndex = Links.find((val, index) => {
    return index === openedIndex ? { ...val } : null
  })

  console.log('findIndex', findIndex)

  return (
    <div className='relative top-0 left-0 h-screen'>
      <div className='items-center py-4 mx-auto lg:flex lg:px-10 lg:justify-between'>
        <div className='flex items-center pl-6'>
          <img className='py-8 cursor-pointer' src={open ? colored : flower} />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className='absolute right-8 top-10 lg:hidden'
        >
          {open ? (
            <img
              className='flex items-center mt-3 cursor-pointer'
              src={xmark}
            />
          ) : (
            <img className='flex items-center mt-2 cursor-pointer' src={bars} />
          )}
        </div>
        <ul
          className={`lg:flex lg:items-center absolute lg:static lg:z-auto left-0 w-full lg:justify-between lg:pl-0 pl-6 ease-in lg:w-auto ${
            open ? 'top-30' : 'top-[-490px]'
          }`}
        >
          {Links.map((Link, index) => {
            return (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 5 }}
                key={Link.name}
              >
                <li className='py-4 text-3xl border-b-2 lg:my-0 my-7 lg:border-b-0 mr-7'>
                  <div className='flex justify-between'>
                    <div>
                      <a
                        className='text-gray-100 hover:text-blue-400'
                        href={Link.link}
                      >
                        {Link.name}
                      </a>
                    </div>
                    <div className='block lg:hidden'>
                      {Link.hasSubLinks ? (
                        <div onClick={() => getIndexAndSublink(index)}>
                          {openSublinks && openedIndex === index ? (
                            <img src={minus} />
                          ) : (
                            <img src={plus} />
                          )}
                        </div>
                      ) : (
                        <img src={arrow} />
                      )}
                    </div>
                  </div>
                  {Link.hasSubLinks ? (
                    <div className='block lg:hidden'>
                      {openSublinks && openedIndex === index ? (
                        <div className='py-4 pl-3 '>
                          {findIndex.subLinks.map((link, index) => {
                            return (
                              <div
                                className='flex items-center justify-between py-2'
                                key={index}
                              >
                                <div className='text-base text-white'>
                                  {link.name}
                                </div>
                                <div>
                                  <img src={arrow} />
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      ) : null}
                    </div>
                  ) : null}
                </li>
              </motion.div>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
