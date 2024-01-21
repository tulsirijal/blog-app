import Image from "next/image";
import Link from "next/link";


export default function PostCard({post}) {
  return (
    <div className="flex flex-col justify-center gap-3 w-full lg:w-[400px]">
        <div className="relative flex flex-row  items-center" >
            <div className="relative w-[90%] h-[300px] ">
                <Image src={post?.img || '/noavatar.img'} alt="post" fill className="object-cover"/>
            </div>
            <p className="text-white rotate-[270deg] text-sm ">Jan 4 2024</p>
        </div>
        <div className="text-white">
            <p className="font-bold text-xl">{post.title}</p>
            <p className="text-textSoft text-[14px]">
                {post.description}
            </p>
            <Link href={`/blog/${post.slug}`} className="text-md underline">Read More</Link>
        </div>
    </div>
  )
}
