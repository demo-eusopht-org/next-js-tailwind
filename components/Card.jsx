import Image from 'next/image'
import React from 'react'

const Card = ({heading="", subHeading="", imgSrc=""}) => {
  return (
    <div className="bg-[#E9EBED66] rounded-3xl p-8 w-full">
    <h1 className="text-4xl text-black font-medium">Transparency first</h1>
    <p className="text-lg text-[#212833] mt-4 font-Inter">No hidden costs. No complicated math. You’ll never be in the dark, whether you’re buying or selling.</p>

    <div className="flex justify-between items-end">
      <button className="hidden sm:inline-block text-[#0077B5] border border-[#0077B5] bg-white w-[8rem] h-[2.3rem] rounded-full">Search Now</button>

      {/* <Image src={Card1} className="h-[10rem] sm:h-[15rem] w-fit" alt="Picture of the author" /> */}
      <Image src={imgSrc} className="h-[10rem] sm:h-[15rem] w-fit" alt="Picture of the author" />
    </div>
    <button className="sm:hidden w-full mt-10 inline-block text-[#0077B5] border border-[#0077B5] bg-white h-[2.3rem] rounded-full">Search Now</button>
  </div>
  )
}

export default Card