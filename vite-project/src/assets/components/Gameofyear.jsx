import React from 'react'
import { BsAwardFill } from "react-icons/bs";
import { FaTrophy } from "react-icons/fa";

export default function Gameofyear() {
    return (
        <div className=' py-20 relative overflow-hidden' >
            <div className="absolute top-0 left-0 w-full h-full md:h-full -z-10">
                <iframe
                    className="w-full h-full md:h-full object-cover"
                    src="https://www.youtube.com/embed/7lkr4TksTX4?autoplay=1&mute=1&loop=1&playlist=7lkr4TksTX4&controls=0&showinfo=0&modestbranding=1"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                ></iframe>
            </div>
            <div className=' px-25 text-white text-center'>
                <h1>Bloodborne is a trademark of Sony Interactive Entertainment LLC. Dark Souls is a trademark of BANDAI NAMCO Entertainment Inc. Sony and Bandai Namco are not the publisher of SEKIRO: SHADOWS DIE TWICE. Activision has no affiliation with Elden Ring, Bloodborne, or Dark Souls.

                </h1>
            </div>

            <div className=' flex justify-between py-10'>
                <div>

                </div>


                <div className=' text-center text-white px-10 md:px-30'>
                    <h1 className=' text-6xl md:text-9xl'>SEKIRO</h1>
                    <h1 className='text-xl  md:text-4xl py-2'>SHADOW DIE TWICE</h1>

                    <div className=' w-full text-2xl text-center md:block py-15 md:py-30'>
                        <h1>Carve your own clever path to vengeance in the award-winning adventure from developer FromSoftware, creators of Elden Ring, Bloodborne, and the Dark Souls series.</h1>

                    </div>
                    <div className='text-4xl md:text-6xl'>
                        <h1>GAME OF THE YEAR</h1>
                    </div>

                    <div className=' text-6xl flex justify-around text-cyan-400 py-20'>
                        <BsAwardFill />
                        <FaTrophy />


                    </div>
                </div>
            </div>
        </div>
    )
}
