import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Destinos from "./pages/Destinos";
import Ofertas from "./pages/Ofertas";
import Contato from "./pages/Contato";

import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinos" element={<Destinos />} />
            <Route path="/ofertas" element={<Ofertas />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;