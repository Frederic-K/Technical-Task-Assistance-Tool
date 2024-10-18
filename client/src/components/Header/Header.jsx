import { useState, useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import { useOnClickOutside } from "usehooks-ts"
import ThemeToggle from "../ThemeToggle/ThemeToggle"
import BurgerMenu from "./HeaderComponents/BurgerMenu"
import NavLinks from "./HeaderComponents/NavLinks"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)
  const location = useLocation()

  useOnClickOutside(menuRef, () => setIsOpen(false))

  const isHomePage = location.pathname === "/"

  return (
    <div className="relative mx-auto mb-6 flex h-12 items-center justify-between border-b-2 border-zinc-600/30 bg-[url('/images/background/waveBanner-1.webp')] bg-cover bg-center bg-no-repeat dark:bg-zinc-800">
      <section className="group relative my-auto ml-4">
        <Link to="/" className="flex items-center">
          <img
            src="/images/logo/LogoFK-waterpx-red3-100px.png"
            alt="Logo"
            className="mt-1 size-8 cursor-pointer transition-transform hover:rotate-[360deg]"
          />
          <span className="absolute left-full ml-2 whitespace-nowrap font-semibold text-orange-500 opacity-0 transition-opacity group-hover:opacity-100">
            Home
          </span>
        </Link>
      </section>
      {!isHomePage && (
        <>
          <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-xl font-bold text-orange-500 md:hidden">
            2TAT
          </h1>
          <h1 className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform text-xl font-bold text-orange-500 md:block">
            Technical Task Assistance Tool
          </h1>
        </>
      )}
      <section className="flex items-center px-2">
        <ThemeToggle />
        <div ref={menuRef} className="relative flex">
          <BurgerMenu props={{ setIsOpen, isOpen }} />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
            transition={{ duration: 0.3 }}
            className="absolute right-0 top-10 z-50 w-48 overflow-hidden rounded-md bg-zinc-800 py-2 shadow-lg"
          >
            <NavLinks setIsOpen={setIsOpen} />
          </motion.div>
        </div>
      </section>
      {isOpen && <div className="fixed inset-0 z-40 bg-black bg-opacity-50" />}
    </div>
  )
}
export default Header
