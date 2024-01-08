import Image from "next/image";

export const metadata = {
  title: 'Contact page | Blog App',
  description: 'Contact page of Blog App',
}


export default function Contact() {
  
    return (
      <div className="w-[90%] max-w-[1367px] mx-auto flex flex-col gap-4 md:flex-row items-center justify-between ">
        <div className=" relative w-[90%] md:w-[90%] h-[500px]">
          <Image src='/contact.png' alt="" fill className="object-contain" />
        </div>
        <div className="w-full">
          <form action="" className="flex flex-col gap-3">
            <input type="text" placeholder="Enter your full name" className="h-[40px] w-[100%] p-2 bg-bgSoft text-white rounded outline-none" />
            <input type="email" placeholder="Enter your email " className="h-[40px] w-[100%] p-2 bg-bgSoft text-white rounded outline-none" />
            <input type="number" placeholder="Enter your phone number(Optional)" className="h-[40px] w-[100%] p-2 bg-bgSoft text-white rounded outline-none" />
            <textarea name="" id="" cols="30" rows="10" className="p-2 bg-bgSoft text-white rounded outline-none "></textarea>
            <button className="bg-btn text-white font-semibold px-4 py-2">Send</button>
          </form>
        </div>
      </div>
    )
  }