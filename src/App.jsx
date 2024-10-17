import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import Order from "./pages/Order"
import Category from "./pages/Category"
import { useEffect, useState } from "react"
import Search from "./pages/Search"
import ProductDetail from "./pages/ProductDetail"

import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import NotFound from "./pages/NotFound"

import { getCategories, getProducts } from "./services/product.service"
import { useDispatch } from "react-redux"
import { setProducts } from "./redux/productSlice"
import { setCategories } from "./redux/categorySlice"
import Loading from "./components/Loading"

function App() {
  const [order, setOrder] = useState(null)
  const [darkMode, setDarkMode] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const dispatch = useDispatch()

  const onLoadEffect = () => {
    setTimeout(() => {
        setIsLoading(false);
    }, 2000);
  }

  useEffect(onLoadEffect, []);

  useEffect(() => {
    // dispatch(setProducts(mockData))
    getCategories((data) => {
      dispatch(setCategories(data))
    })
    getProducts((data) => {
      dispatch(setProducts(data))
    })

  }, [])

  if (isLoading) return <Loading /> 

  return (
    <div className={darkMode ? "dark" : "light"}>
      <BrowserRouter>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <ToastContainer theme={darkMode ? "dark" : "light"} />
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/checkout" element={<Checkout setOrder={setOrder} />}></Route>
          <Route path="/order-confirmation" element={<Order order={order} />}></Route>
          <Route path="/search/:name" element={<Search />}></Route>
          <Route path="/category/:name" element={<Category />}></Route>
          <Route path="/product/:id" element={<ProductDetail />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
