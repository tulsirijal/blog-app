import PostCard from "@/components/postcard/PostCard";
import { getPosts } from "@/lib/data";


export const metadata = {
  title: 'Blog Page',
  description: 'Blog page description',
}

export default async function Blog() {
    const posts = await getPosts()
    return (
      <div className="w-[90%] max-w-[1367px] mx-auto flex flex-row md:justify-evenly lg:justify-between flex-wrap gap-5 mt-10 mb-5 ">
        {
          posts.map((post,index)=>{
            return <PostCard post={post} key={index} />
          })
        }
      </div>
    )
  }
  