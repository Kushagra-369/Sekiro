import React from 'react'
import image1 from '../images/sekiroimage.jpg'

export default function Getnow() {
    return (
        <div className='h-500 bg-black md:h-400 px-20 md:flex ' style={{ background: ' url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtxIyER1h58B-98CrYS2DkFXk4G50yeZNV1w&s)', backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: 'center', minHeight: '200vh' }}>

            <div className=' md:w-200 text-white  md:px-70 md:py-50' >
                <h1 className=' w-110 p-3 text-center bg-gray-700 items-center text-6xl '>Available Now</h1>
                <h1 className=' text-4xl py-15  px-10 '>Select an Edition</h1>
                <div className=' px-10'>
                    <select className="text-white text-xl p-3 rounded-md px-5  bg-black w-100 "
                        defaultValue="">
                        <option value="">STANDARD </option>
                        <option value="standard">COLLECTOR'S EDITION</option>
                    </select>
                </div>
                <h1 className=' text-4xl py-15  px-10 '>Select a Platform</h1>
                <div className=' px-10'>
                    <select className="text-white px-5 text-xl p-3 rounded-md  bg-black w-100 "
                        defaultValue="">
                        <option value="">PLAYSTATION 4 </option>
                        <option value="standard">XBOX ONE</option>
                        <option value="standard">PC</option>
                    </select>
                </div>
                <h1 className=' text-4xl py-15  px-10 '>Select a Region</h1>
                <div className=' px-10'>
                    <select className="text-white px-5 text-xl p-3 rounded-md  bg-black w-100 "
                        defaultValue="">
                        <option value=""> INDIA </option>
                        <option value="standard"> UNITED STATES</option>
                        <option value="standard">JAPAN</option>
                        <option value="standard">SERBIA</option>
                        <option value="standard">ITALY</option>
                    </select>
                </div>
                <h1 className=' text-4xl py-15  px-10 '>Select a Retailor</h1>
                <div className=' px-10'>
                    <select className="text-white px-5 text-xl p-3 rounded-md  bg-black w-100 "
                        defaultValue="">
                        <option value=""> AMAZON </option>
                        <option value="standard"> BEST BUY</option>
                        <option value="standard">GAMESTOP</option>
                        <option value="standard">TARGET</option>
                        <option value="standard">WALMART</option>
                    </select>
                </div>
                <div className=' items-center px-10 text-2xl py-20 '>
                    <a href=""><h1 className=' text-white w-100 text-center bg-red-600 p-3'>Get Now</h1></a>

                </div>
            </div>

            <div className="w-[500px] h-[600px]  items-center   md:py-50 object-cover rounded-lg shadow-xl" >
                <img   className="w-full max-w-md h-auto object-contain"  src={image1} alt="" />
                <h1 className=' text-white py-10 text-2xl'>Download required for Bonus Content. Includes new boss challenge modes, player recordings, and unlockable skins. For more information click <a href="" className=' underline'>here</a>.</h1>
            </div>

        </div>
    )
}
