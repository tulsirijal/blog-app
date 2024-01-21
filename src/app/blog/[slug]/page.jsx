import { getPost, getPosts, getUser } from "@/lib/data";
import { connectToDB } from "@/lib/utils";
import Image from "next/image";


export const generateMetadata = async({params})=>{
    const post = await getPost(params.slug)
    return {
        title:post?.title,
        description:post?.description
    }
}

export default  async function page({params}) {
    const {slug} = params

    const post = await getPost(slug)
    const user = await getUser(post?.userId)
    
  return (
    <div className="flex flex-col-reverse md:flex-col lg:flex-row gap-5 w-[90%] max-w-[1367px] mx-auto ">
        <div className="w-[90%] md:w-[600px] h-[calc(100vh-200px)] relative">
            {post?.img ? <Image src={post?.img} alt="post" fill className="" /> : <Image src=
            '/noavatar.png' fill className="" alt="" /> }
        </div>
        <div className="text-white flex flex-col gap-4">
            <h1 className="text-2xl md:text-[36px] font-bold">{post?.title}</h1>
            <div className="flex flex-row gap-4">
                <div className="relative w-[50px] h-[50px] rounded-full">
                    {user?.img ? <Image src={user?.img} fill className="rounded-full object-cover" alt="user" /> : <Image src=
            '/noavatar.png' fill className="" />}
                </div>
                <div>
                    <p className="font-semibold">Author</p>
                    <p>{user?.username}</p>
                </div>
                <div>
                    <p className="font-semibold">Published</p>
                    <p>Jan 4 2024</p>
                </div>
            </div>
            <p>
                {post?.description}
            </p>
        </div>
    </div>
  )
}


