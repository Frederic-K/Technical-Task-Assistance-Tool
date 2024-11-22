import { useState } from "react"
import { MdKeyboardArrowDown } from "react-icons/md"
import Title from "../components/PageTitle/PageTtile"
import CobolTextFormatter from "../components/CobolTextFormatter/CobolTextFormatter"

const DataFormatter = () => {
  const [formatType, setFormatType] = useState("cobolText")
  const [isOpen, setIsOpen] = useState(false)

  const formatOptions = [
    { value: "cobolText", label: "Cobol Text Formatter" },
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
      // Add more cases here for each new formatting type
      default:
        return <CobolTextFormatter />
    }
  }

  return (
    <div>
      <div>
        <Title content="Data Formatter" />
      </div>

      <div className="mx-auto mt-8 max-w-lg rounded-md border border-zinc-400 bg-zinc-400/20">
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
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-60" : "max-h-0"
          }`}
        >
          <div className="grid grid-cols-1 gap-3 p-4">
            {formatOptions.map((option) => (
              <div key={option.value} className="flex items-center">
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
              </div>
            ))}
          </div>
        </div>
      </div>

      {renderFormatter()}
    </div>
  )
}

export default DataFormatter
