import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/home/Home"
import Product from "../pages/product/Product"
import About from "../pages/about/About"
import Contact from "../pages/contact/Contact"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='product/' element={<Product />} />
                <Route path='contact/' element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes