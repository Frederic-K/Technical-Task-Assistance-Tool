import { useState } from "react"

const Tooltip = ({ children, content, width = "w-36", position = "top" }) => {
  const [isVisible, setIsVisible] = useState(false)

  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-1",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-1",
    left: "right-full top-1/2 -translate-y-1/2 mr-1",
    right: "left-full top-1/2 -translate-y-1/2 ml-1",
  }

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      <div
        className={`absolute z-10 rounded-md border border-zinc-700 bg-zinc-200 px-3 py-2 text-sm shadow-lg transition-opacity duration-300 ease-in-out dark:bg-zinc-700 dark:text-zinc-200 ${
          isVisible ? "opacity-100" : "pointer-events-none opacity-0"
        } ${width} ${positionClasses[position]}`}
      >
        {content}
      </div>
    </div>
  )
}

export default Tooltip
