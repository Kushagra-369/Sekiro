import React from 'react'
import '../components/Scroll.css'
export default function Gallery() {

  const data =[
    { id:1 , img:"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/814380/ss_0f7b0f8ed9ffc49aba26f9328caa9a1d59ad60f0.1920x1080.jpg?t=1726158438"},
    { id:2 , img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmAk4SeJHwg2zlBx6QU-jgXA3sgY-aHXBpLg&s"},
    { id:3 , img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLej2tYTCobEKd7-g__XCVIzbOsgEDJv7MXw&s"},
    { id:4 , img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN00xuQWRhK-Tn6vGUJ3VAJxZF09AWo4B5aQ&s"},
    { id:5 , img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxUyz0LLF8LP1pgtO6JrA7Y_c2cAVa8oZK6A&s"},
    { id:6 , img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLPsEXQ3tdyhv5SYdXqDZ9KtGNxhMl5BUn_Q&s"},
    { id:7 , img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQVE3eChPmHjFHJBVSI-2Rgai8x-9UQLsXaw&s"},
    { id:8 , img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNPXEbck0jsRa-SutS_P9eH4_0FjC9WzufcQ&s"},
    { id:9 , img:"https://img.redbull.com/images/c_crop,w_1920,h_960,x_0,y_0/c_auto,w_1200,h_630/f_auto,q_auto/redbullcom/2019/04/05/1f2d4306-ec6d-4924-8671-bfbe10be55ee/sekiro-shadows-die-twice-wolf-boss"},
    { id:10 , img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEVC-QOSf6U2mIylu5MK4-qV6bhM3ss5qavg&s"},
  ]
  return (
    <div className=' w-full min-h-screen' >
            <div className=' bg-blue-950 flex justify-center py-20 text-white'>
                <h1 className='text-4xl md:text-6xl bg-black p-5'>GALLERY </h1>
            </div>
            <div className="scroll-container " style={{scrollBehavior:"smooth" , background: ' url(https://c4.wallpaperflare.com/wallpaper/310/302/397/sekiro-shadows-die-twice-samurai-video-games-video-game-art-watermarked-hd-wallpaper-preview.jpg)' , backgroundSize:"cover" , backgroundRepeat:"no-repeat" ,  minHeight: '100vh'}}>
            {data.map(enemy => (
                <img key={enemy.id} src={enemy.img} alt={`Enemy ${enemy.id}`} className="h-100 md:h-150 w-100 md:w-250 " />
            ))}
        </div>
        </div>
  )
}
