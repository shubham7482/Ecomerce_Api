import Link from "next/link";
import React from "react";
export async function getStaticProps(){
    const res=await fetch("http://localhost:3000/api/Setup")
    const data=await res.json()
    return{
        props:{
            Setup:data
        }
    }
}
const Allprod=({Setup})=>{
return(
    <section className="text-gray-600 border-2 body-font">
    <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap justify-center -m-4">
            {Setup.map((Menu)=>{
                return  <div  key={Menu.id} className="w-full p-4 m-5 shadow-lg cursor-pointer lg:w-1/5 md:1/2">
                 <Link href={'/Root/[id]'} as={`/Root/${Menu._id}`}><a className="relative block overflow-hidden rounded">
                     <img alt="ecomerce" className="m-auto  h-[40vh] block" src={Menu.mediaUrl}/>
                    </a></Link> 
                    <div className="mt-4 text-center md:text-left">
                        <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">{Menu.Name}</h3>
                        <h2 className="text-lg font-medium text-gray-900 title-font">{Menu.price}</h2>
            <p className="mt-1">S,M,L,XL,XXL</p>
           
                    </div>
                </div>
            })}
        </div>
    </div>
  </section>


)

}
export default Allprod
