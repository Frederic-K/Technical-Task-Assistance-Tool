import { useOutlet, useLocation } from "react-router-dom"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { AnimatePresence, motion } from "framer-motion"

const RootLayout = () => {
  const location = useLocation()
  const outlet = useOutlet()

  return (
    <>
      <Header />
      <AnimatePresence mode="wait" initial={true}>
        {outlet && <motion.div key={location.pathname}>{outlet}</motion.div>}
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default RootLayout
