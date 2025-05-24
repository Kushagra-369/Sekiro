import React from 'react'
import { BsAwardFill } from "react-icons/bs";
import { FaTrophy } from "react-icons/fa";

export default function Gameofyear() {
    return (
        <div className=' py-20' style={{ background: ' url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrlCj7BMwT3rOeo0TrkxvvPz9Q4LbUZZmQrQ&s)', backgroundSize: "cover", backgroundRepeat:"no-repeat" }}>
            <div className=' px-25 text-white text-center'>
                <h1>Bloodborne is a trademark of Sony Interactive Entertainment LLC. Dark Souls is a trademark of BANDAI NAMCO Entertainment Inc. Sony and Bandai Namco are not the publisher of SEKIRO: SHADOWS DIE TWICE. Activision has no affiliation with Elden Ring, Bloodborne, or Dark Souls.

                </h1>
            </div>

            <div className=' flex justify-between py-10'>
                <div>

                </div>


                <div className=' text-white px-30'>
                    <h1 className='  text-9xl'>SEKIRO</h1>
                    <h1 className='  text-4xl py-2'>SHADOW DIE TWICE</h1>

                    <div className=' w-100 text-2xl py-30'>
                        <h1>Carve your own clever path to vengeance in the award-winning adventure from developer FromSoftware, creators of Elden Ring, Bloodborne, and the Dark Souls series.</h1>

                    </div>
                    <div className=' text-6xl'>
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
