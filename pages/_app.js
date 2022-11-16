import "../styles/globals.css";
import { motion , AnimatePresence } from "framer-motion";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence>
    <motion.div
    initial = 'initialState'
    animate = 'animateState'
    exit = 'exitState'
    className="bg-red-400"
    transition = {{duration : .75}}
    variants={{
      initialState : {
        opacity : 0,
        clipPath: ''
      },
      animateState : {
        opacity : 1,
        clipPath: ''
      },
      exitState : {
        clipPath: ''
      }
    }}
    >
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
