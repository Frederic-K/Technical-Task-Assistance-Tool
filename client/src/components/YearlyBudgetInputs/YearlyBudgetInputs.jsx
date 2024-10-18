import { Field } from "formik"
import Decimal from "decimal.js"
import Tooltip from "../Tooltip/Tooltip"
import { formatNumber } from "../../service/numberFormatService"

const YearlyBudgetInputs = ({
  startDate,
  endDate,
  budgetPerYear,
  calculatedBudgetPerYear,
}) => {
  if (!startDate || !endDate) return null

  const years = Array.from(
    { length: endDate.getFullYear() - startDate.getFullYear() + 1 },
    (_, i) => startDate.getFullYear() + i,
  )

  return (
    <article className="grid gap-2">
      {years.map((year, yearIndex) => (
        <div
          key={yearIndex}
          className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-3"
        >
          <div className="flex h-11 items-center whitespace-nowrap rounded-md border border-zinc-600 bg-zinc-400/20 px-3 py-2 font-semibold text-orange-600 dark:border-zinc-300 dark:bg-zinc-200/10">
            Budget {year}
          </div>
          <Field
            name={`HS.budgetPerYear.${yearIndex}`}
            type="text"
            inputMode="decimal"
            placeholder={`Budget for ${year}`}
            value={budgetPerYear[yearIndex] || 0}
            className="h-11 w-full rounded-md border px-3 py-2 dark:bg-zinc-500 dark:text-zinc-200"
          />
          <Tooltip
            content={formatNumber(
              new Decimal(calculatedBudgetPerYear?.[yearIndex] || 0),
            )}
          >
            <div className="flex h-11 w-full items-center justify-start rounded-md border bg-white px-3 py-2 font-semibold text-teal-600 dark:bg-zinc-500 dark:text-teal-200">
              {formatNumber(
                new Decimal(calculatedBudgetPerYear?.[yearIndex] || 0).toFixed(
                  2,
                ),
              )}
            </div>
          </Tooltip>
        </div>
      ))}
    </article>
  )
}

export default YearlyBudgetInputs
