import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from "./components/Navbar/Navbar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { Carrito } from "./components/Carrito/Carrito";
// import { Checkout } from "./components/Checkout/Checkout";


function App() {

    return (
        <CartProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/categorias/:categId" element={<ItemListContainer />} />
                    <Route path="/producto/:prodId" element={<ItemDetailContainer />} />
                    <Route path="*" element={<Navigate to={"/"} />} />
                    <Route path='/carrito' element={ <Carrito/> }/>
                    {/* <Route path='/checkout' element={ <Checkout/> }/> */}
                </Routes>
            </BrowserRouter>
        </CartProvider>
    )
}

export default App
