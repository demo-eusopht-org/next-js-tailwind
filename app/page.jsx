import Image from "next/image";
import Card1 from '../public/asessts/card1.svg'
import Card2 from '../public/asessts/card2.svg'
import Card3 from '../public/asessts/card3.svg'
import Avatar from '../public/asessts/avatar.svg'
import Char from '../public/asessts/char.svg'
import { TiTick } from "react-icons/ti";
import { FaCheck } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Card from "@/components/Card";


export default function Home() {

  const data = [
    { "title": "quicksilverpumping.com" },
    { "title": "sagelandcedars.com" },
    { "title": "cfmasonryspecialists.com" },
    { "title": "smalltownnorth.com" },
    { "title": "judithmayconsulting.com" },
    { "title": "quicksilverpumping.com" },
    { "title": "solespringreflexology.com" },
    { "title": "1abovequality.com" },
    { "title": "hornsremodeling.com" },
  ]


  const userData = [
    {
      "name": "Harriet Zhao",
      "role": "UX/UI Designer",
      "company": "",
      "review": "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      "rating": 5,
      "image": Avatar
    },
    {
      "name": "AJ",
      "role": "UX/UI Designer",
      "company": "",
      "review": "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      "rating": 5,
      "image": Avatar
    },
    {
      "name": "Sami Pershka",
      "role": "Founder",
      "company": "Jointribe",
      "review": "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      "rating": 5,
      "image": Avatar
    },
    {
      "name": "Ronnie Sawyer",
      "role": "CEO",
      "company": "Aries Design",
      "review": "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      "rating": 5,
      "image": Avatar
    }
  ]



  return (


    <div >


      {/* NAVBAR AND HERO  */}
      <div style={{ backgroundImage: `url('/asessts/Header.png')`, backgroundRepeat: "no-repeat", }} className="!-z-20 pb-16 bg-no-repeat bg-auto xl:bg-contain">

          <Navbar />

        {/* HERO  */}

        <div
          style={{
            backgroundImage: 'url(/asessts/images/hero.svg)', // specify the path to your image
            backgroundRepeat: "no-repeat",
            // backgroundSize: 'cover', // to make the image cover the whole div
            backgroundPosition: 'center', // to center the image
          }}
          className="mt-[3.5rem] sm:px-10 px-3  flex justify-center items-center max-h-fit w-[100%] flex-col">
          <h1 className="text-[2rem] capitalize lg:text-[4.75rem] font-bold text-white text-center">Find the perfect web Address <br /> to start your business</h1>
          <div className="max-w-full sm:max-w-fit  min-w-fit bg-[#F6F7F8] max-h-fit flex justify-center items-center mt-10 w-full  rounded-xl sm:rounded-2xl sm:py-3 sm:px-3 px-2 py-2">
            <input type="text" name="" id="" className=" sm:inline-block text-sm w-full sm:w-[12rem] md:min-w-[40%] sm:min-w-fit lg:min-w-[30rem] h-[2.5rem] pl-3 pr-10 border-none outline-none bg-transparent hidden" placeholder="Find domain in the Database" />
            <input type="text" name="" id="" className="flex flex-grow sm:hidden border-none outline-none bg-transparent " placeholder="Find Domain in Database" />
            <button className="flex-grow-0 flex bg-[#0077B5] text-white sm:px-6 px-2 py-2 sm:py-4 rounded-lg sm:rounded-xl drop-shadow-lg text-xs text-nowrap">Search Now</button>
          </div>
        </div>




        {/* CARDS  */}

        <div className="container flex flex-col gap-10 pb-10 z-50 pt-20 sm:pt-48 ">

          <div className=" flex flex-col sm:flex-row sm:justify-evenly items-center gap-10">
            <Card heading="Transparency first" subHeading="No hidden costs. No complicated math. You’ll never be in the dark, whether you’re buying or selling." imgSrc={Card1} />


            <div className="flex flex-col w-full mt-4">
              <h1 className="text-5xl capitalize font-semibold">Let us help you find <br /> your ideal address</h1>
              <p className="text-lg text-[#212833] mt-4 max-w-[30rem]">Do you have an ideal web address in mind, but the domain is  already taken? Our marketplace has millions of registered  internet addresses for sale from all over the world.</p>
            </div>


          </div>


          <div className=" flex flex-col sm:flex-row sm:justify-evenly items-center gap-10">

            {/* <div className="bg-[#E9EBED66] rounded-3xl p-8 sm:min-w-[30rem] sm:max-w-[30rem] mt-4">
            <h1 className="text-xl font-medium">Effortless trading</h1>
            <p className="text-sm text-[#212833] mt-2">By using state of the art technology, domain name trading is super simple thanks to our easy-to-use platform.</p>

            <div className="flex justify-between items-end">
              <button className="text-[#0077B5] border border-[#0077B5] bg-white w-[8rem] h-[2.3rem] rounded-2xl">Search Now</button>

              <Image src={Card2} className="h-[10rem] sm:h-[15rem] w-fit" alt="Picture of the author" />
            </div>
          </div> */}
            <Card heading="Effortless trading" subHeading="By using state of the art technology, domain name trading is super simple thanks to our easy-to-use platform." imgSrc={Card2} />

            {/* 
          <div className="bg-[#E9EBED66] rounded-3xl p-8 sm:min-w-[30rem] sm:max-w-[30rem] mt-4">
            <h1 className="text-xl font-medium">Secure transactions</h1>
            <p className="text-sm text-[#212833] mt-2">Security is important to us. Our fraud prevention team monitors all transactions, we ensure that all payments with us are safe and secure.</p>

            <div className="flex justify-between items-end">
              <button className="text-[#0077B5] border border-[#0077B5] bg-white w-[8rem] h-[2.3rem] rounded-2xl">Search Now</button>

              <Image src={Card3} className="h-[10rem] sm:h-[15rem] w-fit" alt="Picture of the author" />
            </div>
          </div> */}
            <Card heading="Secure transactions" subHeading="Security is important to us. Our fraud prevention team monitors all transactions, we ensure that all payments with us are safe and secure." imgSrc={Card3} />


          </div>

        </div>
      </div>


      {/* PREMIUM DOMAINS  */}
      <div className="container block py-20">
        <div className="  gap-10 flex justify-between items-center flex-col ">

          <h1 className="text-2xl sm:text-5xl font-semibold">Premium Domains</h1>

          <div className="flex flex-col  sm:flex-row justify-between w-full ">
            <div className="flex flex-col justify-start items-start gap-y-8 mt-[2rem] ">
              {data.slice(0, 3).map((i, index) => (
                <div key={index} className="flex gap-x-5 items-center">
                  <div className="min-w-[2.3rem] min-h-[2.3rem] rounded-full  flex justify-center items-center bg-[#0077B5]">
                    <FaCheck className='text-white' />
                  </div>
                  <p className="sm:text-2xl">{i.title}</p>
                </div>

              ))}
            </div>
            <div className="flex flex-col justify-start items-start gap-y-8 mt-[2rem] ">
              {data.slice(3, 6).map((i, index) => (
                <div key={index} className="flex gap-x-5 items-center">
                  <div className="min-w-[2.3rem] min-h-[2.3rem] rounded-full  flex justify-center items-center bg-[#0077B5]">
                    <FaCheck className='text-white' />
                  </div>
                  <p className=" sm:text-2xl">{i.title}</p>

                </div>

              ))}
            </div>
            <div className="flex flex-col justify-start items-start gap-y-8 mt-[2rem] ">
              {data.slice(6, 9).map((i, index) => (
                <div key={index} className="flex gap-x-5 items-center">
                  <div className="min-w-[2.3rem] min-h-[2.3rem] rounded-full  flex justify-center items-center bg-[#0077B5]">
                    <FaCheck className='text-white' />
                  </div>
                  <p className=" sm:text-2xl">{i.title}</p>

                </div>

              ))}
            </div>
          </div>

        </div>
      </div>


      {/* STEPS  */}


      <div style={{ backgroundImage: `url('/asessts/bg.png')` }} className="container bg-no-repeat w-[100vw] bg-cover mt-[3rem] flex justify-center items-center flex-col">

        <h1 className="text-center text-white font-semibold text-5xl pt-16">3 Easy Steps To Buy A Domain</h1>

        <div className=" gap-x-10 gap-y-5 py-10 w-[100%] flex flex-col sm:flex-row justify-between items-end sm:mt-28  ">

          <div className="bg-white rounded-xl sm:rounded-e-none sm:rounded-s-none sm:rounded-tr-3xl sm:rounded-tl-3xl min-w-[20rem] w-full  mt-2 px-5 pb-12">
            <h1 className="text-[#0077B5] font-medium font-Inter text-[6.6rem]">01</h1>
            <h1 className="text-xl font-medium">Get started right <br /> away</h1>
            <p className="text-[##232833] mt-5">On the Jones.com marketplace you can search directly for your desired domain. Create a free user account to either make an offer or use the buy now option to conclude the sale.</p>
          </div>


          <div className="bg-white rounded-xl sm:rounded-e-none sm:rounded-s-none sm:rounded-tr-3xl sm:rounded-tl-3xl min-w-[20rem] w-full  mt-2 px-5 pb-7">
            <h1 className="text-[#0077B5] font-medium font-Inter text-[6.6rem]">02</h1>
            <h1 className="text-xl font-medium">Simply buy</h1>
            <p className="text-[##232833] mt-5">Domain offers come in two types: buy-it-now or negotiation. You can see how your desired domain is sold directly in the results list of your search. One click is enough to start the respective purchase process.</p>
          </div>

          <div className="bg-white rounded-xl sm:rounded-e-none sm:rounded-s-none sm:rounded-tr-3xl sm:rounded-tl-3xl min-w-[20rem] w-full  mt-2 px-5 pb-4 ">
            <h1 className="text-[#0077B5] font-medium font-Inter text-[6.6rem]">03</h1>
            <h1 className="text-xl font-medium">Secure payment</h1>
            <p className="text-[#232833] mt-1">At Jones.com, you can choose between card payments or wire transfer. Our transfer service team will then take care of the rest. This way, payment processing is secure, and the transfer of owner rights is seamless.</p>
          </div>
        </div>

      </div>


      {/* TESTIMONIALS  */}

      <div className="container mt-[4rem] flex justify-center items-center flex-col relative">
        <h1 className="text-2xl sm:text-5xl font-semibold">What Our User Say</h1>
        <p className="text-[#3a4270] mt-2 sm:text-xl">Would you like to add your review? </p>


        <div className="flex gap-x-10 w-[100%]  md:justify-center  items-end mt-[3rem] overflow-x-auto pb-10">

          {
            userData.map((i) => (

              <div key={i.name} className="sm:m-0 m-3 min-w-[15rem]  min-h-[15rem] rounded-md bg-white shadow-md drop-shadow-md px-4 py-10" >

                <div className="flex items-center gap-x-3">
                  <Image src={i.image} alt="card" />
                  <div>
                    <p className="font-medium mb-1 font-Inter text-[#090F47] leading-3">{i.name}</p>
                    <p className="text-[#8184A1] font-Inter text-sm">{i.role}</p>
                  </div>
                </div>
                <p className="text-[#3A4270F2]  text-sm sm:text-base mt-4">{i.review}</p>


                <div className="flex items-center mt-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} color={star <= i.rating ? "#FCC51A" : "#E0E0E0"} size={20} />
                  ))}
                </div>

              </div>
            ))
          }

          <div className="absolute top-[10rem] left-0 sm:left-10 -z-50">
            <Image src={Char} alt="card" />
          </div>

        </div>

      </div>


      {/* FOOTER  */}
      <Footer />



    </div>


  );
}
