import Head from "next/head";
import { motion } from "framer-motion";
import BigText from "../components/BigText";
import Card from "../components/Card";



const TopRated = ({topRated}) => {

    console.log(topRated)
    return (
        <div>
        <Head>
        <title>Top Rated</title>
        </Head>
        <div className='pb-[100px]'>
          <BigText 
          title={'Top Rated'}
          color = {'#FF5470'}
          />
          <div className='flex flex-wrap gap-5'>
        {topRated.results.map((item , i) => (
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
    const res = await fetch(` https://api.themoviedb.org/3/movie/top_rated?${API}`)
    const topRated = await res.json()
  
    // Pass data to the page via props
    return { props: { topRated } }
  }

export default TopRated;