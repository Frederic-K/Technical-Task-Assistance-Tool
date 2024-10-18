import { MdCalculate } from "react-icons/md"

const SubmitButton = ({ isSubmitting }) => {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="order-1 flex h-11 w-full items-center justify-center gap-4 rounded-md border border-teal-900 bg-gradient-to-r from-teal-700 via-teal-500 to-teal-700 px-4 py-2 text-lg font-semibold text-zinc-200 hover:from-teal-400 hover:via-teal-700 hover:to-teal-400 sm:order-2"
    >
      {isSubmitting ? (
        <span className="flex items-center justify-center">
          <svg className="mr-3 h-5 w-5 animate-spin" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Calculating...
        </span>
      ) : (
        <>
          <MdCalculate className="size-6" />
          Calculate
        </>
      )}
    </button>
  )
}

export default SubmitButton
