'use client'
import { addPost } from '@/lib/action'
import {useFormState} from 'react-dom'
export default function AdminUserForm() {
    const [state,formAction] = useFormState(addPost,undefined)
   
   
  return (
    <form action={formAction} className=" space-y-4 p-2">
          <input type="text" placeholder="Username" name="username" className="h-[40px] w-full bg-textSoft text-background p-2 outline-none" />
          <input type="email" placeholder="Email" name="email" className="h-[40px] w-full bg-textSoft text-background p-2 outline-none" />
          <input type="password" placeholder="Password" name="password" className="h-[40px] w-full bg-textSoft text-background p-2 outline-none" />
          <input type="string" placeholder="Image Url" name="img" className="h-[40px] w-full bg-textSoft text-background p-2 outline-none" />
          <button className="bg-btn text-white px-8 py-4 w-full">Add</button>
          <p className='text-textSoft text-md text-center'>{state?.error}</p>
    </form>
  )
}