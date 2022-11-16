import Image from "next/image";
import { useState } from "react";




const Card = ({src, alt, width, height, title , overview ,rating , releaseDate , date = false}) => {
    // const [modal , setModal] = useState(false)
    return (
        <div className="relative h-[550px] w-[400px] rounded-xl" onClick={() => setModal(true)}>
            <Image 
            src={src}
            alt={alt}
            // width={width}
            // height={height}
            layout = 'fill'
            className = 'rounded-xl'
            />
            <div className="absolute bottom-0 pt-14 pb-10 text-white flex flex-col items-center gap-4 w-full bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg px-4 rounded-xl">
                <p className="text-2xl font-roboto text-center font-semibold leading-relaxed tracking-wide">{title}</p>
                <div className={`px-2 py-[2px] text-sm rounded-2xl ${rating > 5 ? 'bg-emerald-50 text-emerald-700' : 'bg-red-200'}`}>
                    {`IMDB ${rating}`}
                </div>
                {
                    date && <p>Release Date : {releaseDate}</p>
                }
                
            </div>
        </div>
    )
}


export default Card;