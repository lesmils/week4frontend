import { Route, Routes } from "react-router-dom";
import "./App.css";

import DetailsPage from "./pages/DetailsPage";
import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import { Navbar, Hero, Footer } from "./components/index";
import { useState } from "react";
import CategoryPage from "./pages/CategoryPage";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <div className="main-container">
        <Navbar searchval={search} searchset={setSearch} />
      </div>

      <div className="hero-container">
        <Hero />
      </div>

      <div>
        <Routes>
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/shop" element={<Shop searchval={search} />} />
          <Route path="/" element={<HomePage searchval={search} />} />
          <Route path="/categories/:id" element={<CategoryPage />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
