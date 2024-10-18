import { createBrowserRouter, RouterProvider } from "react-router-dom"

import RootLayout from "./components/RootLayout/RootLayout"

import Home from "./pages/Home"
import TextFormatter from "./pages/TextFormatter"
import MarketCalculator from "./pages/MarketCalculator"
import NotFound from "./pages/NotFound"

const publicRoutes = [
  { index: true, element: <Home /> },
  { path: "marketcalculator", element: <MarketCalculator /> },
  { path: "textformatter", element: <TextFormatter /> },
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
