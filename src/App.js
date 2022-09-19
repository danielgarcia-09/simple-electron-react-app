import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Index from "./components/Index";
import Catalog from './components/Catalog';
import Cart from './components/Cart';
import { ShoppingProvider } from "./context/ShoppingProvider";

function App() {
  return (
    <ShoppingProvider>
      <BrowserRouter>
        <Header />
        <div className="route-children">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/catalogo" element={<Catalog />} />
            <Route path="/carrito" element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ShoppingProvider>
  );
}

export default App;
