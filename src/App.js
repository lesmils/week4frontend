import { Route, Routes } from "react-router-dom";
import "./App.css";

import DetailsPage from "./pages/DetailsPage";
import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import { Navbar, Hero } from "./components/index";

function App() {
  return (
    <div>
      <div className="main-container">
        <Navbar />
        <Hero />
      </div>

      <div className="shop-container">
        <Routes>
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
