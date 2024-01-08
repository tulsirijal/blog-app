'use client'
import {useFormState} from 'react-dom'

import { handleSignUp } from "@/lib/action";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';


export default function RegisterForm() {
    const [state,formAction] = useFormState(handleSignUp,undefined)
    const router = useRouter()
    useEffect(()=>{
        state?.success && router.push('/')
    },[state?.success,router])
  return (
    <form action={formAction} className="w-full space-y-4 flex flex-col ">
          <input type="text" placeholder="Username" name="username" className="h-[40px] w-full bg-bgSoft text-white p-2 outline-none" />
          <input type="email" placeholder="Email" name="email" className="h-[40px] w-full bg-bgSoft text-white p-2 outline-none" />
          <input type="password" placeholder="Password" name="password" className="h-[40px] w-full bg-bgSoft text-white p-2 outline-none" />
          <button className="bg-btn text-white px-8 py-4">Sign up</button>
          <p className='text-textSoft text-md text-center'>{state?.error}</p>
          
          <Link href='/login' className='font-semibold text-center text-sm text-white'>Have an account ? Login</Link>
    </form>
  )
}
