import Decimal from "decimal.js"

export function calculateConsistentValue(values) {
  const { initValue, manualValue, addToValue } = values.consistentValue
  let calculatedValue = new Decimal(0)
  let newRemainder = new Decimal(values.remainder)

  if (initValue > 0 && addToValue > 0 && manualValue === 0) {
    calculatedValue = new Decimal(initValue).plus(addToValue)
    newRemainder = calculatedValue
  } else if (initValue > 0 && manualValue > 0) {
    calculatedValue = new Decimal(manualValue)
    newRemainder = new Decimal(manualValue).minus(initValue)
  }

  return {
    calculatedValue: calculatedValue.toNumber(),
    remainder: newRemainder.toNumber(),
  }
}
