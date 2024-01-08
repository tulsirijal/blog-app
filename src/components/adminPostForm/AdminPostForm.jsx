'use client'
import { addPost } from '@/lib/action'
import {useFormState} from 'react-dom'
export default function AdminPostForm() {
    const [state,formAction] = useFormState(addPost,undefined)
   
   
  return (
    <form action={formAction} className=" space-y-4 p-2">
          <input type="text" placeholder="Title" name="title" className="h-[40px] w-full bg-textSoft text-background p-2 outline-none" />
          <input type="text" placeholder="Slug" name="slug" className="h-[40px] w-full bg-textSoft text-background p-2 outline-none" />
          <input type="text" placeholder="Image url" name="img" className="h-[40px] w-full bg-textSoft text-background p-2 outline-none" />
          <textarea name="description" placeholder='Description' id="" className='w-full min-h-[100px] outline-none'></textarea>
          <button className="bg-btn text-white px-8 py-4 w-full">Add</button>
          <p className='text-textSoft text-md text-center'>{state?.error}</p>
    </form>
  )
}
