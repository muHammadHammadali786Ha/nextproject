'use client'
// import Image from "next/image"
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [stick ,setstick] = useState(false);

  useEffect(()=>{
    const handleScroll=()=>{
      if (window.scrollY>0) {
          setstick(true);
      }
      else{
        setstick(false)
      }
      // window.scrollY()
      window.addEventListener('scroll',handleScroll);
      return()=>{
        window.removeEventListener('scroll',handleScroll);
      }
    }
  },[]);
  return (
      <div>
        <header class={`text-gray-600 body-font ${stick?"fixed shadow-md bg-base-200":""}`}>
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <Link href={'/'}>
      <span class="ml-3 text-xl">codewear.com</span>
      </Link>
    </a>
    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
     <Link href={'/tshirt'}> <a class="mr-5 hover:text-gray-900">Tshirt</a> </Link>
     <Link href={'/mugs'}> <a class="mr-5 hover:text-gray-900">Mugs</a> </Link>
     <Link href={'/toys'}> <a class="mr-5 hover:text-gray-900">Toys</a> </Link>
      
      <a class="mr-5 hover:text-gray-900">Help</a>
    </nav>
    <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Cart
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
      </div>
  )
}

export default Navbar;
