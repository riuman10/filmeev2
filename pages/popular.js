import Head from "next/head"
import Card from "../components/Card"
import { motion } from "framer-motion"
import BigText from "../components/BigText"




const Popular = ({popular}) => {
    return (
        <div>
        <Head>
        
        </Head>
        <div className=''>
          <BigText 
          title={'Popular'}
          color = {'#E4717A'}
          />
          <div className='flex flex-wrap gap-5'>
        {popular.results.map((item , i) => (
          <motion.div key={i}
          initial = {{x : 5 , opacity : 0 , translateX : -10 }}
        whileInView = {{x : 0 , opacity : 1, translateX : 0 }}
        viewport = {{once : true , amount : .1}}
        transition = {{ease : 'easeOut' , delay : i * .3 , duration : .4}}
          >
            <Card
            src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} 
            title = {item.title}
            overview = {item.overview}
            rating = {item.vote_average}
            />
          </motion.div>
        ))}
        </div>
        </div>
  
      </div>
    )
}

export async function getServerSideProps() {
    let API = 'api_key=3a892626a8d2f75bafc171baaa803033'
    // Fetch data from external API
    const res = await fetch(` https://api.themoviedb.org/3/movie/popular?${API}`)
    const popular = await res.json()
  
    // Pass data to the page via props
    return { props: { popular } }
  }
  

export default Popular;