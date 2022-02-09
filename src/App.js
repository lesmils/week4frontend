import { Route, Routes } from "react-router-dom";
import "./App.css";

import DetailsPage from "./pages/DetailsPage";
import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import { Navbar, Hero, Footer } from "./components/index";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <div>
      <div className="main-container">
        <Navbar />
        <Hero />
      </div>

      <div>
        <Routes>
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/" element={<HomePage />} />
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
