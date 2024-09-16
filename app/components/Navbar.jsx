"use client"
import React from 'react'
import logo from "../assets/logo.png"
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NavLinks = [
    { id: 2, name: 'About', url: '#about' },
    { id: 3, name: 'Services', url: '#services' },
    { id: 4, name: 'testimonials', url: '#testimonials' },
    { id: 5, name: 'Book now', url: '#booknow' },
]

const Navbar = () => {
    const [showMenu, setshowMenu] = useState(false)
    const toggleMenu = () =>{
        setshowMenu(!showMenu)
    }
    return (
        <div className=' dark:text-white duration-300 relative z-10' >
            <div className="container py-2 md:py-0">
                <div className="flex justify-start items-center gap-[10rem] sm:gap-[16rem] md:gap-[20rem] lg:gap-[25rem]">
                    {/* logo section */}
                    <div className="flex item-center gap-3 mt-2">
                        <Image src={logo} alt="logo" className="h-13 w-14" height={100} width={100}/>
                        <Link href={"/"} className="text-lg mt-2">
                            Maple leaf Cleaners plus
                        </Link>
                    </div>
                    {/* desktop menu section  */}
                    <div>
                        <nav className='md:block hidden'>
                            <ul className='flex items-center gap-8'>
                                {
                                    NavLinks.map(({ id, url, name }) => {
                                        return (
                                            <li key={id} className='py-4'>
                                                <a className='text-[#3a3939] text-base font-medium hover:text-primary hover:border-b-2 hover:border-blue-500 transition-colors duration-500 py-2 ' href={url}>{name}</a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </nav>
                        {/* Mobile View Sidebar  */}
                        <div className='md:hidden block '>
                            {  showMenu ? (<HiMenuAlt1 className='cursor-pointer' size={30} onClick={toggleMenu}/>) : (<HiMenuAlt3 className='cursor-pointer' size={30} onClick={toggleMenu}/>) }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
