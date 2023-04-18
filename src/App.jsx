import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from "./components/Navbar/Navbar";
import { ItemListConainer } from "./components/ItemListContainer/ItemListContainer";


function App() {

  return (
    <div className="App">
      <Navbar />

      <div className="containerProductos">
        <ItemListConainer nombre="MSI Ventus GeForce RTX 3080Ti 12gb" precio="$544.999" imagen="../public/gpu_ventus.webp" />
        <ItemListConainer nombre="AMD Asrock Challenger D RX 6700XT 12gb" precio="$220.000" imagen="../public/gpu_challenger.webp" />
        <ItemListConainer nombre="AMD Radeon RX500 8GB" precio="$139.999" imagen="../public/gpu_rx500.webp" />
      </div>
    </div>
  )
}

export default App
