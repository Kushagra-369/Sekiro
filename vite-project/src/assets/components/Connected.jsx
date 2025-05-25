import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

export default function Connected() {
    return (
        <div style={{background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsvhks2HMpQdxlWoLjdh9Gi7iBbCCKRXSetw&s)' , backgroundSize:"cover" , backgroundRepeat:"no-repeat" ,  minHeight: '100vh'}}>

            <div className=' text-white font-bold py-20'>
                <h1 className=' flex justify-center text-4xl'>Stay Connected</h1>
                <div className=' flex justify-center'>
                    <div className=' text-4xl py-10 grid grid-cols-1 gap-10' >
                    <a href="https://www.facebook.com/sekirothegame" className=' bg-red-600 p-5 flex gap-5 items-center py-5'><FaFacebook /> <h1>Facebook</h1></a>
                     <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsekirothegame" className='bg-red-600 p-5 flex gap-5 items-center py-5'><FaTwitter /><h1>Twitter</h1></a>
                     <a href="https://www.instagram.com/sekirothegame/#" className='bg-red-600 p-5 flex gap-5 items-center py-5'><FaInstagram /><h1>Instagram</h1></a>
                     <a href="https://www.youtube.com/channel/UCFlG1-ulYM9smpUYWlgOtBg" className='bg-red-600 p-5 flex gap-5 items-center py-5'><FaYoutube />Youtube</a>


                </div>
                </div>
            </div>
        </div>
    )
}
