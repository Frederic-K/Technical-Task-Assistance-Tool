import { useState } from "react"
import { MdKeyboardArrowDown } from "react-icons/md"
import { motion } from "framer-motion" // Import motion from framer-motion
import Title from "../components/PageTitle/PageTtile"
import CobolTextFormatter from "../components/CobolTextFormatter/CobolTextFormatter"
import ExcelDataFormatter from "../components/ExcelDataFormatter/ExcelDataFormatter"

const DataFormatter = () => {
  const [formatType, setFormatType] = useState("cobolText")
  const [isOpen, setIsOpen] = useState(false)

  const formatOptions = [
    { value: "cobolText", label: "Raw Text Formatter" },
    { value: "excelData", label: "Excel Data Formatter" },
    { value: "anotherFormatType", label: "Another Format Type" },
    { value: "elseFormatType", label: "Else Format Type" },
  ]

  const handleFormatChange = (value) => {
    setFormatType(value)
    setIsOpen(false)
  }

  const renderFormatter = () => {
    switch (formatType) {
      case "cobolText":
        return <CobolTextFormatter />
      case "excelData":
        return <ExcelDataFormatter />
      // Add more cases here for each new formatting type
      default:
        return <CobolTextFormatter />
    }
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
    <motion.div
      className="min-h-screen"
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
      <motion.div variants={itemVariants}>
        <Title content="Data Formatter" />
      </motion.div>

      <motion.div
        className="mx-auto mt-8 max-w-lg rounded-md border border-zinc-400 bg-zinc-400/20"
        variants={itemVariants}
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between p-4"
        >
          <h3 className="text-lg font-semibold text-orange-600">
            {isOpen
              ? "Choose a Format"
              : formatOptions.find((option) => option.value === formatType)
                  ?.label}
          </h3>
          <MdKeyboardArrowDown
            className={`size-6 transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        <motion.div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-60" : "max-h-0"
          }`}
          variants={itemVariants}
        >
          <div className="grid grid-cols-1 gap-3 p-4">
            {formatOptions.map((option) => (
              <motion.div
                key={option.value}
                className="flex items-center"
                variants={itemVariants}
              >
                <input
                  type="radio"
                  id={option.value}
                  name="formatType"
                  value={option.value}
                  checked={formatType === option.value}
                  onChange={() => handleFormatChange(option.value)}
                  className="mr-2 h-4 w-4 text-orange-600 focus:ring-orange-500"
                />
                <label
                  htmlFor={option.value}
                  className="flex-grow font-medium text-zinc-700 dark:text-zinc-300"
                >
                  {option.label}
                </label>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div variants={itemVariants}>{renderFormatter()}</motion.div>
    </motion.div>
  )
}

export default DataFormatter
