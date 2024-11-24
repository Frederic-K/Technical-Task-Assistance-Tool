import { useState, useEffect } from "react"
import { Toaster } from "react-hot-toast"
import { ToggleSwitch } from "flowbite-react"
import { motion } from "framer-motion"
import toast from "react-hot-toast"
import { LuListRestart } from "react-icons/lu"

const ExcelDataFormatter = () => {
  const [inputText, setInputText] = useState("")
  const [formattedText, setFormattedText] = useState("")
  const [autoFormat, setAutoFormat] = useState(true)
  const [debouncedText, setDebouncedText] = useState("")

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedText(inputText)
    }, 300)

    return () => clearTimeout(timer)
  }, [inputText])

  useEffect(() => {
    if (autoFormat) {
      formatText(debouncedText)
    }
  }, [debouncedText, autoFormat])

  const handleInputChange = (e) => {
    setInputText(e.target.value)
  }

  const resetForm = () => {
    setInputText("")
    setFormattedText("")
    toast.success("Form reset successfully!")
  }

  const formatText = (text) => {
    // Split the input by newlines and/or tabs
    const cells = text.split(/[\n\t]+/)
    // Remove any empty cells and trim whitespace
    const cleanedCells = cells
      .map((cell) => cell.trim())
      .filter((cell) => cell !== "")
    // Join the cells with semicolons
    const formatted = cleanedCells.join(";")
    setFormattedText(formatted)
  }

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(formattedText)
      .then(() => toast.success("Formatted text copied to clipboard!"))
      .catch((err) => console.error("Failed to copy text: ", err))
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <motion.main
      className="mx-auto min-h-screen max-w-lg px-4"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
          },
        },
      }}
    >
      <Toaster position="bottom-left" reverseOrder={false} />
      <motion.div variants={itemVariants}>
        <div className="mb-1 mt-4">
          <label className="mb-2 block text-xl font-semibold text-orange-700">
            Paste your Excel data here (single line or column):
          </label>
          <textarea
            className="h-40 w-full rounded border-2 border-zinc-300 p-2 font-mono dark:bg-zinc-300 dark:text-zinc-700"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Paste your Excel data here. Each cell should be on a new line or separated by tabs."
          />
        </div>
        <div className="flex h-11 items-center justify-end">
          {!autoFormat && (
            <button
              className="mr-auto flex h-11 items-center justify-center rounded-md border border-orange-900 bg-gradient-to-r from-orange-700 via-orange-500 to-orange-700 px-4 py-2 text-lg font-semibold text-zinc-100 hover:from-orange-400 hover:via-orange-700 hover:to-orange-400"
              onClick={() => formatText(inputText)}
            >
              Format Text
            </button>
          )}
          <div className="flex items-center">
            <span className="mr-2 text-zinc-500 dark:text-zinc-300">
              Auto Format: {autoFormat ? "ON" : "OFF"}
            </span>
            <ToggleSwitch checked={autoFormat} onChange={setAutoFormat} />
          </div>
        </div>
      </motion.div>
      <motion.div variants={itemVariants}>
        <div className="mb-1 mt-4">
          <label className="mb-2 block text-xl font-semibold text-orange-700">
            Formatted text:
          </label>
          <textarea
            className="h-20 w-full rounded border-2 border-zinc-300 p-2 font-mono dark:bg-zinc-300 dark:text-zinc-700"
            value={formattedText}
            readOnly
          />
        </div>
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="flex items-center justify-between"
      >
        <motion.button
          className="flex h-11 items-center justify-center rounded-md border border-teal-900 bg-gradient-to-r from-teal-700 via-teal-500 to-teal-700 px-4 py-2 text-lg font-semibold text-zinc-100 hover:from-teal-400 hover:via-teal-700 hover:to-teal-400"
          onClick={copyToClipboard}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          Copy Formatted Text
        </motion.button>
        <motion.button
          className="flex h-11 items-center justify-center gap-2 rounded-md border border-zinc-900 bg-gradient-to-r from-zinc-700 via-zinc-500 to-zinc-700 px-4 py-2 text-lg font-semibold text-zinc-100 hover:from-zinc-400 hover:via-zinc-700 hover:to-zinc-400"
          onClick={resetForm}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <LuListRestart className="size-6" /> Reset
        </motion.button>
      </motion.div>
    </motion.main>
  )
}

export default ExcelDataFormatter
