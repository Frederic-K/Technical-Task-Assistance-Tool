import DatePicker from "react-datepicker"
import { ErrorMessage } from "formik"
import "react-datepicker/dist/react-datepicker.css"

const CustomDatePicker = ({ selected, onChange, name }) => (
  <>
    <DatePicker
      todayButton="Today"
      shouldCloseOnSelect={true}
      selected={selected}
      onChange={(date) => onChange(date, name)}
      dateFormat="MM/yyyy"
      showMonthYearPicker
      className="h-11 w-full min-w-0 rounded-md border px-4 py-2 dark:bg-zinc-500 dark:text-zinc-200"
    />
    <ErrorMessage
      name={name}
      component="div"
      className="text-sm text-red-500"
    />
  </>
)

export default CustomDatePicker
