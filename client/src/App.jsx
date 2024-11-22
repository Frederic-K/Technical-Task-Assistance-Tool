import { createBrowserRouter, RouterProvider } from "react-router-dom"

import RootLayout from "./components/RootLayout/RootLayout"

import Home from "./pages/Home"
import DataFormatter from "./pages/DataFormatter"
import MarketCalculator from "./pages/MarketCalculator"
import NotFound from "./pages/NotFound"

const publicRoutes = [
  { index: true, element: <Home /> },
  { path: "marketcalculator", element: <MarketCalculator /> },
  {
    path: "dataformatter",
    element: <DataFormatter />,
    // children: [
    //   { path: "subroute", element: <SubComponent /> }, // Add your sub-route here
    // ],
  },
]

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <NotFound />,
      children: [
        ...publicRoutes,
        { path: "*", element: <NotFound /> }, // set 404 here to be wrapped with RootLayout where animate presence wrapper is set for outlet
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
