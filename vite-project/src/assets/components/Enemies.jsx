import React from 'react';
import '../components/Scroll.css'


export default function Enemies() {
    const data = [
        { id: 1, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS27IQOIL1InfriPw-y7Z09J0qOUyB9bE16hQ&s" },
        { id: 2, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxHmu6--wQFmWltscreg5g2gaqyWu-qPgmjA&s" },
        { id: 3, img: "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/07/sekiro-myths-Great-Serpent.jpg" },
        { id: 4, img: "https://sekiroshadowsdietwice.wiki.fextralife.com/file/Sekiro-Shadows-Die-Twice/lady-butterfly-gallery-1-wiki-guide.jpg" },
        { id: 5, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtZYMsCU16KoRnexCJlcia9TLrmfVBgnaw3g&s" },
        { id: 6, img: "https://i.ytimg.com/vi/qAKhMT6cD4I/maxresdefault.jpg" },
        { id: 7, img: "https://i.pinimg.com/736x/f0/66/ef/f066ef400ab1391a519f87ac78c159bf.jpg" },
        { id: 8, img: "https://cdn.mos.cms.futurecdn.net/49GtAk3j5ATnQoYc6q2oaj.jpg" },
        { id: 9, img: "https://i.redd.it/n6bh4mkexba81.jpg" },
        { id: 10, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh2MweKJvBUulk4c9Rw96fo2BaSfR5USZiWA&s" },
    ];

    return (
        <div className=' w-full min-h-screen' style={{ background: ' url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJlfDFYGT2-kLi9ky9bwIZk8g5UA5c_1zFKg&s)' , backgroundSize:"cover" , backgroundRepeat:"no-repeat" }}>
            <div className=' flex justify-center py-30 text-white'>
                <h1 className=' text-4xl md:text-6xl bg-black p-5'>Enemy Featurettes</h1>
            </div>
            <div className="scroll-container "  style={{scrollBehavior:"smooth"}}>
            {data.map(enemy => (
                <img key={enemy.id} src={enemy.img} alt={`Enemy ${enemy.id}`} className=" h-75 md:h-100 w-75 md:w-100 " />
            ))}
        </div>
        </div>
    );
}
