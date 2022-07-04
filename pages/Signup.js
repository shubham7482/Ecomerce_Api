import React,{useState} from 'react' 
import Link from 'next/link'
import { useRouter } from 'next/router'
const Signup=()=>{
    const router=useRouter()
    const [name,setname]=useState('')
    const [email,setemail]=useState('' )
    const [phone,setphone]=useState('')
const [password,setpassword]=useState('')


const userSignUp=async(e)=>{
    e.preventDefault()
    const res=await fetch('http://localhost:3000/api/Signup',{
        method:'POST', 
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            name,email,phone,password
        })
    })
    const res2=await res.json()
    if(res2.error){
        console.log('error')
    }else{
        console.log('signup sucess')
        router.push('/Login')
    }
}
    return(
    //   <!-- component -->
<div class="bg-grey-lighter min-h-screen flex flex-col">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                    <form onSubmit={(e)=>userSignUp(e)} >
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder=" Name"
                        value={name}
                        onChange={(e)=>setname(e.target.value)}
                         />

                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" 
                        value={email}
                        onChange={(e)=>setemail(e.target.value)}
                        />
                      
                       <input 
                        type= "text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="Number"
                        placeholder="Phone"
                    value={phone}
                    onChange={(e)=>setphone(e.target.value)}
/>

                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password"
                        value={password} 
                            onChange={(e)=>setpassword(e.target.value)}

                        />
                   
            
                    <button
                        type="submit"
                        class="w-full text-center py-3 rounded bg-green border-2    text-black hover:bg-blue-600  focus:outline-none my-1"
                    >Signup</button>          
                </form>

                    <div class="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div class="text-grey-dark mt-6">
                    Already have an account? 
              <Link href="/Login"><a class="no-underline border-b border-blue text-blue" >
                        Login
                    </a></Link> 
                     
                </div>
            </div>
        </div>
    )
}

export default Signup