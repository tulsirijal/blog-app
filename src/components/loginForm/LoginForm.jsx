'use client'
import { login } from '@/lib/action'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import {useFormState} from 'react-dom'
export default function LoginForm() {
    const [state,formAction] = useFormState(login,undefined)
   
  return (
    <form action={formAction} className="w-11/12 space-y-4 p-2">
          <input type="email" placeholder="Email" name="email" className="h-[40px] w-full bg-textSoft text-background p-2 outline-none" />
          <input type="password" placeholder="Password" name="password" className="h-[40px] w-full bg-textSoft text-background p-2 outline-none" />
          <button className="bg-btn text-white px-8 py-4 w-full">Login</button>
          <p className='text-textSoft text-md text-center'>{state?.error}</p>
          <Link href='/register' className='text-sm font-semibold text-white'>Don't have an account ? Register</Link>
    </form>
  )
}
