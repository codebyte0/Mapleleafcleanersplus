import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa';

const Footer = () => {
    const links = [
        { id: 1, name: 'Home', url: '/' },
        { id: 2, name: 'About', url: '/' },
        { id: 3, name: 'Products', url: '/' },
        { id: 4, name: 'Contact', url: '/' },
    ];

    return (
        <>
            <div className='bg-orange-300 text-black mt-14 rounded-t-3xl'>
                <div data-="fade" className="container">
                    <div className="grid md:grid-cols-3 py-2">
                        {/* Company details */}
                        <div className="py-8 px-4">
                            <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3'>VR World</h1>
                            <p className='text-sm'>
                                Dive into the future with VR World, your gateway to immersive gaming. Experience virtual reality like never before.
                            </p>
                            <br />
                            {/* Contact section */}
                            <div>
                                <div className="flex items-center gap-3">
                                    <FaLocationArrow />
                                    <p>1234 Virtual Lane, California, USA</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaMobileAlt />
                                    <p>+1 (317) 275-9146</p>
                                </div>
                            </div>
                            {/* Social handles */}
                            <div className="flex gap-3 items-center mt-3">
                                <a href="#" aria-label="Facebook">
                                    <FaFacebook className="text-3xl text-black dark:text-white hover:text-primary dark:hover:text-primary duration-300" />
                                </a>
                                <a href="#" aria-label="Instagram">
                                    <FaInstagram className="text-3xl text-black dark:text-white hover:text-primary dark:hover:text-primary duration-300" />
                                </a>
                                <a href="#" aria-label="Twitter">
                                    <FaTwitter className="text-3xl text-black dark:text-white hover:text-primary dark:hover:text-primary duration-300" />
                                </a>
                                <a href="#" aria-label="LinkedIn">
                                    <FaLinkedin className="text-3xl text-black dark:text-white hover:text-primary dark:hover:text-primary duration-300" />
                                </a>
                            </div>
                        </div>
                        {/* Footer Links */}
                        <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                            <div>
                                <div className='py-8 px-4'>
                                    <h1 className='text-xl font-bold mb-3'>Quick Links</h1>
                                    <ul className='space-y-3'>
                                        {links.map((link) => (
                                            <li key={link.id} className='hover:translate-x-1 duration-300'>
                                                <a
                                                    href={link.url}
                                                    className="cursor-pointer text-black dark:text-white hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-primary to-secondary dark:hover:text-transparent dark:hover:bg-gradient-to-r dark:hover:from-primary dark:hover:to-secondary"
                                                >
                                                    {link.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div className='py-8 px-4'>
                                    <h1 className='text-xl font-bold mb-3'>Explore</h1>
                                    <ul className='space-y-3'>
                                        <li className='hover:translate-x-1 duration-300'>
                                            <a href="/products" className="cursor-pointer text-black dark:text-white hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-primary to-secondary dark:hover:text-transparent dark:hover:bg-gradient-to-r dark:hover:from-primary dark:hover:to-secondary">
                                                VR Games
                                            </a>
                                        </li>
                                        <li className='hover:translate-x-1 duration-300'>
                                            <a href="/about" className="cursor-pointer text-black dark:text-white hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-primary to-secondary dark:hover:text-transparent dark:hover:bg-gradient-to-r dark:hover:from-primary dark:hover:to-secondary">
                                                Our Technology
                                            </a>
                                        </li>
                                        <li className='hover:translate-x-1 duration-300'>
                                            <a href="/contact" className="cursor-pointer text-black dark:text-white hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-primary to-secondary dark:hover:text-transparent dark:hover:bg-gradient-to-r dark:hover:from-primary dark:hover:to-secondary">
                                                Support
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div className='py-8 px-4'>
                                    <h1 className='text-xl font-bold mb-3'>Legal</h1>
                                    <ul className='space-y-3'>
                                        <li className='hover:translate-x-1 duration-300'>
                                            <a href="/privacy" className="cursor-pointer text-black dark:text-white hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-primary to-secondary dark:hover:text-transparent dark:hover:bg-gradient-to-r dark:hover:from-primary dark:hover:to-secondary">
                                                Privacy Policy
                                            </a>
                                        </li>
                                        <li className='hover:translate-x-1 duration-300'>
                                            <a href="/terms" className="cursor-pointer text-black dark:text-white hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-primary to-secondary dark:hover:text-transparent dark:hover:bg-gradient-to-r dark:hover:from-primary dark:hover:to-secondary">
                                                Terms of Service
                                            </a>
                                        </li>
                                        <li className='hover:translate-x-1 duration-300'>
                                            <a href="/disclaimer" className="cursor-pointer text-black dark:text-white hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-primary to-secondary dark:hover:text-transparent dark:hover:bg-gradient-to-r dark:hover:from-primary dark:hover:to-secondary">
                                                Disclaimer
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
