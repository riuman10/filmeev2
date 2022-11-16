import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from '../components/Card'
import BigText from '../components/BigText'
import { motion } from 'framer-motion'



export default function Home({popular}) {
  console.log(popular)
  return (
    <div>
      <Head>
      
      </Head>
      <div className=''>
        {/* <p className="font-roboto text-gray-800 text-4xl py-10">Popular Items</p> */}
        <BigText 
        title={'Home'}
        color = {'#CAE00D'}
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
