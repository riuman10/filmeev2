import Head from "next/head";
import { motion } from "framer-motion";
import BigText from "../components/BigText";
import Card from "../components/Card";
import moment from "moment";



const UpComing = ({upcoming}) => {
    console.log(upcoming)

    const format = 'DD MMM YYYY'
    return (
        <div>
        <Head>
        <title>Upcoming</title>
        </Head>
        <div className='pb-[100px]'>
          <BigText 
          title={'Upcoming'}
          color = {'#8FBC8F'}
          />
          <div className='flex flex-wrap gap-5'>
        {upcoming.results.map((item , i) => (
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
            date = {true}
            releaseDate = {moment(item.release_date).format(format)}
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
    const res = await fetch(` https://api.themoviedb.org/3/movie/upcoming?${API}`)
    const upcoming = await res.json()
  
    // Pass data to the page via props
    return { props: { upcoming } }
  }

export default UpComing;