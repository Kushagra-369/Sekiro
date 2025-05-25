import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Link, Element } from 'react-scroll';
import { get } from 'react-scroll/modules/mixins/scroller';

export default function Navbar() {

  const [text, settext] = useState(false);
  const cross = () => {
    settext(!text);
  }
  return (
    <div className="relative w-full  ">
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <iframe
          className=" h-full w-full  object-cover"
          src="https://www.youtube.com/embed/rXMX4YJ7Lks?autoplay=1&mute=1&loop=1&playlist=rXMX4YJ7Lks&controls=0&showinfo=0&modestbranding=1&rel=0"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>


      <div className=' w-full py-3'>
        <div className='  items-center flex justify-between  ' style={{ background: ' url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJlfDFYGT2-kLi9ky9bwIZk8g5UA5c_1zFKg&s)' }}>
          <div className=' px-10 py-5 font-bold'>
            <h1 className=' text-white text-4xl md:text-6xl'>SEKIRO</h1>
            <h1 className='  text-center md:text-2xl'>SHADOW DIE TWICE</h1>
          </div>

          <div className=' hidden  items-center text-white md:flex justify-center gap-20 text-4xl px-10 '>
            <Link to = "gallery"  smooth={true} duration={600}>
            <a href=""><h1 >Gallery</h1></a>
            </Link>
            <Link to = "get" smooth={true} duration={600} >
                        <a href=""><h1 className=' bg-red-600 p-3'>Get Now</h1></a>
            </Link>
          </div>
          <div onClick={cross} className=' md:hidden block text-white text-2xl px-15 py-10'>
            <div className=' bg-red-600 p-5 w-20  flex justify-center'>
              {text ? <ImCross /> : <FaBars />}
            </div>
          </div>
          {
            text && (
              <ul className=' text-center text-4xl w-fit  md:hidden fixed top-50 h-90  left-10 right-10 text-white p-10 z-40 shadow-lg transition-all duration-300' style={{ background: ' url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJlfDFYGT2-kLi9ky9bwIZk8g5UA5c_1zFKg&s)' }}>
                <Link to = "gallery"  smooth={true} duration={600} onClick={cross}>
            <a href=""><h1 >Gallery</h1></a>
            </Link>
                <div className=' flex justify-center py-20'>
                  <Link to = "get" smooth={true} duration={600} onClick={cross} >
                        <a href=""><h1 className=' bg-red-600 p-3'>Get Now</h1></a>
            </Link>
                </div>
              </ul>
            )
          }

        </div>
      </div>

      {/* <div className=' text-white text-center py-10 px-10 text-2xl'>
        <h1 >FROM THE DEVELOPER OF ELDEN RING ,</h1>
        <h1 className=' py-2'> BLOODBORNE , & DARK SOULS</h1>
        <div className=' flex justify-center py-5'>
          <div className=' h-0.5   w-50 bg-yellow-400'>

          </div>
        </div>
        <div className=' py-10 md:py-15 '>

          <h1 className= ' text-6xl md:text-8xl'>SEKIRO</h1>
          <h1 className=' text-yellow-400 text-center text-2xl md:text-4xl'>SHADOW DIE TWICE</h1>
          <h1 className=' py-10 text-3xl'>Available Now</h1>
        </div>

        <div className=' items-center flex justify-center'>
<Link to = "get" smooth={true} duration={600} >
                        <a href=""><h1 className=' bg-red-600 p-3'>Get Now</h1></a>
            </Link>
        </div>

      </div> */}
    </div>
  )
}
