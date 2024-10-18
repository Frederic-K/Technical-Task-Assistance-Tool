import { useSelector, useDispatch } from "react-redux"
import { VscDebugRestart } from "react-icons/vsc"
import { LuListRestart } from "react-icons/lu"
import { IoIosRemoveCircle, IoMdAddCircle } from "react-icons/io"
import { MdKeyboardArrowDown } from "react-icons/md"
import {
  addHS,
  removeHS,
  resetHS,
  updateHSName,
  resetAll,
  setIsHSListOpen,
} from "../../service/slices/hsListSlice"

const HSList = () => {
  const dispatch = useDispatch()
  const { HSs, isHSListOpen } = useSelector((state) => state.HSList)

  return (
    <div className="mx-auto mt-8 max-w-lg rounded-md border border-zinc-400 bg-zinc-400/20">
      <button
        onClick={() => dispatch(setIsHSListOpen(!isHSListOpen))}
        className="flex w-full items-center justify-between p-4"
      >
        <h2 className="text-lg font-semibold">HS List reminder</h2>
        <MdKeyboardArrowDown
          className={`size-6 transform transition-transform duration-300 ${
            isHSListOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isHSListOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="space-y-4 p-4">
          {HSs.map((HS, index) => (
            <div key={index} className="flex items-center space-x-2">
              <input
                type="text"
                value={HS.name}
                onChange={(e) =>
                  dispatch(updateHSName({ index, name: e.target.value }))
                }
                placeholder="HS Name"
                className="flex-1 rounded-md border px-3 py-2 dark:bg-zinc-500 dark:text-zinc-200"
              />
              <button
                onClick={() => dispatch(resetHS(index))}
                className="flex size-8 items-center justify-center rounded-full bg-yellow-500 text-zinc-200 hover:bg-yellow-700"
              >
                <VscDebugRestart className="size-4" />
              </button>
              <button
                onClick={() => dispatch(removeHS(index))}
                className="flex size-8 items-center justify-center rounded-full bg-red-500 text-zinc-200 hover:bg-red-700"
              >
                <IoIosRemoveCircle className="size-4" />
              </button>
            </div>
          ))}
          <div className="flex space-x-2">
            <button
              onClick={() => dispatch(addHS())}
              className="flex size-8 items-center justify-center rounded-md bg-teal-500 hover:bg-teal-700"
            >
              <IoMdAddCircle className="size-4" />
            </button>
            <button
              onClick={() => dispatch(resetAll())}
              className="flex size-8 items-center justify-center rounded-md bg-gray-500 text-zinc-200 hover:bg-orange-700"
            >
              <LuListRestart className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HSList
