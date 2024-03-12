import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import ShoppingCart from "./views/ShoppingCart"
import PizzaDetail from "./views/PizzaDetail"
import NotFound from "./views/NotFound"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/carrito" element={<ShoppingCart/>}  />
        <Route path="/pizza/:id" element={<PizzaDetail/>}  />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
      
    </>
  )
}

export default App
