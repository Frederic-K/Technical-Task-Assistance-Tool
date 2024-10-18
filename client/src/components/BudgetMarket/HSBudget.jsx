import { useFormikContext } from "formik"
import { LuListRestart } from "react-icons/lu"
import toast from "react-hot-toast"
import { motion } from "framer-motion"
import FormFields from "./BudgetMarketComponents/FormFields"
import SubmitButton from "./BudgetMarketComponents/SubmitButton"

const HSBudget = () => {
  const { values, setValues, isSubmitting } = useFormikContext()
  const handleReset = () => {
    toast.success("Form reset successfully!")
  }

  return (
    <section className="mx-auto max-w-lg">
      <FormFields values={values} setValues={setValues} />
      <div className="my-4 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4">
        <motion.button
          type="reset"
          tabIndex={2}
          onClick={handleReset}
          className="order-2 flex h-11 w-full items-center justify-center gap-4 rounded-md border border-zinc-900 bg-gradient-to-r from-zinc-700 via-zinc-500 to-zinc-700 px-4 py-2 text-lg font-semibold text-zinc-200 sm:order-1"
          whileHover={{
            background: "linear-gradient(to right, #a1a1aa, #3f3f46, #a1a1aa)",
            scale: 1.05,
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <LuListRestart className="size-6" /> Reset
        </motion.button>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <SubmitButton isSubmitting={isSubmitting} tabIndex={1} />
        </motion.div>
      </div>
    </section>
  )
}

export default HSBudget
