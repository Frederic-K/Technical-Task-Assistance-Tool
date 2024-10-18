import { useSelector, useDispatch } from "react-redux"
import { toggleTheme } from "../../service/slices/themeSlice"
import { FaMoon, FaSun } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"

const ThemeToggle = () => {
  const dispatch = useDispatch()
  const { theme } = useSelector((state) => state.theme)

  return (
    <button
      className="flex items-center justify-center px-2 hover:ring-orange-300/50"
      aria-label="Toggle theme"
      onClick={() => dispatch(toggleTheme())}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-2"
        >
          <motion.span
            className="font-semibold text-zinc-400 hover:text-orange-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {theme === "light" ? "Light" : "Dark"}
          </motion.span>
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 0.3 }}
          >
            {theme === "light" ? (
              <FaSun className="text-lg text-orange-500" />
            ) : (
              <FaMoon className="text-lg text-orange-500" />
            )}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </button>
  )
}

export default ThemeToggle
