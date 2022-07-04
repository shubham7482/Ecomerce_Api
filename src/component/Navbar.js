import Link from "next/link";
import React from "react";
// import Link from 'next/link'
const Navbar=()=>{
    return(
<header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-xl">Tailblocks</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
   <Link href={'/Allprod'}><a class="mr-5 hover:text-gray-900">All Product</a></Link>
   <Link href='/Mens'><a class="mr-5 hover:text-gray-900">Mens-Fashion</a></Link>
   <Link href='/Girls'><a class="mr-5 hover:text-gray-900">Girls-Fashion</a></Link>
   <Link href='/Elect'><a class="mr-5 hover:text-gray-900">Electronic</a></Link>
    </nav>
    <div class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-blue-500 rounded text-base mt-4 md:mt-0">

    <Link href='/Signup'><a class="mr-5 hover:text-gray-900">Sign-up</a></Link>


    </div>
    <div class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-base mt-4 md:mt-0">
    <Link href='/Login'><a class="mr-5 hover:text-gray-900">Login</a></Link>
    </div>
    
  </div>
  
  
</header>
    )
}
export default Navbar