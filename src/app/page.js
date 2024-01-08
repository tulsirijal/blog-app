import Image from 'next/image'
import './globals.css'
export default function Home() {

  return (
    <main className=' w-[90%] max-w-[1367px] mx-auto flex flex-col-reverse  md:flex-row md:items-center md:justify-between text-white '>
      <div className='h-full flex flex-col justify-center gap-5'>
        <h1 className='text-6xl font-bold'>
          Creative Thoughts Agency
        </h1>
        <p className='text-[18px] text-textSoft'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  
        </p>
        <div className='space-x-5'>
          <button className='px-6 py-4 bg-btn hover:scale-95 transition-all duration-200'>
            Learn More
          </button>
          <button className='px-6 py-4 bg-white text-bgSoft hover:scale-95 transition-all duration-200'>
            Contact
          </button>
        </div>
        <div className=''>
          <Image src='/brands.png' alt='' width={500} height={500} className='grayscale'/>
        </div>
      </div>
      <div className='mb-5 md:mb-0  relative flex items-center  w-[90%] h-[500px]'>
       <Image src='/hero.gif' alt='' fill />
      </div>
    </main>
  ) 
}
