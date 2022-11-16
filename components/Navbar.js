import Router, { useRouter } from "next/router";
import { useState } from "react";
import { motion , AnimatePresence} from "framer-motion";
import Hamburger from '../components/icons/Hamburger'
import Close from '../components/icons/CloseMenu'


const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", to: "/", id: 1 , color : '#DC143C'},
    { name: "Latest", to: "latest", id: 2 , color : '#a9def9'},
    { name: "Popular", to: "popular", id: 2 ,color : '#d0f4de'},
    { name: "Now Playing", to: "now-playing", id: 2 , color : '#bee1e6'},
    { name: "Top Rated", to: "top-rated", id: 3 , color : '#bee1e6'},
    { name: "Upcoming", to: "upcoming", id: 4 , color : '#84a59d'},
  ];

 
  return (
   <div className="flex flex-col bg-white h-screen fixed shadow-md">
    <div className={`relative text-white mt-3 flex ${open ? 'min-w-[110px]' : 'min-w-[40px]'} max-w-[50px] transition-all 
    duration-[500ms] ease-in-out`}>
        {/* <p className="absolute left-[10px]">X</p> */}
        <div className="absolute left-[10px] cursor-pointer" onClick={() => setOpen(!open)}>
            { open ? <Close /> : <Hamburger /> }
        </div>
    
    </div>
    <AnimatePresence>
    {
        open &&
        <div className="z-[100] mt-[60px] flex flex-col gap-4">
            {links.map((item , i) => (
                <motion.div key={i}
                initial = {{x : -5 , opacity : 0}}
                animate = {{x : 0 , opacity : 1 }}
                transition = {{duration : .5 , delay : i * .1}}
                exit = {{x : 0 , opacity : 0 }}
                className = 'flex items-center gap-2 my-1 px-2'
                >
                    <div className="w-[12px] h-[12px] rounded-full" style={{backgroundColor : '#DC143C' }}></div>
                    <a href= {item.to} className = ' text-gray-700 hover:text-gray-900 text-base font-light'>{item.name}</a>
                </motion.div>
            ))}
        </div>
    }
    </AnimatePresence>
    <div className="absolute left-[10px] bottom-[10px]"> 
        X
    </div>
   </div>
  );
};

export default Navbar;
