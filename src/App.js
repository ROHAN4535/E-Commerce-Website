import Store from "./Components/Store/Store";
import About from "./Components/About/About";
import CartProvider from "./Components/Context/CartProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Components/Layout/Root";
import Home from "./Components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home/> },
      { path: "/store", element: <Store /> },
      { path: "/about", element: <About /> },
    ],
  },
]);

function App() {
  return <CartProvider>
    <RouterProvider router={router}/>
  </CartProvider>;
}

export default App;
