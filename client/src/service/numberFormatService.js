const formatNumber = (number) => {
  return new Intl.NumberFormat("en-US", {
    useGrouping: true,
    numberingSystem: "latn",
  })
    .formatToParts(number)
    .map(({ type, value }) => {
      if (type === "group") {
        return "'"
      }
      return value
    })
    .join("")
}

export { formatNumber }
