import Link from 'next/link'
import React from 'react'
import { FaFacebookSquare, FaTwitter } from 'react-icons/fa'
import { FaInstagram, FaLinkedin } from 'react-icons/fa6'
import { GiHamburgerMenu } from 'react-icons/gi'

const Footer = () => {
    return (
        <div className='container sm:block flex justify-center items-center flex-col'>
            <div className="py-5  flex justify-between items-center mt-[3rem]">

                <Link href={"/"} className="">
                    <h1 className="text-4xl text-[#0077B5] font-extrabold hover:border-b border-[#0077b5]">Jones.com</h1>
                </Link>

                <div className="hidden md:flex items-center gap-x-6 max-h-fit max-w-fit min-w-fit justify-end">
                    <Link href={"/"} className="text-[#0077B5] max-w-fit min-w-fit max-h-fit cursor-pointer hover:border-b border-[#0077b5]">Home</Link>
                    <Link href={"/buy"} className="text-[#0077B5] max-w-fit min-w-fit max-h-fit cursor-pointer hover:border-b border-[#0077b5]">Buy</Link>
                    <Link href={"/sell"} className="text-[#0077B5] max-w-fit min-w-fit max-h-fit cursor-pointer hover:border-b border-[#0077b5]">Sell</Link>
                    <Link href={"/faq"} className="text-[#0077B5] max-w-fit min-w-fit max-h-fit mr-3 cursor-pointer hover:border-b border-[#0077b5]">FAQ</Link>
                    {/* <button className="text-[#fff] bg-[#0077B5] w-[8rem] h-[2.3rem] rounded-xl">Singup</button> */}
                    <button className="bg-[#0077B5] text-white px-6 py-2 rounded-lg drop-shadow-lg ">Sign up</button>

                </div>

                <GiHamburgerMenu className='md:hidden block text-white' />

            </div>


            <div className="py-5 flex justify-between items-center mt-[0rem] border-t flex-wrap">

                <p className="mt-2 sm:text-start text-center  w-[100%] sm:w-fit">© 2024 Jones.com</p>

                <p className="mt-2 sm:text-start text-center">Do Not Sell or Share My Personal Information</p>



                <div className="flex items-center gap-x-6 max-h-fit min-w-[100%] sm:max-w-fit sm:min-w-fit justify-center sm:justify-end mt-2">
                    <FaFacebookSquare className=' cursor-pointer hover:scale-150' />

                    <FaLinkedin className=' cursor-pointer hover:scale-150' />
                    <FaTwitter className=' cursor-pointer hover:scale-150' />
                    <FaInstagram className=' cursor-pointer hover:scale-150' />
                </div>


            </div>

        </div>
    )
}

export default Footer