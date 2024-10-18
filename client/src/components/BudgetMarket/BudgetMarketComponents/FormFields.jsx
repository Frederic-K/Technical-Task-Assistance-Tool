import { Field, ErrorMessage } from "formik"
import Decimal from "decimal.js"
import Tooltip from "../../Tooltip/Tooltip"
import CustomDatePicker from "../../CustomDatePicker/CustomDatePicker"
import YearlyBudgetInputs from "../../YearlyBudgetInputs/YearlyBudgetInputs"
import { formatNumber } from "../../../service/numberFormatService"

const FormFields = ({ values, setValues }) => {
  const handleDateChange = (field) => (date) => {
    setValues((prevValues) => ({
      ...prevValues,
      HS: {
        ...prevValues.HS,
        [field]: date,
      },
    }))
  }

  return (
    <>
      <section className="mb-4 grid grid-cols-1 gap-3 rounded-md border border-zinc-400 bg-zinc-400/20 p-4 sm:grid-cols-[2fr,1fr]">
        <div className="grid gap-2">
          <div className="grid grid-cols-[auto,1fr] gap-2">
            <div className="flex h-11 w-32 items-center whitespace-nowrap rounded-md border border-zinc-600 bg-zinc-400/20 px-3 py-2 font-semibold text-orange-600 sm:w-full dark:border-zinc-300 dark:bg-zinc-200/10">
              Remainder:
            </div>
            <Field
              name="remainder"
              type="number"
              placeholder="Remainder"
              className="w-full rounded-md border px-3 py-2 dark:bg-zinc-500 dark:text-zinc-200"
            />
          </div>
          <ErrorMessage
            name="remainder"
            component="div"
            className="text-right text-sm text-red-500"
          />
        </div>

        <div className="grid gap-2">
          <div className="grid grid-cols-[auto,1fr] gap-2">
            <div className="flex h-11 w-32 items-center whitespace-nowrap rounded-md border border-zinc-600 bg-zinc-400/20 px-3 py-2 font-semibold text-orange-600 sm:w-full dark:border-zinc-300 dark:bg-zinc-200/10">
              Nb HSs:
            </div>
            <Field
              name="numberOfHSs"
              type="number"
              className="w-full rounded-md border px-3 py-2 dark:bg-zinc-500 dark:text-zinc-200"
            />
          </div>
          <ErrorMessage
            name="numberOfHSs"
            component="div"
            className="text-right text-sm text-red-500"
          />
        </div>
      </section>

      <section className="grid gap-4 rounded-md">
        <div className="grid gap-2 rounded-md border border-zinc-400 bg-zinc-400/20 p-4">
          <h3 className="mb-4 text-lg font-semibold text-orange-600">
            Homogeneous Set Calculation
          </h3>
          <article className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-3">
            <div className="flex h-11 items-center whitespace-nowrap rounded-md border border-zinc-600 bg-zinc-400/20 px-3 py-2 font-semibold text-orange-600 dark:border-zinc-300 dark:bg-zinc-200/10">
              {`HS Budget${values.currentHSNumber > 0 ? ` ${values.currentHSNumber}` : ""}:`}
            </div>
            <div className="grid gap-2">
              <Field
                name="HS.budget"
                type="number"
                placeholder="Enter budget"
                className="h-11 w-full rounded-md border px-3 py-2 dark:bg-zinc-500 dark:text-zinc-200"
              />
              <ErrorMessage
                name="HS.budget"
                component="div"
                className="text-right text-sm text-red-500"
              />
            </div>
            <Tooltip
              content={formatNumber(
                new Decimal(
                  values.HS.calculatedBudget || values.HS.budget || 0,
                ),
              )}
            >
              <div className="flex h-11 items-center justify-start rounded-md border bg-white px-3 font-semibold text-teal-600 dark:bg-zinc-500 dark:text-teal-200">
                {formatNumber(
                  new Decimal(
                    values.HS.calculatedBudget || values.HS.budget || 0,
                  ).toFixed(2),
                )}
              </div>
            </Tooltip>
          </article>
          <article className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-3">
            <div className="flex h-11 items-center rounded-md border border-zinc-600 bg-zinc-400/20 px-3 py-2 font-semibold text-orange-600 dark:border-zinc-300 dark:bg-zinc-200/10">
              Duration:
            </div>
            <CustomDatePicker
              selected={values.HS.startDate}
              onChange={handleDateChange("startDate")}
              name="HS.startDate"
            />
            <CustomDatePicker
              selected={values.HS.endDate}
              onChange={handleDateChange("endDate")}
              name="HS.endDate"
            />
          </article>
          <hr className="border-t border-zinc-400 dark:border-zinc-500" />
          <YearlyBudgetInputs
            startDate={values.HS.startDate}
            endDate={values.HS.endDate}
            budgetPerYear={values.HS.budgetPerYear}
            calculatedBudgetPerYear={values.HS.calculatedBudgetPerYear}
          />
        </div>
      </section>
    </>
  )
}

export default FormFields
