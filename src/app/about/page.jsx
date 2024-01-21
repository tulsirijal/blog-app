import Image from "next/image"
export const metadata = {
  title: 'About page | Blog App',
  description: 'About page of Blog App',
}

export default function About() {
    return (
      <div className="w-[90%] max-w-[1367px] mx-auto  flex flex-col-reverse md:flex-row items-center  ">
        <div className="md:flex-1 flex flex-col gap-3 md:gap-7 items-start">
          <h2 className="text-btn font-bold text-xl">About Agency</h2>
          <h1 className="text-white text-2xl md:text-[34px] lg:text-[2.5rem] font-bold">
            We create digital ideas that are bigger,bolder,better and braver.
          </h1>
          <p className="text-white text-[18px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, voluptatem? Nihil quis, at sapiente deleniti nam voluptate officiis quidem vero minima dolorem molestiae reprehenderit nostrum.
          </p>
          <div className="flex flex-col gap-2 md:flex-row md:gap-4 ">
            <div className="">
              <p className="text-btn font-bold text-xl">10 +</p>
              <p className="text-textSoft text-sm">Years of experience</p>
            </div>
            <div>
              <p className="text-btn font-bold text-xl">234 K+</p>
              <p className="text-textSoft text-sm">Projects created</p>
            </div>
            <div>
              <p className="text-btn font-bold text-xl">5 K+</p>
              <p className="text-textSoft text-sm">Services and Plugins</p>
            </div>
            
          </div>          
        </div>
        <div className="md:flex-1 relative w-[90%] h-[500px]">
          <Image src='/about.png' alt="about" fill className="object-contain" />
        </div>
      </div>
    )
  }