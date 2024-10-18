import { Formik, Form } from "formik"
import { calculateBudget } from "../service/budgetCalculationService"
import { Toaster } from "react-hot-toast"
import { motion } from "framer-motion"
import toast from "react-hot-toast"
import PageTitle from "../components/PageTitle/PageTtile"
import ConsistentValue from "../components/ConsistentValue/ConsistentValue"
import AlgorithmChoice from "../components/BudgetMarket/AlgorithmChoice/AlgorithmChoice"
import HSBudget from "../components/BudgetMarket/HSBudget"
import HSList from "../components/HSList/HSList"
import Notes from "../components/Notes/Notes"

const MarketCalculator = () => {
  const INITIAL_VALUES = {
    remainder: "0",
    numberOfHSs: 1,
    currentHSNumber: 0,
    HS: {
      budget: "0",
      calculatedBudget: "0",
      startDate: new Date(new Date().getFullYear(), 0, 1),
      endDate: new Date(new Date().getFullYear(), 11, 31),
      budgetPerYear: ["0"],
      calculatedBudgetPerYear: ["0"],
    },
    consistentValue: {
      initValue: 0,
      manualValue: 0,
      addToValue: 0,
      calculatedValue: 0,
    },
    algorithmChoice: "simple", // 'simple' for adding all to last year, 'complex' for distribution
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <motion.main
      className="min-h-screen"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
          },
        },
      }}
    >
      <Toaster position="bottom-left" reverseOrder={false} />
      <motion.div variants={itemVariants}>
        <PageTitle content="Market Calculator" />
      </motion.div>
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={async (values, actions) => {
          try {
            const result = calculateBudget(values, values.algorithmChoice)
            if (result) {
              actions.setValues({
                ...values,
                HS: {
                  ...values.HS,
                  calculatedBudget: result.calculatedBudget,
                  calculatedBudgetPerYear: result.calculatedBudgetPerYear,
                },
                remainder: result.remainder,
                numberOfHSs: result.numberOfHSs,
                currentHSNumber: result.currentHSNumber,
              })
            }
            toast.success("HS budget calculated successfully!")
          } catch (error) {
            console.error("Error in form submission:", error)
            toast.error("An error occurred while calculating the HS budget!")
          } finally {
            actions.setSubmitting(false)
          }
        }}
      >
        <Form>
          <motion.div variants={itemVariants}>
            <AlgorithmChoice />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ConsistentValue />
          </motion.div>
          <motion.div variants={itemVariants}>
            <HSBudget />
          </motion.div>
        </Form>
      </Formik>
      <motion.div variants={itemVariants}>
        <HSList />
      </motion.div>
      <motion.div variants={itemVariants}>
        <Notes />
      </motion.div>
    </motion.main>
  )
}

export default MarketCalculator
