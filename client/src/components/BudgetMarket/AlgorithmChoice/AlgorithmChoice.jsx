import { Field } from "formik"
import Tooltip from "../../Tooltip/Tooltip"
import { useState } from "react"
import { MdKeyboardArrowDown } from "react-icons/md"

const AlgorithmChoice = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mx-auto mt-8 max-w-lg rounded-md border border-zinc-400 bg-zinc-400/20">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-4"
      >
        <h3 className="text-lg font-semibold text-orange-600">
          Algorithm Selection
        </h3>
        <MdKeyboardArrowDown
          className={`size-6 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="grid grid-cols-1 gap-3 p-4">
          {["simple", "complex"].map((algorithm) => (
            <div key={algorithm} className="flex items-center">
              <Field
                type="radio"
                name="algorithmChoice"
                value={algorithm}
                className="mr-2 h-4 w-4 text-orange-600 focus:ring-orange-500"
              />
              <label className="flex-grow font-medium text-zinc-700 dark:text-zinc-300">
                {algorithm === "simple" ? "Simple" : "Complex"}
              </label>
              <Tooltip
                content={
                  algorithm === "simple"
                    ? "Add all to last year"
                    : "Distribute and add remaining to last year"
                }
                width="w-64"
                position="left"
              >
                <span className="ml-2 cursor-help text-sm text-zinc-500 dark:text-zinc-400">
                  ⓘ
                </span>
              </Tooltip>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AlgorithmChoice
