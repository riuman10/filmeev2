import { motion } from "framer-motion";



const BigText = ({title , color}) => {
    return (
        <div className="flex flex-col w-fit mt-6 mb-10">
            <motion.h1 
            initial = {{y : -5 , opacity : 0 }}
            animate = {{y : 0 , opacity : 1}}
            transition = {{duration : .4}}
            className="text-6xl font-slab font-bold z-[100] text-gray-800">
                {title}
            </motion.h1>
            <motion.div 
            initial = {{ opacity : 0 }}
            animate = {{ opacity : 1}}
            transition = {{duration : .6}}
            className="py-4 mt-[-20px] z-0 rounded translate-x-3" 
            style={{backgroundColor : `${color}`}}>
            </motion.div>
        </div>
    )
}

export default BigText;