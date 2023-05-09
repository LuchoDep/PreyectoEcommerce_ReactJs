import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from "./components/Navbar/Navbar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


function App() {

    return (
        <BrowserRouter>

            <Navbar />
            
            <Routes>
                <Route path="/" element={ <ItemListContainer /> }/>
                <Route path="/categorias/:categId" element={ <ItemListContainer /> }/>
                <Route path="/producto/:prodId" element={ <ItemDetailContainer /> }/>
                <Route path="*" element={ <Navigate to={"/"} /> } />
            </Routes>

        </BrowserRouter>
    )
}

export default App
