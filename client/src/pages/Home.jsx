// import { NavLink } from "react-router-dom"
// import Title from "../components/PageTitle/PageTtile"
// import { NAV_LINKS } from "../service/constants/navLinks"
// import { motion } from "framer-motion"

// const Home = () => {
//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.3,
//       },
//     },
//   }

//   const linkAnimation = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0 },
//   }

//   return (
//     <main className="mt-12 min-h-screen">
//       <motion.div
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0 }}
//         transition={{
//           enter: { duration: 0.5, ease: "easeOut" },
//           exit: { duration: 0.2, ease: "easeIn" },
//         }}
//       >
//         <h1 className="mb-2 text-center text-4xl font-bold text-orange-700">
//           2TAT
//         </h1>
//         <h2 className="mb-6 text-center font-semibold text-orange-800">
//           Technical Task Assistance Tool
//         </h2>
//       </motion.div>
//       <motion.div
//         className="flex flex-col gap-4"
//         variants={container}
//         initial="hidden"
//         animate="show"
//       >
//         {NAV_LINKS.slice(1).map(({ name, path }) => (
//           <motion.div
//             key={name}
//             variants={linkAnimation}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             transition={{ type: "spring", stiffness: 400, damping: 17 }}
//           >
//             <NavLink to={path}>
//               <Title content={name} />
//             </NavLink>
//           </motion.div>
//         ))}
//       </motion.div>
//     </main>
//   )
// }

// export default Home
import { NavLink } from "react-router-dom"
import Title from "../components/PageTitle/PageTtile"
import { NAV_LINKS } from "../service/constants/navLinks"
import { motion } from "framer-motion"

const Home = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const linkAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <main className="mt-12 min-h-screen w-full overflow-hidden px-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{
          enter: { duration: 0.5, ease: "easeOut" },
          exit: { duration: 0.2, ease: "easeIn" },
        }}
        className="mb-8"
      >
        <h1 className="mb-2 text-center text-4xl font-bold text-orange-700">
          2TAT
        </h1>
        <h2 className="text-center font-semibold text-orange-800">
          Technical Task Assistance Tool
        </h2>
      </motion.div>
      <motion.div
        className="flex flex-col gap-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {NAV_LINKS.slice(1).map(({ name, path }) => (
          <motion.div
            key={name}
            variants={linkAnimation}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="w-full"
          >
            <NavLink to={path} className="block w-full">
              <Title content={name} className="w-full" />
            </NavLink>
          </motion.div>
        ))}
      </motion.div>
    </main>
  )
}

export default Home
