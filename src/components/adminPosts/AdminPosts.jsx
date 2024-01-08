'use client'
import { getPosts } from "@/lib/data"
import { deletePost } from "@/lib/action"
import Image from "next/image"

export default async function AdminPosts() {
    const posts = await getPosts()
  return (
    <div className="">
        <h1 className="text-xl font-semibold my-3">Posts</h1>
        <div className="flex flex-col gap-3 ">
            {
                posts.map((post,i)=>(
                    <div className="flex justify-between items-center" key={i}>
                        <div className="flex gap-2 items-center">
                            <Image src={post.img || '/noavatar.png'} width={50} height={50} alt=''  />
                            <span className="font-bold text-md ">{post.title}</span>
                        </div>
                        <form action={deletePost}>
                            <input type="hidden" name="id" value={post.id} />
                            <button className="bg-red px-4 py-1">Delete</button>
                        </form>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
