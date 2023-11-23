import CartProvider from "./Components/Context/CartProvider";
import RootLayout from "./Components/Layout/Root";
import AuthContext from "./Components/Context/auth-context";
import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense, useContext } from "react";
import CottonTshirt from "./Assets/Clothes/CottonT-shirt.jpg";
import CottonTshirt1 from "./Assets/Clothes/CottonT-Shirt1.jpg";
import OversizedTshirt from "./Assets/Clothes/OversizedT-Shirt.jpg";
import OversizedTshirt1 from "./Assets/Clothes/OversizedT-Shirt1.jpg";
import PoloTshirt from "./Assets/Clothes/PoloT-Shirt.jpg";
import PoloTshirt1 from "./Assets/Clothes/PoloT-Shirt1.jpg";
import PumaTshirt from "./Assets/Clothes/PumaT-Shirt.jpg";
import PumaTshirt1 from "./Assets/Clothes/PumaT-Shirt1.jpg";
import PeterEnglandJeans from "./Assets/Clothes/Peter-England-Jeans.jpg";
import PeterEnglandJeans1 from "./Assets/Clothes/Peter-England-Jeans1.jpg";
import LevisJeans from "./Assets/Clothes/Levi's-Jeans.jpg";
import LevisJeans1 from "./Assets/Clothes/Levi's-Jeans1.jpg";

// Lazy load components
const Home = lazy(() => import("./Components/Home/Home"));
const Store = lazy(() => import("./Components/Store/Store"));
const About = lazy(() => import("./Components/About/About"));
const Login = lazy(() => import("./Components/Login/Login"));
const ContactUs = lazy(() => import("./Components/Contact/ContactUs"));
const Product = lazy(() => import("./Components/Store/Product"));

const productsArr = [
  {
    id: '1',
    title: "Cotton T-shirt",
    price: 40,
    brand: "Tommy Hilfiger",
    imageUrl: [CottonTshirt, CottonTshirt1],

    des: "Manufacturer :Veirdo, ASIN : B09CV2GDDH, Item model number : MEN_UNI_100_OSCOW_L, Country of Origin : India, Department : Unisex-adult, Importer : Awesome Fab Shopping Pvt Ltd, Net Quantity : 1.00 count, Generic Name : T-Shirt",
  },

  {
    id: '2',
    title: "Oversized T-Shirt",
    price: 45,
    brand: "Champion",
    imageUrl: [OversizedTshirt, OversizedTshirt1],
    des: "Manufacturer :Awesomefab Shopping Pvt Ltd, ASIN : B0BTW1G68X, Item model number : OS_100_FRGORGNL_SW_M, Country of Origin : India, Department : Men, Generic Name : T-Shirt",
  },

  {
    id: '3',
    title: "Polo T-Shirt",
    price: 30,
    brand: "U.S Polo",
    imageUrl: [PoloTshirt, PoloTshirt1],
    des: "Manufacturer :Allen Solly, ASIN : B08KTWG4VH, Item model number : ASKPQRGFW82524, Country of Origin : India, Department : Men, Packer : Aditya Birla Fashion and Retail Limited, Net Quantity : 1 count, Generic Name : Polo",
  },

  {
    id: '4',
    title: "Puma T-Shirt",
    price: 50,
    brand: "Puma",
    imageUrl: [PumaTshirt, PumaTshirt1],
    des: "Manufacturer :Puma, ASIN : B0B9B6ZWXZ, Item model number : 67652358, Country of Origin : India, Department : Men, Manufacturer : Puma, Packer : Puma Sports India, Net Quantity : 1.00 count, Generic Name : T-Shirt",
  },
  {
    id: "5",
    title: "Dark blue Jeans",
    price: 60,
    brand: "Peter England",
    imageUrl: [PeterEnglandJeans, PeterEnglandJeans1],
    des: "Manufacturer : ABFRL, ASIN  :  B0BKQ8M965, Item model number  :  PJDNPSKP929007, Country of Origin  :  India, Department  :  Men, Generic Name  :  Jeans",
  },
  {
    id: "6",
    title: "Slim black Jeans",
    price: 70,
    brand: "Levi's",
    imageUrl: [LevisJeans, LevisJeans1],
    des: "Manufacturer  :  ABFRL, ASIN  :  B09MJJVB9F, Item model number  :  ALDNVSKFK62082, Country of Origin  :  India, Department  :  Men, Generic Name  :  Jeans",
  },
];


function App() {
  const authCtx = useContext(AuthContext);
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <RootLayout />,
  //     children: [
  //       { path: "/", element: <Home /> },
  //       { path: "/store", element: <Store /> },
  //       { path: "/about", element: <About /> },
  //       {path: "/contact",element:<ContactUS/>}
  //     ],
  //   },
  // ]);

  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<RootLayout />}>
        <Route
            index
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="store"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                {authCtx.isLoggedIn ? (
                  <Store productsArr={productsArr} />
                ) : (
                  <Navigate to="/login" />
                )}
              </Suspense>
            }
          />
          <Route
            path="about"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="login"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="contact"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <ContactUs />
              </Suspense>
            }
          />
        
          <Route
            path="store/:productId"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <Product productsArr={productsArr} />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;