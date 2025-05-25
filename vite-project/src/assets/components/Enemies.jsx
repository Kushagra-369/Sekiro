import React from 'react';
import '../components/Scroll.css'


export default function Enemies() {
    const data = [
        { id: 1, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS27IQOIL1InfriPw-y7Z09J0qOUyB9bE16hQ&s", name: "OGRE" , link:"https://youtu.be/ygg_GBsoIQ4"},
        { id: 2, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxHmu6--wQFmWltscreg5g2gaqyWu-qPgmjA&s", name: "GENERAL TENZEN" , link:"https://youtu.be/p3CEBQOx0Iw" },
        { id: 3, img: "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/07/sekiro-myths-Great-Serpent.jpg", name: "GREAT SERPENT", link:"https://youtu.be/GU6KVK7nHBk" },
        { id: 4, img: "https://sekiroshadowsdietwice.wiki.fextralife.com/file/Sekiro-Shadows-Die-Twice/lady-butterfly-gallery-1-wiki-guide.jpg", name: "LADY BUTTERFLY" , link:"https://youtu.be/dR3k2Fonmrs"},
        { id: 5, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtZYMsCU16KoRnexCJlcia9TLrmfVBgnaw3g&s", name: "CORRUPTED MONK", link:"https://youtu.be/1e3tZlpMGbM" },
        { id: 6, img: "https://i.ytimg.com/vi/qAKhMT6cD4I/maxresdefault.jpg", name: "JUZOU THE DRUNKARD" , link:"https://youtu.be/EmSGoIp8HfE?feature=shared"},
        { id: 7, img: "https://i.pinimg.com/736x/f0/66/ef/f066ef400ab1391a519f87ac78c159bf.jpg", name: "GYOUBU ONIWA", link:"https://youtu.be/ofwS1-jsd18" },
        { id: 8, img: "https://cdn.mos.cms.futurecdn.net/49GtAk3j5ATnQoYc6q2oaj.jpg", name: "GUARDIAN APE" , link:"https://youtu.be/LHbiPiIneA4?feature=shared"},
        { id: 9, img: "https://i.redd.it/n6bh4mkexba81.jpg", name: "GENICHIRO", link:"https://youtube.com/shorts/m2JlB9Pxjio?feature=shared" },
        { id: 10, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh2MweKJvBUulk4c9Rw96fo2BaSfR5USZiWA&s", name: "ISSHIN", link:"https://youtu.be/tcUjSYxi2gc?feature=shared" },
    ];

    return (
        <div className=' w-full min-h-screen' style={{ background: ' url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJlfDFYGT2-kLi9ky9bwIZk8g5UA5c_1zFKg&s)', backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
            <div className=' flex justify-center py-30 text-white'>
                <h1 className=' text-4xl md:text-6xl bg-black p-5'>Enemy Featurettes</h1>
            </div>
            <div className="flex overflow-x-auto space-x-4 px-4 pb-4" style={{ scrollBehavior: "smooth" }}>
                {data.map(enemy => (
                    <div key={enemy.id} className="flex-shrink-0 text-center">
                        <a href={enemy.link}><img src={enemy.img} alt={`Enemy ${enemy.id}`} className="h-100 w-100 mx-auto rounded hover:scale-105 transition-all duration-300" /></a>
                        <p className="text-white font-bold mt-2 text-2xl md:text-xl">{enemy.name}</p>
                        
                    </div>
                ))}
            </div>
        </div>
    );
}
