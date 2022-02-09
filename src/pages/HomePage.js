import axios from "axios";
import { useState, useEffect } from "react";
import { SideBar } from "../components";
import ProductCard from "../components/ProductCard";

export default function HomePage() {
  const [products, setProducts] = useState([]);

  const allProducts = async () => {
    try {
      const response = await axios.get("http://localhost:4000/products");

      setProducts(response.data);
    } catch (error) {
      console.warn("No data found", error);
    }
  };

  const sortedproduct = products.sort(function (a, b) {
    return a.title.localeCompare(b.title);
  });

  useEffect(() => {
    allProducts();
  }, []);

  console.warn(products);
  return (
    <div className="side-main">
      <SideBar />
      <div className="">
        {sortedproduct.map((product, index) => {
          return (
            <ProductCard
              key={index}
              title={product.title}
              price={product.price}
              rating={product.rating}
              mainImage={product.mainImage}
              id={product.id}
            />
          );
        })}
      </div>
    </div>
  );
}
console.warn(ProductCard);
